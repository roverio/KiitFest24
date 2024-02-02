import Card from "@/components/event/Card";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { IoCaretBack } from "react-icons/io5";
import RegisterButton from "./RegisterButton";

const EventPage = async ({ params }) => {
  const eventId = params.eventId;

  const events = await db.event.findUnique({
    where: {
      id: eventId,
    },
  });

  const session = await getServerAuthSession();
  // if(session)ankitkumar19041@gmail.com

  if (session) {
    const userId = session.user.id || null;

    const registeredEventData = await db.eventRegisteredUser.findUnique({
      where: {
        userId_eventId: {
          userId,
          eventId,
        },
      },
    });

    return (
      <div className="bg-[url('/Assets/bgevent.png')] w-full  h-full bg-no-repeat bg-cover ">
        <Link href="/dashboard">
          <button className="text-white absolute right-8 top-6 border-b">
            Go to Dashboard
          </button>
        </Link>
        <div className="flex gap-8 max-w-[1500px] flex-col w-[95vw] lg:flex-row justify-center mx-auto py-10 md:py-20">
          <Card event={events} showRegister={false} />
          <section className="w-[90vw] mx-auto lg:w-[60vw] lg:h-[85vh] flex flex-col justify-between items-center text-white bg-gradient-to-r from-[#ffffff1a] to-[#ffffff00] backdrop-blur-2xl border-[#130C5C] rounded-xl border-[1px] md:py-[60px] md:px-12 px-6 text-lg py-8 gap-8 md:text-xl">
            {/* <IoCaretBack className="text-white text-xl"/> */}
            <p>{events.description}</p>
            <div>
              <p>Partcipation: {events.memberType}</p>
              <p>Category: {events.category}</p>
            </div>
            <RegisterButton
              isRegistered={registeredEventData ? true : false}
              eventId={eventId}
              userId={userId}
            />
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[url('/Assets/bgevent.png')] w-full  h-full bg-no-repeat bg-cover ">
        <Link href="/dashboard">
          <button className="text-white absolute right-8 top-6 border-b">
            Go to Dashboard
          </button>
        </Link>
        <div className="flex gap-8 max-w-[1500px] flex-col w-[95vw] lg:flex-row justify-center mx-auto py-10 md:py-20">
          <div className="">
            <Card event={events} showRegister={false} />
            <Link href="/events" className="max-w-72 flex-shrink-0">
              <button className="flex items-center text-white self-center mx-auto font-semibold font-sans mt-4 uppercase justify-center w-full bg-blue-800 rounded-md py-2 gap-1 group max-w-72 hover:bg-blue-700 transition-colors duration-300">
                <IoCaretBack className="text-white text-2xl top-4 lef-6 group-hover:-translate-x-2 transition-all duration-300"/>
                Back to events
              </button>
            </Link>
          </div>
          <section className="w-[90vw] mx-auto lg:w-[60vw] lg:h-[85vh] flex flex-col  text-white bg-gradient-to-r from-[#ffffff1a] to-[#ffffff00] backdrop-blur-2xl border-[#130C5C] rounded-xl border-[1px] md:py-[60px] md:px-12 px-6 text-lg py-8 gap-8 md:text-xl">
            <p>{events.description}</p>
            <div>
              <p>Partcipation: {events.memberType}</p>
              <p>Category: {events.category}</p>
            </div>

            <Link href="/auth/login">
              <button className="text-sm lg:text-[17px] font-semibold bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-4 py-1  lg:px-9 lg:py-3">
                Login to Register
              </button>
            </Link>
          </section>
        </div>
      </div>
    );
  }
};

export default EventPage;
