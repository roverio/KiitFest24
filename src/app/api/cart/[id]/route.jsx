import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET(req) {
	// this id is user id
	 const userIdExtract = req.nextUrl.pathname.split('/cart/')[1]
	try {
		// Retrieve all event IDs associated with the user
		const userEventRecords = await db.userEvent.findMany({
		  where: { userId: userIdExtract },
		  select: { eventId: true },
		});
	
		// Extract event IDs from the records
		const eventIds = userEventRecords.map((record) => record.eventId);
	
		// Retrieve event details based on event IDs
		const eventsForUser = await db.event.findMany({
		  where: { eventid: { in: eventIds } },
		});
	
		return NextResponse.json(
		  {
			eventsForUser,
		  },
		  {
			status: 200,
		  }
		);
	  } catch (error) {
		console.error('Error retrieving events for user:', error);
		throw error;
	  }
	}