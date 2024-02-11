"use server";

import { db } from "@/server/db";
import { revalidatePath } from "next/cache";

export const removeUserFromEvent = async (userId, eventId) => {
  return null
  const event = await db.event.findUnique({
    where: {
      id: eventId,
    },
  });
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!event || !user)
    return {
      success: false,
      message: "User or event not found",
    };

  const userInEvent = await db.eventRegisteredUser.findUnique({
    where: {
      userId_eventId: {
        userId,
        eventId,
      },
    },
  });
  if (!userInEvent)
    return {
      success: false,
      message: "User not registered in this event",
    };

  await db.eventRegisteredUser.delete({
    where: {
      userId_eventId: {
        userId,
        eventId,
      },
    },
  });
  revalidatePath("/dashboard/registered-events");
  return {
    success: true,
    message: "Successfully unregistered from event",
  };
};
