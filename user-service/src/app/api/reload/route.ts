import { NextResponse } from "next/server";

// Send request to BALANCE 
// http://localhost:3000/api/balance/info?of=garo
export async function GET(request: Request) {

//   const RELOAD: string = process.env.NEXTAUTH_URL || ""
const RELOAD: string = "http://localhost:3000"
  // Redirect to realod
  return NextResponse.redirect(RELOAD);
}