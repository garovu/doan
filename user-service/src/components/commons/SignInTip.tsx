"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface SignInTipProps {
  amount: string;
  sender: string;
  receiver: string;
}

export default function SignInTip({
  sender,
  receiver,
  amount,
}: SignInTipProps) {
  //if user sign-in
  // using [transition API - through BALANCE]
  //http://localhost:3000/api/balance/transition?from=garo&to=nam&amount=300000
  return (
    <>
      <p>Send Tip</p>

      <Link
        href={`/api/balance/transition?from=${sender}&to=${receiver}&amount=${amount}`}
      >
        <Button>Send</Button>
      </Link>
    </>
  );
}
