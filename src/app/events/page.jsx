// "use client";

import React from "react";
// import getEve
import Image from "next/image";
// import { useState, useEffect } from "react";
// import { allTechnicalCategories, allCulturalCategory } from "@/constants";
// import CustomDropdown from "@/components/event/CustomDropdown";
import Card from "@/components/event/Card";
import EventsData from "@/components/event/EventsData";
import NavwithoutAnimation from "@/components/Navwithoutanimation";
import { getEvents } from "./actions";

const Event = async () => {
  // const [selectedTechnicalCategory, setSelectedTechnicalCategory] = useState();
  // const [selectedCulturalCategory, setSelectedCulturalCategory] =
  //   useState(null);
  // const [eventsArray, setEventsArray] = useState([]);
  // const [selectedHeading, setSelectedHeading] = useState(null);
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  // const [selectedCard, setSelectedCard] = useState(null);

  // const [selectedEventType, setSelectedEventType] = useState(null);
  // console.log({ selectedEventType });

  // const handleDetailsClick = (event) => {
  //   setSelectedCard(event);
  // };

  // useEffect(() => {
  //   setIsPageLoaded(true);
  // }, []);

  // useEffect(() => {
  //   if (isPageLoaded) {
  //     // Set the heading based on the selected category
  //     setSelectedHeading(
  //       `${selectedEventType}: ${
  //         selectedTechnicalCategory || selectedCulturalCategory
  //       }`
  //     );

  //     // Get the events based on the selected category
  //     let selectedCategory;

  //     if (selectedTechnicalCategory) {
  //       selectedCategory = allTechnicalCategories.find(
  //         (c) => c.name === selectedTechnicalCategory
  //       );
  //     } else if (selectedCulturalCategory) {
  //       selectedCategory = allCulturalCategory.find(
  //         (c) => c.name === selectedCulturalCategory
  //       );
  //     }
  //     if (selectedCategory)
  //       getEvents(selectedCategory.enum).then((e) => setEventsArray(e));
  //   }
  // }, [
  //   selectedTechnicalCategory,
  //   selectedCulturalCategory,
  //   isPageLoaded,
  //   selectedEventType,
  // ]);
  // let events = [];
  // const fk = async () => {
  //   console.log(events);
  // };
  const events = await getEvents();
  // fk();

  return (
    <>
      <NavwithoutAnimation />
      <div className="text-white">
        <div className="-z-40 w-[100vw] h-[40vh] md:h-[100vh] fixed">
          <Image
            src="/Assets/bgevent.png"
            alt="bg image"
            fill
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
    </>
  );
};

export default Event;
