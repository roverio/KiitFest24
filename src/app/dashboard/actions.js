"use server";

import { db } from "@/server/db";
import { revalidatePath } from "next/cache";
import CryptoJS from "crypto-js";

export const updateMerchandise = async (merchandise, userEmail) => {
  return null
  const user = await db.user.update({
    where: {
      email: userEmail,
    },
    data: {
      merchandise: !merchandise,
    },
  });

  if (!user)
    return {
      success: false,
      message: "Something went wrong",
    };
revalidatePath('/dashboard')
  return {
    success: true,
    message: `Successfully ${merchandise ? "removed" : "added"} merchandise`,
  };
};
