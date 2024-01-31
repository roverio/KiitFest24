"use server";

import { db } from "@/server/db";
import { revalidatePath } from "next/cache";
import { MAX_EVENT_USER_CAN_REGISTER } from "@/constants";

export const registerUserInEvent = async (userId, eventId) => {
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
  if (userInEvent)
    return {
      success: false,
      message: "User already registered in this event",
    };

  const userRegisteredEvents = await db.eventRegisteredUser.findMany({
    where: {
      userId,
    },
  });
  if (userRegisteredEvents.length >= MAX_EVENT_USER_CAN_REGISTER)
    return {
      success: false,
      message: `You Can't register in more than ${MAX_EVENT_USER_CAN_REGISTER} events`,
    };

  await db.eventRegisteredUser.create({
    data: {
      userId,
      eventId,
    },
  });
  revalidatePath(`/events/${eventId}}`);
  return {
    success: true,
    message: "User successfully registered in the event.",
  };
};
