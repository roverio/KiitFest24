
import React from "react";

import Navbar from "@/components/navbar";
import Image from "next/image";

import EventsData from "@/components/event/EventsData";

import { getEvents } from "./actions";

const Event = async () => {

  const events = await getEvents();


  return (
    <div className="text-white">
      <Navbar/>
      <div className="-z-40 w-[100vw] h-[40vh] md:h-[100vh] fixed">
        <Image
          src="/Assets/bgevent.png"
          alt="bg image"
          fill
          priority
          className="object-cover "
        />
      </div>
      <div className="-z-20 w-[100vw] h-[40vh] md:h-[100vh] fixed bg-event-bg"></div>
      <div className="-z-50 w-[100vw] h-[100vh] fixed  bg-[#0E0B17]"></div>
      <div className="text-white flex flex-col items-center">
        <h1 className="text-center font-bold text-3xl md:text-5xl tracking-[1.62px] md:tracking-[4.5px] pt-20 md:pt-32 uppercase mb-7 md:mb-16">
          EVENTS
        </h1>
      </div>
      <EventsData events={events} />
    </div>
  );
};

export default Event;
