import CryptoJS from "crypto-js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;
  const receivedMsg = searchParams.get("msg").toString();
  let values = receivedMsg.split("|");
  let lastCheckSumValue = values[values.length - 1];

  // Example usage
  const checksum_key = process.env.BILLDESK_CHECKSUM;

  if (receivedMsg !== "") {
    const stringNew = receivedMsg.replace("|" + lastCheckSumValue, ""); // Replace "|" and the code with an empty string

	console.log(stringNew, 'stringNew')
    const calculatedChecksum = calculateHmacSha256(
      stringNew,
      `${checksum_key}`
    );

    console.log(calculatedChecksum, lastCheckSumValue);
    if (calculatedChecksum === lastCheckSumValue && splitData[14] === "0300") {
      const customer = splitData[1];
      const txn = splitData[2];
      const amt = splitData[4];

	  console.log(customer, txn, amt);
	//   run db query here to update payment status
	
    }

    // Function to calculate HMAC-SHA256 hash using CryptoJS
    function calculateHmacSha256(str, key) {
      const hmac = CryptoJS.HmacSHA256(str, key);
      return hmac.toString().toUpperCase();
    }

    return NextResponse.json(
      {
        message: "Pay successfull",
      },
      {
        status: 200,
      }
    );
  }
}
// const newValues = values.slice(0, values.length - 1).join("|");
// console.log(newValues, 'newValues');
// const calculatedChecksum = CryptoJS.HmacSHA256(newValues, `${lastCheckSumValue}`)
// .toString()
// .toUpperCase();
