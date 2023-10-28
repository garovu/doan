"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          {/*<DialogDescription>Choose your methord.</DialogDescription> */}
        </DialogHeader>
        <div className="">
          <Button onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/createusername' })}>
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Google
          </Button>
          <Button onClick={() => signIn("github", { callbackUrl: 'http://localhost:3000/createusername' })}>
            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Login with Github
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}