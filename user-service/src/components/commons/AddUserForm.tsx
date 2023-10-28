"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, usersClRef } from "@/components/commons/Firebase";
import { useSession } from "next-auth/react";
import Link from "next/link";

export interface AddUserFormProps {
  usernameList: string[];
}

let description = (
  <p className="text-sm text-muted-foreground">Enter your username!</p>
);

export default function AddUserForm({ usernameList }: AddUserFormProps) {
  const [username, setUsername] = useState("");
  const { data: session, status } = useSession();

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

  // add new username
  async function addNewUser(userEmail: string, userName: string) {
    const q = query(usersClRef, where("email", "==", userEmail));
    let docID: string = "";
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docID = doc.id;
    });

    const userRef = doc(db, "users", docID);
    await setDoc(userRef, { username: userName }, { merge: true });
  }

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
        <Link href="/">
          <Button
            type="submit"
            onClick={() => addNewUser(session?.user?.email || "", username)}
          >
            Next
          </Button>
        </Link>
      </div>
      {description}
    </>
  );
}
