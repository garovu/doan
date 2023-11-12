"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSession } from "next-auth/react";
import addNewUser from "@/lib/addNewUser";
import { useRouter } from "next/navigation";

export interface AddUserFormProps {
  usernameList: string[];
}

let description = (
  <p className="text-sm text-muted-foreground">Enter your username!</p>
);

export default function AddUserForm({ usernameList }: AddUserFormProps) {
  const [username, setUsername] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter()

  // check valid username
  let checkIsValid = (e: any) => {
    setUsername(e);
    if (usernameList.includes(e)) {
      description = (
        <p className="text-sm text-muted-foreground text-red-600">
          Your username has been used.
        </p>
      );
    } else if (e === "") {
      description = (
        <p className="text-sm text-muted-foreground">Enter your username!</p>
      );
    } else {
      description = (
        <p className="text-sm text-muted-foreground text-emerald-600">
          Your username is valid.
        </p>
      );
    }
  };

  return (
    <>
      <h1>Choose new username for your account.</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => checkIsValid(e.target.value)}
        />

          <Button
            type="submit"
            onClick={() => {
              addNewUser(
                session?.user?.email || "fake@mail.com",
                username || "joe",
                session?.user?.name || "john joe"
              );
              setTimeout(() => {
                router.refresh();
            }, 500);
            }}
          >
            Next
          </Button>
        
      </div>
      {description}
    </>
  );
}
