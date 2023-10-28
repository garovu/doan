import Tip from "@/components/commons/Tip";
import { redirect } from "next/navigation";

export interface UserTippingProps {
  params: { slug: string };
}

export default function UserTipping({ params }: UserTippingProps) {
  //getAllUsers instead
  let userList: string[] = ["garo", "nam"];

  // username from searchparams
  let user = Object.values(params)[0];

  //only user can donate
  if (userList.includes(user)) {
    return (
      <>
        <h1>User Tipping</h1>
        <h2>Send tip to @{user}</h2>
        <p>Descriptions of @{user}</p>
        <Tip />
      </>
    );
  }
  redirect("/");
}
