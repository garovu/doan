import { getDocs, query, where } from "firebase/firestore";
import { usersClRef } from "@/components/commons/Firebase";

export default async function getUsername(email: string) {
  let username: string = "garo";
  let isHasUsername: boolean = false;

  const q = query(usersClRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().hasOwnProperty("username")) {
      isHasUsername = true;
      username = doc.data().username;
    } else {
      isHasUsername = false;
    }
  });

  return {isHasUsername:isHasUsername, username:username}
}
