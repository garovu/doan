import Tip from "@/components/commons/Tip";
import { getDocs, query, where } from "firebase/firestore";
import { redirect } from "next/navigation";
import { usersClRef } from "@/components/commons/Firebase";
import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import getAllUser from "@/lib/getAllUsers";

export interface UserTippingProps {
  params: { slug: string };
}

export default async function UserTipping({ params }: UserTippingProps) {
  const session = await getServerSession(authOptions);
  // username from searchparams
  let receiver = Object.values(params)[0];

  if (!session) {
    return (
      <>
        <h1>User Tipping</h1>
        <h2>Send tip to @{receiver}</h2>
        <p>Descriptions of @{receiver}</p>
        <Tip sender={"anonymous"} receiver={receiver} />
      </>
    );
  }

  const q = query(usersClRef, where("email", "==", session?.user?.email));

  let sender: string = "";

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let dataObj = doc.data();
    sender = dataObj.username;
  });

  //getAllUsers
  let userList: string[] = await getAllUser();

  //only user can donate
  if (userList.includes(receiver)) {
    return (
      <>
        <h1>User Tipping</h1>
        <h2>Send tip to @{receiver}</h2>
        <p>Descriptions of @{receiver}</p>
        <Tip sender={sender} receiver={receiver} />
      </>
    );
  }
  redirect("/");
}
