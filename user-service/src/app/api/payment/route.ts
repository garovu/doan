import { NextResponse } from "next/server";

// Send request to PAYMENT API
export async function GET(request: Request) {
  const PAYMENT_API: string = process.env.PAYMENT_API || "";
  const paymentUrl = new URL("/payment", PAYMENT_API);

  let requestParams: string = request.url.split("?")[1];
  let amount: string = requestParams.split("&")[0].split("=")[1];

  // Request type:
  // 'payWithCC' - pay with Visa/Master
  // 'payWtithATM' - pay with ATM
  // 'captureWallet' - pay with momo QR
  let requestType: string = requestParams.split("&")[1].split("=")[1];
  let receiver: string = requestParams.split("&")[2].split("=")[1];

  // Add ?amount=&requestType= to the payment URL
  paymentUrl.searchParams.set("to", receiver);
  paymentUrl.searchParams.set("amount", amount);
  paymentUrl.searchParams.set("requestType", requestType);

  // Redirect to the new URL
  return NextResponse.redirect(paymentUrl);
}
