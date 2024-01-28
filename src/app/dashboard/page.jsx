import Dashboard from "./Dashboard";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

const DashboardPage = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/auth/login");
  }

  const userId = session?.user?.id;

  const userData = await db.user.findUnique({
    where: { id: userId },
    select: { email: true, name: true, phoneNumber: true, institution: true },
  });

  return <Dashboard userData={userData} />;
};

export default DashboardPage;
