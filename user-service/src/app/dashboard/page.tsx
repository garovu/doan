import EditProfile from "@/components/commons/EditProfile";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

export interface DashboardProps {}

export default async function Dashboard(props: DashboardProps) {
  let session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <h1>Edit User</h1>
      <p>Protect page with seasion</p>
      <p>Money in balance!</p>
      <p>Withdraw</p>
      <EditProfile />
    </>
  );
}
