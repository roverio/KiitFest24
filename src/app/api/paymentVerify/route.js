import CryptoJS from "crypto-js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("msg").toString();
  let values = code.split("|");	
  let checksumUrl = values[values.length - 1];

  // Example usage
  const receivedMsg = code; // Replace with the actual received message
  const receivedChecksum = checksumUrl; // Replace with the actual received checksum
  const checksum_key = process.env.BILLDESK_CHECKSUM;

  // Validate the checksum
  function validateChecksum(receivedMsg, receivedChecksum, key) {
    const hmac = CryptoJS.HmacSHA256(receivedMsg, key).toString().toUpperCase();
	
    const calculatedChecksum = CryptoJS.enc.Hex.stringify(hmac);

    const calculatedChecksumUpperCase = calculatedChecksum.toString().toUpperCase();
	console.log(hmac, 'calculatedChecksumUpperCase');
	console.log(receivedChecksum, 'receivedchecksum');
	console.log(receivedMsg, 'receivedMsg');


    if (calculatedChecksumUpperCase === receivedChecksum) {
		const kfId = values[1];
		// write code to update the database with the payment status
      console.log("Checksum validation successful");
    } else {
      console.error("Checksum validation failed");
    }
  }

  validateChecksum(receivedMsg, receivedChecksum, checksum_key);


  return NextResponse.json(
    {
      message: "Pay successfull",
    },
    {
      status: 200,
    }
  );
}

// const newValues = values.slice(0, values.length - 1).join("|");
// console.log(newValues, 'newValues');
// const calculatedChecksum = CryptoJS.HmacSHA256(newValues, `${checksumUrl}`)
// .toString()
// .toUpperCase();
