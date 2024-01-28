"use server";

import { db } from "@/server/db";

export const getEvents = async (category) => {
  const events = await db.event.findMany({
    where: {
      category: category,
    },
  });

  return events;
};
