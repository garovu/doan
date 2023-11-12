import { NextResponse } from "next/server";

// Send request to BALANCE API
//127.0.0.1:5000/transition?from=garo&to=nam&amount=300000
export async function GET(request: Request) {
  const BALANCE_API: string = process.env.BALANCE_API || "";
  const balanceUrl = new URL("/transition", BALANCE_API);

  let requestParams: string = request.url.split("?")[1];
  let from: string = requestParams.split("&")[0].split("=")[1];
  let to: string = requestParams.split("&")[1].split("=")[1];
  let amount: string = requestParams.split("&")[2].split("=")[1];

  // Add ?amount=&requestType= to the payment URL
  balanceUrl.searchParams.set("from", from);
  balanceUrl.searchParams.set("to", to);
  balanceUrl.searchParams.set("amount", amount);
  
  // Redirect to the new URL
  return NextResponse.redirect(balanceUrl);
}
