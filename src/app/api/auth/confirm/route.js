import { db } from "@/server/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/auth/unable-to-verify", request.url));
  }

  let decoded;
  try {
    decoded = jwt.verify(code, process.env.NEXTAUTH_SECRET);
  } catch (err) {
    return NextResponse.redirect(new URL("/auth/unable-to-verify", request.url));
  }

  const email = decoded.email;

  if (!email) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  await db.user.update({
    where: {
      email,
    },
    data: {
      isVerified: true,
    },
  });

  return NextResponse.redirect(new URL("/verified", request.url));
}
