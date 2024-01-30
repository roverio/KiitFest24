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
    select: {
      kfid: true,
      email: true,
      name: true,
      phoneNumber: true,
      institution: true,
      isPaymentCompleted: true,
      merchandise: true,
      isKiitStudent: true,
    },
  });

  return <Dashboard userData={userData} />;
};

export default DashboardPage;
