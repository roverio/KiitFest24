import { db } from "@/server/db";
import { NextResponse } from "next/server";
import mailGun from "mailgun.js";
import formData from "form-data";
const MailGun = new mailGun(formData);
const mgclient = MailGun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});
const DOMAIN = process.env.MAILGUN_DOMAIN;
export const GET = async () => {
  try {
    const issue = await db.issue.findMany();
    return NextResponse.json({ Issues: issue }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const { issue, subject, email } = await req.json();

  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          status: false,
          message: "No user found, please register and try again",
        },
        {
          status: 400,
        }
      );
    }
    const userId = user.id;
    const newIssue = await db.issue.create({
      data: {
        userId,
        issue,
        subject,
        resolved: false,
      },
    });

    const data = {
      from: `KIIT Fest 2024 <email@kiitfest.org>`,
      to: email,
      subject: "Generated you issue ticket| KIIT FEST 2024",
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="text-align: center; color: #1a1a1a;">Update regarding ${newIssue.subject}</h1>
        <p style="text-align: center; color: #1a1a1a;">Hi ${user.name},</p>
        <p style="text-align: center; color: #1a1a1a;">We would like to inform you that a issue has been created with id${newIssue.id}</p>
        <p style="text-align: center; color: #1a1a1a;">Thanks for reporting the issue. Your feedback helps us get better.</p>
        
        <p style="text-align: center; color: #1a1a1a;">Regards,<br />KIIT FEST</p>
      `,
    };

    await mgclient.messages.create(`${DOMAIN}`, data);

    return NextResponse.json(
      {
        message: `Issue crated with id ${newIssue.id}`,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        status: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (req) => {
  const { issueId, accessCode } = await req.json();

  if (accessCode != process.env.ADMIN_SECRET) {
    return NextResponse.json(
      { status: false, message: "You are not an admin" },
      { status: 400 }
    );
  }
  try {
    const issue = await db.issue.findUnique({
      where: {
        id: issueId,
      },
    });

    // console.log(issue);
    if (!issue) {
      NextResponse.json(
        {
          status: false,
          message: "Issue not found",
        },
        { status: 400 }
      );
    }
    const user = await db.user.findUnique({
      where: {
        id: issue.userId,
      },
    });
    if (!user) {
      NextResponse.json(
        {
          status: false,
          message: "Issue owner not found",
        },
        { status: 400 }
      );
    }
    await db.issue.update({
      where: {
        id: issueId,
      },
      data: {
        resolved: true,
      },
    });
    const data = {
      from: `KIIT Fest 2024 <email@kiitfest.org>`,
      to: user.email,
      subject: "Update regarding your issue| KIIT FEST 2024",
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="text-align: center; color: #1a1a1a;">Update regarding ${issue.subject}</h1>
        <p style="text-align: center; color: #1a1a1a;">Hi ${user.name},</p>
        <p style="text-align: center; color: #1a1a1a;">We would like to inform you that your issue has been resolved</p>
        <p style="text-align: center; color: #1a1a1a;">Thanks for reporting the issue. Your feedback help us get better.</p>
        
        <p style="text-align: center; color: #1a1a1a;">Regards,<br />KIIT FEST</p>
      `,
    };

    await mgclient.messages.create(`${DOMAIN}`, data);

    return NextResponse.json(
      {
        message: "Issue resolved",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        status: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
};
