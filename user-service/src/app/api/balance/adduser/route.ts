import { NextResponse } from "next/server";

// Send request to BALANCE
// http://localhost:3000/api/balance/adduser
export async function GET(request: Request) {
  const BALANCE_API: string = process.env.BALANCE_API || "";
  const balanceUrl = new URL("/adduser", BALANCE_API);

  let requestParams: string = request.url.split("?")[1];

  let username: string = requestParams.split("&")[0].split("=")[1];
  let email: string = requestParams.split("&")[0].split("=")[1];
  let name: string = requestParams.split("&")[0].split("=")[1];

  // Add pramas to request header to the balance URL
  balanceUrl.searchParams.set("username", username);
  balanceUrl.searchParams.set("email", email);
  balanceUrl.searchParams.set("name", name);

  // Redirect to the API application
  return NextResponse.redirect(balanceUrl);
}
