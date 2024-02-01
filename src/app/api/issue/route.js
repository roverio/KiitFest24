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
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
          <div class="max-w-2xl px-6 py-8 mx-auto  h-screen bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dbzo04n4l/image/upload/v1706788498/oku698cca7lpglchjazm.png');">
              <div class="flex space-x-4 items-center">
                  <a href="#">
                      <img class="w-13 h-9 sm:h-12" src="https://res.cloudinary.com/dbzo04n4l/image/upload/v1706787389/eed3lged5vzchedokx7i.png" alt="">
                  </a>
                  <a href="#">
                      <img class="w-15 h-10 sm:h-14" src="https://res.cloudinary.com/dbzo04n4l/image/upload/v1706787388/bnyqwmcngzvxfaiw6hi6.png" alt="">
                  </a>
              </div>
          
              <div class="mt-8">
                  <h2 class="text-gray-700 dark:text-gray-200">Hi ${user.name},</h2>
          
                  <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                      Your issue has been created. Issue ID - ${newIssue.id}.<br> For further reference use this issue ID.
                  </p>
                  <p class="mt-4 text-gray-600 dark:text-gray-300">
                      Thanks, <br>
                      KIIT Fest team
                  </p>
              </div>
              
          
              <div class="mt-8">
                  <p class="text-gray-500 dark:text-gray-400">
                      This email was sent from <a href="#" class="text-blue-600 hover:underline dark:text-blue-400" target="_blank">contact@kiitfest.org</a>
                  </p>
          
                  <p class="mt-3 text-gray-500 dark:text-gray-400">© KIIT Fest 2024. All Rights Reserved.</p>
              </div>
          </div>
      </body>
      </html>
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
