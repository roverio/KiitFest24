"use server";

import { db } from "@/server/db";

export const getIssue = async (issueId) => {
  const Issue = await db.event.findUnique({
    where: {
      id: issueId,
    },
  });

  return Issue;
};
