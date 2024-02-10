import { db } from "@/server/db";
import React from "react";
import { getServerAuthSession } from "@/server/auth";
import PayUpdateForm from "./PayUpdateForm";

export default async function page() {
  const session = await getServerAuthSession();
  const userId = session.user.id;

  const adminUser = await db.user.findUnique({
    where: { id: userId, isAdmin: true, isPaymentUpdater: true },
    select: {
      email: true,
      name: true,
    },
  });

// idadmin and is payment updater both should be true to see this child route
  if (!adminUser) {
    return <>You are not an admin or you dont have payment updating access , go back kid.</>;
  }

  return (
    <div>
      <PayUpdateForm issuerName={adminUser.name} />
    </div>
  );
}
