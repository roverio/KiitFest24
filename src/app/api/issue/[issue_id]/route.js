import { NextResponse } from "next/server";
import { db } from "@/server/db";
export const GET = async (req) => {
  const id = req.url.split("issue/")[1];
  console.log(id);

  try {
    const issue = await db.issue.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(
      {
        Issue: issue,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        satus: false,
        message: "Something went wrong",
      },
      { status: 400 }
    );
  }
};
