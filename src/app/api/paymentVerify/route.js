import CryptoJS from "crypto-js";
import { NextResponse } from "next/server";

export async function POST(request) {

const url = "MERCHANTID|ARP10234|MSBI0412001668|NA|00000094.00|SBI|22270726|NA|INR|NA|NA|NA|NA|12-12-2004 16:08:56|0300|NA|NA|NA|NA|NA|NA|NA|NA|NA|NA|3734835005"

const params = new URLSearchParams(request.url)
const messageToDecode = params.get("msg")
console.log(params.get("msg"));
console.log(messageToDecode);

return NextResponse.json(
	{
	  message: "Pay successfull",
	},
	{
	  status: 200,
	}
  );
}
