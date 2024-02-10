"use server";
import { db } from "@/server/db";

export const updatePayment = async (formData) => {
  "use server";
  try {
    const issuerName = formData.get("issuerName");
    const kfid = formData.get("kfid");

    console.log(issuerName, kfid, "issuerName, kfid");
    const res= await db.user.update({
      where: {
        kfid: kfid,
      },
      data: {
        payUpdaterName: issuerName,
        isPaymentCompleted: true,
      },
    });
    console.log(res, 'res of person');
    return {
      message: "success",
    };
  } catch (error) {
    return {
      message: `Error: ${error.message}`,
    };
  }
};
