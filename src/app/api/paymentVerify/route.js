import CryptoJS from "crypto-js";
import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { redirect } from "next/navigation";

// Function to calculate HMAC-SHA256 hash using CryptoJS
function calculateHmacSha256(str, key) {
  const hmac = CryptoJS.HmacSHA256(str, key);
  return hmac.toString().toUpperCase();
}

export async function POST(request) {
  const data = await request.formData();
  console.log(data);
  let receivedMsg = data.get("msg");
  let splitData = receivedMsg.split("|");
  let lastCheckSumValue = splitData[splitData.length - 1];

  const checksum_key = process.env.BILLDESK_CHECKSUM;

  if (receivedMsg !== "") {
    const stringNew = receivedMsg.replace("|" + lastCheckSumValue, ""); // Replace "|" and the code with an empty string
    console.log(stringNew, "stringNew");
    const calculatedChecksum = calculateHmacSha256(
      stringNew,
      `${checksum_key}`
    );

    const customer1 = splitData[1];
    console.log(customer1);

    if (calculatedChecksum === lastCheckSumValue && splitData[14] === "0300") {
      const customer = splitData[1];
      const txn = splitData[2];
      const amt = splitData[4];
      console.log(customer, txn, amt);
      //   run db query here to update payment status
      const user = await db.user.update({
        where: {
          kfid: Number(customer),
        },
        data: {
          isPaymentCompleted: true,
        },
      });

      if (user) {
        // Update successful, access the updated user data
        console.log("User updated successfully:", user);
      } else {
        // No user found with the provided kfid
      throw new Error("User not found with the provided kfid, contact us for help");
      }

      await db.payment.create({
        data: { kfid: Number(customer), txnId: txn, amount: Number(amt)},
      });
    
      // write a newquery to log payments if possible
      return redirect("/paid");
    }
    return redirect("/paymentnotsuccess");
  }
  return redirect("/paymentnotsuccess");
}
