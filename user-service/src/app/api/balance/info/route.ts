import { NextResponse } from "next/server";

// Send request to BALANCE 
// http://localhost:3000/api/balance/info?of=garo
export async function GET(request: Request) {
  const BALANCE_API: string = process.env.BALANCE_API || "";
  const balanceUrl = new URL("/info", BALANCE_API);

  let requestParams: string = request.url.split("?")[1];

  let username: string = requestParams.split("&")[0].split("=")[1];

  // Add ?of=username to the balance URL
  balanceUrl.searchParams.set("of", username);

  // Redirect to the new URL
  return NextResponse.redirect(balanceUrl);
}
