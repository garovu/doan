"use client";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import LoginForm from "./LoginForm";
import { usePathname } from "next/navigation";

export interface NavProps {
    balance: number,
    username: string,
    session: any,
}

export default function Nav({username, balance, session }: NavProps) {
  
  const pathname = usePathname();

  let buttonBack: any;
  if (pathname === "/") {
    buttonBack = (
      <Button variant="secondary" asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    );
  } else if (pathname === "/dashboard"){
    buttonBack = (
      <Button variant="secondary" asChild>
        <Link href="/">Home</Link>
      </Button>
    );
  }else{
    buttonBack = (
      <Button variant="secondary" asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    );
  }

  if (session && pathname !== '/createusername') {
    return (
      <div className="flex">
        <ModeToggle />
        {buttonBack}
        <p>Signed in as @{username || "anonymous"}</p>
        <p> - </p>
        <p>{balance.toString()} VND</p>
        <Button variant="secondary" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <div>
      <ModeToggle />
      <LoginForm />
    </div>
  );
}
