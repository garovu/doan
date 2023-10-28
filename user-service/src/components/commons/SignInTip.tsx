"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface SignInTipProps {
  amount: string;
}

export default function SignInTip({ amount }: SignInTipProps) {
  //if user sign-in
  // using [transition API - through BALANCE]
  return (
    <>
      <p>Send Tip</p>
      <Button>
        <Link href={"/api/transition"}>Send</Link>
      </Button>
    </>
  );
}
