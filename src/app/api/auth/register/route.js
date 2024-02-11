import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { userSchema } from "@/validations/userSchema";
import { hashPassword } from "@/lib/bcrypt";
import { generateVerificationCode, sendConfirmationEmail } from "@/lib/utils";

export async function POST(request) {
  try {
    const data = await request.json();
    // const checkData = userSchema.safeParse(data);
    const checkData = await userSchema.validate(data);

    const {
      name,
      email,
      password,
      phoneNumber,
      date: dateOfBirth,
      city,
      state,
      gender,
      institution,
      isKiitStudent,
      rollNumber,
    } = data;

    console.log({isKiitStudent,rollNumber})

    // Check If user Exists
    const userExists = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Create User
    try {
      const hashedPasswordGen = await hashPassword(password);
      const studentsData = {
        name,
        email,
        password: hashedPasswordGen,
        phoneNumber,
        dateOfBirth: new Date(dateOfBirth),
        city,
        state,
        gender,
        institution,
      };

      if (isKiitStudent) {
        studentsData.isKiitStudent = isKiitStudent;
        studentsData.rollNumber = rollNumber;
      }
      
      await db.user.create({
        data: studentsData,
      });

      // const code = generateVerificationCode(email);

      // await sendConfirmationEmail({
      //   email,
      //   name,
      //   verificationCode: code,
      // });

      return NextResponse.json(
        {
          success: true,
          message: "User successfully created",
        },
        {
          status: 201,
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
          status: 500,
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
