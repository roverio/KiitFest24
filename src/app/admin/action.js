"use server";
import { db } from "@/server/db";
import { redirect } from "next/navigation";

export const searchUser = async (formData) => {
  "use server";
  const email = formData.get("email");

  let searchedUser = await db.user.findMany({
    where: {
      uid:parseInt(email),
    },
    select: {
      name: true,
      isPaymentCompleted: true,
      cardIssuer: true,
      receivedIdCard: true,
      isKiitStudent: true,
      kfid: true,
      uid: true,
      email: true,
      phoneNumber: true,
    },
  });
  console.log(searchedUser);
  return {
    message: "success",
    searchedUser,
  };
};

export const assignUid = async (formData) => {
  "use server";

  const issuerName = formData.get("issuerName");
  const uid = formData.get("uid");
  const kfid = formData.get("kfid");

  await db.user.update({
    where: {
      kfid: kfid,
    },
    data: {
      cardIssuer: issuerName,
      receivedIdCard: true,
      uid: parseInt(uid),
    },
  });
  return {
	message: "success",
  }
};
