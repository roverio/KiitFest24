import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { userSchema } from "@/validations/userSchema";
import { hashPassword } from "@/lib/bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();
    const checkData = userSchema.safeParse(data);

    if (!checkData.success) {
      return NextResponse.json(
        {
          success: checkData.success,
          message: "Invalid data provided"
        },
        {
          status: 400,
        }
      );
    }

    const { id, name, personalEmail, phoneNumber, password, DateOfBirth, city, state, gender, college } = data;

    // Check If user Exists
    const userExists = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 400
        },
      );
    }

    // Create User
    try {
      const hashedPasswordGen = await hashPassword(password);
      await db.user.create({
        data: {
          name,
          personalEmail,
          phoneNumber,
          password: hashedPasswordGen,
          DateOfBirth,
          city,
          state,
          gender,
          college,
        }
      });
      return NextResponse.json(
        {
          success: true,
          message: "User successfully created"
        },
        {
          status: 201
        }
      );
    } catch (error) {
      console.error({ register: error });
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong",
        },
        {
          status: 500
        }
      );
    }
  } catch (error) {
    console.error({ requestError: error });
    return NextResponse.json(
      {
        message: "No data was provided or invalid JSON format",
      },
      {
        status: 400,
      }
    );
  }
}
