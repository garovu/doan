"use client";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      <h1>Landing page about Tipme</h1>
      <ModeToggle />
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
