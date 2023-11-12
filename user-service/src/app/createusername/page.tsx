import { getDocs, query, where } from "firebase/firestore";
import { usersClRef } from "@/components/commons/Firebase";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AddUserForm from "@/components/commons/AddUserForm";
import getAllUser from "@/lib/getAllUsers";

export interface AddUserProps {}

export default async function AddUser(props: AddUserProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const usernameList: string[] = await getAllUser();
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
