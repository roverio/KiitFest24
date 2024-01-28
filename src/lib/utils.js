import mailGun from "mailgun.js";
import formData from "form-data";
import jwt from "jsonwebtoken";

// update a tag of mail to kiitfest.org when in production
export const sendConfirmationEmail = async ({
  email,
  name,
  verificationCode,
}) => {
  const MailGun = new mailGun(formData);

  const mg = MailGun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });
  const DOMAIN = process.env.MAILGUN_DOMAIN;

  const data = {
    from: `KIIT Fest 2024 <kiitfest24@kiitian.com>`,
    to: email,
    subject: "Verify Your Email | KIIT Fest 2024",
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <h1 style="text-align: center; color: #1a1a1a;">Verify Your Email</h1>
      <p style="text-align: center; color: #1a1a1a;">Hi ${name},</p>
      <p style="text-align: center; color: #1a1a1a;">Thanks for registering for KIIT Fest 2024. Please verify your email by clicking the button below.</p>
      <div style="text-align: center;">
        <a href="http://localhost:3000/api/auth/confirm?code=${verificationCode}" style="background-color: #1a1a1a; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Verify Email</a>
      </div>
      <p style="text-align: center; color: #1a1a1a;">Regards,<br />KIIT FEST</p>
    `,
  };

  const mailRes = await mg.messages.create(`${DOMAIN}`, data);

  return mailRes;
};

export const generateVerificationCode = (email) => {
  return jwt.sign({ email }, process.env.NEXTAUTH_SECRET, {
    expiresIn: "30d",
  });
};
