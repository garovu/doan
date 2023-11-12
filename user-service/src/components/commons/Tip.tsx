"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSession } from "next-auth/react";
import AnonyTip from "./AnonyTip";
import SignInTip from "./SignInTip";

export interface TipProps {
  sender: string;
  receiver: string;
}

export default function Tip({ sender, receiver }: TipProps) {
  const { data: session, status } = useSession();
  const [amount, setAmount] = useState("10000");

  const TIPFORM = (
    <>
      <Input
        type="number"
        placeholder="minimum 10,000 VND"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Textarea placeholder="Say something to me..." />
    </>
  );

  //if user sign-in
  if (status === "authenticated") {
    return (
      <>
        {TIPFORM}
        <SignInTip sender={sender} receiver={receiver} amount={amount} />
        <AnonyTip receiver={receiver} amount={amount} />
      </>
    );
  }

  //if user not sign-in
  return (
    <>
      {TIPFORM}
      <p>Sign in to send me private message</p>
      <Button>Sign in</Button>
      <AnonyTip receiver={receiver} amount={amount} />
    </>
  );
}
