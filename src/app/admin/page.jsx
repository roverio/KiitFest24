import { db } from "@/server/db";
import React from "react";
import { getServerAuthSession } from "@/server/auth";
import PopulateUserData from "./components/PopulateUserData";

export default async function page() {
  const session = await getServerAuthSession();
  const userId = session.user.id;

  const adminUser = await db.user.findUnique({
    where: { id: userId, isAdmin: true },
    select: {
      email: true,
      name: true,
    },
  });

  console.log(adminUser);

  if (!adminUser) {
    return <>You are not an admin, go back kid.</>;
  }

  return (
    <div>
      <PopulateUserData issuerName={adminUser.name} />
    </div>
  );
}
