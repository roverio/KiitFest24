import mailGun from "mailgun.js";
import formData from "form-data";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
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
    from: `KIIT Fest 2024 <email@kiitfest.org>`,
    to: email,
    subject: "Verify Your Email | KIIT Fest 2024",
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <h1 style="text-align: center; color: #1a1a1a;">Verify Your Email</h1>
      <p style="text-align: center; color: #1a1a1a;">Hi ${name},</p>
      <p style="text-align: center; color: #1a1a1a;">Thanks for registering for KIIT Fest 2024. Please verify your email by clicking the button below.</p>
      <div style="text-align: center;">
        <a href="http://kiitfest.org/api/auth/confirm?code=${verificationCode}" style="background-color: #1a1a1a; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Verify Email</a>
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

export const initiatePayment = (kfid, amountToPay) => {
  // naming variables here for ease
  const baseUrl = process.env.BILLDESK_URL;
  const security_id = process.env.BILLDESK_SECRET_ID;
  const checksum_key = process.env.BILLDESK_CHECKSUM;
  const merchant_id = process.env.BILLDESK_MERCHANT_ID;
  const customer_id = kfid;
  const amount = amountToPay;
  const return_url = process.env.BILLDESK_REDIRECT_URL; // billdesk will redirect to this url after payment

  // final string to be hashed
  const str = `${merchant_id}|${customer_id}|NA|${amount}|NA|NA|NA|INR|NA|R|${security_id}|NA|NA|F|NA|NA|NA|NA|NA|NA|NA|${return_url}`;

  // don't remove the template literal below. there is some problem with env : https://stackoverflow.com/questions/63558506/typeerror-cannot-read-property-sigbytes-of-undefined-error-in-pre-request-c
  const calculatedChecksum = CryptoJS.HmacSHA256(str, `${checksum_key}`)
    .toString()
    .toUpperCase();

  // this url is the form action
  const newURLtoPost = `${baseUrl}?msg=${str}|${calculatedChecksum}`;
  return newURLtoPost;
};
