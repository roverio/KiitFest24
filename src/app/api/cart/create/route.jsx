import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/server/auth";

// addtousercart
export async function POST(req) {
  const body = await req.json();
  try {
    const userSession = await getCurrentUser();
    console.log(userSession);
    if (!userSession) {
      return NextResponse.json(
        { message: "You are unauthorized" },
        {
          status: 401,
        }
      );
    }

    const user = await db.user.findUnique({
      where: { userid: userSession.userid },
      include: { cart: true },
    });

    // if (user.cart.find((n) => n.eventCode === body.eventCode)) {
    //   return NextResponse.json(
    //     { message: "Event already exists in cart" },
    //     {
    //       status: 400,
    //     }
    //   );
    // }
    user.cart.find(n=>n.eventCode === body.eventCode)

    const updatedUser = await db.user.update({
      where: { userid: userSession.userid },
      data: {
        cart: {
          create: [{ ...body }],
        },
      },
      include: { cart: true },
    });

    return NextResponse.json(
      {
        updatedUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// getcart

// export async function GET(req) {
//   const body = await req.json();
//   console.log(body);
//   const code = await getToken({ req, raw: true });
//   console.log(code);

//   const decodedToken = jwt.verify(code, process.env.NEXTAUTH_SECRET);
//   console.log(decodedToken);

//   const userEvents = await db.user.findUnique({
//     // if(!token || !decodedToken.id) {
//     // 	console.log(token, decodedToken)
//     //     return NextResponse.json({ message:'token missing or invalid' },    {
//     // 		status: 400,
//     // 	  })
//     // }
//   });
//   // const user = await db.user.findUnique({where: {
//   // 	id: decodedToken.id
//   // }})

//   // console.log(user)

//   return NextResponse.json(
//     {
//       success: false,
//       message: "User already exists",
//     },
//     {
//       status: 400,
//     }
//   );

//   // db.cart.create({

//   // 	data: {

//   // 	}
//   // }
//   // )
// }
