import React from "react";
// import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import IssueForm from "./IssueForm";

const Issue = async () => {
  const session = await getServerSession();
  return <IssueForm />;
};

export default Issue;
