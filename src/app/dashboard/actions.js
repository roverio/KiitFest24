"use server";

import { generateVerificationCode, sendConfirmationEmail } from "@/lib/utils";

export const sendVerificationEmail = async ({ email, name }) => {
  const code = generateVerificationCode(email);

  await sendConfirmationEmail({
    email,
    name,
    verificationCode: code,
  });
}


// import CryptoJS from "crypto-js";

// export const updateMerchandise = async (merchandise, userEmail) => {
//   return null
//   const user = await db.user.update({
//     where: {
//       email: userEmail,
//     },
//     data: {
//       merchandise: !merchandise,
//     },
//   });

//   if (!user)
//     return {
//       success: false,
//       message: "Something went wrong",
//     };
// revalidatePath('/dashboard')
//   return {
//     success: true,
//     message: `Successfully ${merchandise ? "removed" : "added"} merchandise`,
//   };
// };
