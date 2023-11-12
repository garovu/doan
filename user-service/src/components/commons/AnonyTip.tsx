"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface AnonyProps {
  receiver: string;
  amount: string;
}

export default function AnonyTip({ receiver, amount }: AnonyProps) {
  //if user not sign-in
  return (
    <>
      <p>Anonymous Tip</p>
      <Button>
        <Link
          href={`/api/payment?amount=${amount}&requestType=captureWallet&to=${receiver}`}
        >
          MOMO QR
        </Link>
      </Button>
      <Button>
        <Link
          href={`/api/payment?amount=${amount}&requestType=payWithATM&to=${receiver}`}
        >
          Local ATM
        </Link>
      </Button>
      <Button>
        <Link href={`/api/payment?amount=${amount}&requestType=payWithCC&to${receiver}`}>
          Visa/Mastercard
        </Link>
      </Button>
    </>
  );
}
