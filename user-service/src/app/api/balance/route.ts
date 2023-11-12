import { NextResponse } from "next/server";

// Send request to BALANCE API
export async function GET(request: Request) {
  const BALANCE_API: string = process.env.BALANCE_API || "";
  const paymentUrl = new URL("/", BALANCE_API);

  let requestParams: string = request.url.split("?")[1];
  console.log(requestParams)
//   let amount: string = requestParams.split("&")[0].split("=")[1];

//   let requestType: string = requestParams.split("&")[1].split("=")[1];

  // Add ?amount=&requestType= to the payment URL
//   paymentUrl.searchParams.set("amount", amount);
//   paymentUrl.searchParams.set("requestType", requestType);

  // Redirect to the new URL
  return NextResponse.json('oke');
}
