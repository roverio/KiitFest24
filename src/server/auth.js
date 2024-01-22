import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";
import { comparePassword } from "@/lib/bcrypt";

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

        if (!email && !password) {
          throw new Error("Email and Password are required");
        } else if (!email) {
          throw new Error("Email is required");
        } else if (!password) {
          throw new Error("Password is required");
        }

        let user;
        try {
          user = await db.user.findUnique({
            where: {
              email: email,
            },
          });
        } catch (_err) {
          throw new Error("Something went wrong. Please try again.");
        }

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
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "*",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
