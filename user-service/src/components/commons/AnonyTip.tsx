"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface AnonyProps {
  amount: string;
}

export default function AnonyTip({ amount }: AnonyProps) {
  //if user not sign-in
  return (
    <>
      <p>Anonymous Tip</p>
      <Button>
        <Link
          href={"/api/payment?amount=" + amount + "&requestType=captureWallet"}
        >
          MOMO QR
        </Link>
      </Button>
      <Button>
        <Link
          href={"/api/payment?amount=" + amount + "&requestType=payWithATM"}
        >
          Local ATM
        </Link>
      </Button>
      <Button>
        <Link href={"/api/payment?amount=" + amount + "&requestType=payWithCC"}>
          Visa/Mastercard
        </Link>
      </Button>
    </>
  );
}
