import React from "react";
import IssueForm from "./IssueForm";
// import get\
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";

const Issue = async () => {
  const session = await getServerAuthSession();
  
  if (!session) {
    redirect("/auth/login");
  }

  return <IssueForm />;
};

export default Issue;
