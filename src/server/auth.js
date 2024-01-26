import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "@/lib/bcrypt";
import { db } from "@/server/db";
import { generateAccessToken } from "@/lib/utils";

export const authOptions = {
	session: {
	  strategy: "jwt",
	},
	adapter: PrismaAdapter(db),
	providers: [
	  CredentialsProvider({
		id: "credentials",
		name: "Credentials",
		type: "credentials",
		credentials: {
		  email: { label: "Email", type: "email" },
		  password: { label: "Password", type: "password" },
		},
		async authorize(credentials) {
		  const { email, password }  = credentials;
		
		  if (!email) {
			throw new Error("Email is required");
		  }
		  if (!password) {
			throw new Error("Password is required");
		  }
  
		  try {
			const user = await db.user.findUnique({
			  where: {
				email: email,
			  },
			});

			if (!user) {
				throw new Error("User not found. Please Register.");
			  }
	  
			  if(!user.isEmailVerified){
				throw new Error("Please verify your email to login.")
			  }
	  
			  const isValid = await comparePassword(password, user.password);
	  
			  if (!isValid) {
				throw new Error("Wrong credentials. Please try again.");
			  }

			  const accessToken = generateAccessToken(user)
			//   the return object will be saved in the JSON Web Token and can be accessed  in th callbacks
			  return {user : { ...user, access: accessToken }}
		  } catch (err) {
			throw new Error(err.message);
		  }
		},
	  }),
	],
	callbacks: {
	  async jwt({ token, user }) {
		// passing entire user object in token (gets set on initial signin)
		if (user) {
			console.log(user)
		  return { ...token, ...user };
		}
		return token;
	  },
	  async session({ session, token }) {
		if (token && session) {
		  session.user.id = token.id;
		}
		return { ...token};
	  },
	},
	pages: {
	  signIn: "/auth/login",
	},
	debug : process.env.NODE_ENV==="development"
  };

  export async function getCurrentUser() {
	try {
		const session = await getServerSession(authOptions);
		return session?.user;	
	} catch (error) {
		throw error
	}
    
  }