import Dashboard from "./Dashboard";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import ForceLogout from "./ForceLogout";

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
      isEmailVerified: true,
    },
  });

  // user should not access dashboard if he is not in our db, but exists in session due to some reason
  //this sideEffect component is written so it can logout user if his id his not stored in our database
  //in testing phase few users created their ids so it will only effect people who are not in our db
  if (!userData) {
    return <ForceLogout />;
  }

  return <Dashboard userData={userData} />;
};

export default DashboardPage;
