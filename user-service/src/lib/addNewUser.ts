import { doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db, usersClRef } from "@/components/commons/Firebase";

// add new username
export default async function addNewUser(userEmail: string, userName: string, name: string) {
  //add username field to firebase
  const q = query(usersClRef, where("email", "==", userEmail));
  let docID: string = "";
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docID = doc.id;
  });

  const userRef = doc(db, "users", docID);
  await setDoc(userRef, { username: userName }, { merge: true });

  //add new user for database
  /// api/balance/adduser?username=aloe&name=Aloe+the+Tris&email=aloe%40fakemail.com HTTP/1.1
  const res = await fetch(
    `http://localhost:3000/api/balance/adduser?username=${userName}&name=${name}&email=${userEmail}`
  );

}
