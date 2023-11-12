import { NextResponse } from "next/server";

// Send request to BALANCE 
// http://localhost:3000/api/balance/getalluser
export async function GET(request: Request) {
  const BALANCE_API: string = process.env.BALANCE_API || "";
  const balanceUrl = new URL("/getallusers", BALANCE_API);
  // Redirect to the API application
  return NextResponse.redirect(balanceUrl);
}