import { getDocs, query, where } from "firebase/firestore";
import { usersClRef } from "@/components/commons/Firebase";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AddUserForm from "@/components/commons/AddUserForm";

export interface AddUserProps {}

async function userQuery(userEmail: string) {}

let c: boolean;
export default async function AddUser(props: AddUserProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }
  const usernameList: string[] = ["garo", "username"];
  let isHasUsername;
  let userSession = session.user;

  const q = query(usersClRef, where("email", "==", userSession?.email));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().hasOwnProperty("username")) {
      isHasUsername = true;
    } else {
      isHasUsername = false;
    }
  });

  console.log(isHasUsername);

  // get username list from firebase
  // flush read firebase
  // const usersClSnapshot = await getDocs(usersClRef);
  // usersClSnapshot.forEach((doc) => {
  //   // doc.data()  = {
  //   //     emailVerified: null,
  //   //     email: 'tamquocchi2002@gmail.com',
  //   //     name: 'Chu Chu Tuan',
  //   //     image: 'https://lh3.googleusercontent.com/a/ACg8ocIUPCnXON_ZWcoBjgUV7nF7CSU4nWzTAueICdkvHUbZ=s96-c'
  //   //   }

  //   if (doc.data().hasOwnProperty("username")) {
  //     if (doc.data().email === userSession?.email) {
  //       isHasUsername = true;
  //     }
  //     usernameList.push(doc.data().username);
  //   }
  // });

  if (isHasUsername) {
    // redirect to dashboard
    redirect("/dashboard");
  }

  return (
    <>
      <AddUserForm usernameList={usernameList} />
    </>
  );
}
