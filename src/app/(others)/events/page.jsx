"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { allTechnicalCategories, allCulturalCategory } from "@/constants";
import CustomDropdown from "@/components/event/CustomDropdown";
import Card from "@/components/event/Card";
import { getEvents } from "./actions";

export default function Event() {
  const [selectedTechnicalCategory, setSelectedTechnicalCategory] =
    useState("School of CSE");
  const [selectedCulturalCategory, setSelectedCulturalCategory] =
    useState(null);
  const [eventsArray, setEventsArray] = useState([]);
  const [selectedHeading, setSelectedHeading] = useState("School of CSE");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleDetailsClick = (event) => {
    setSelectedCard(event);
  };

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    if (isPageLoaded) {
      // Set the heading based on the selected category
      setSelectedHeading(
        selectedTechnicalCategory || selectedCulturalCategory || "EVENTS"
      );

      // Get the events based on the selected category
      let selectedCategory;

      if (selectedTechnicalCategory) {
        selectedCategory = allTechnicalCategories.find(
          (c) => c.name === selectedTechnicalCategory
        );
      } else if (selectedCulturalCategory) {
        selectedCategory = allCulturalCategory.find(
          (c) => c.name === selectedCulturalCategory
        );
      }
      getEvents(selectedCategory.enum).then((e) => setEventsArray(e));
    }
  }, [selectedTechnicalCategory, selectedCulturalCategory, isPageLoaded]);

  return (
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
        <h1 className="text-center font-bold text-lg md:text-5xl tracking-[1.62px] md:tracking-[4.5px] pt-20 md:pt-32 uppercase">
          EVENTS
        </h1>
        <div className="flex justify-between gap-3 mx-auto mt-7 md:mt-16 max-w-[800px] w-11/12 md:w-9/12">
          <CustomDropdown
            label="Technical Event Category"
            options={allTechnicalCategories.map((c) => c.name)}
            selectedValue={selectedTechnicalCategory}
            onValueChange={(v) => {
              setSelectedTechnicalCategory(v);
              setSelectedCulturalCategory(null);
            }}
          />

          <CustomDropdown
            label="Cultural Event Category"
            options={allCulturalCategory.map((c) => c.name)}
            selectedValue={selectedCulturalCategory}
            onValueChange={(v) => {
              setSelectedCulturalCategory(v);
              setSelectedTechnicalCategory(null);
            }}
          />
        </div>
        <h2 className="text-center font-bold text-lg md:text-5xl tracking-[1.62px] md:tracking-[4.5px] pt-10 md:pt-16 uppercase">
          {selectedHeading}
        </h2>
      </div>

      <div className="max-w-[1532px] mx-auto my-10 md:my-20">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto gap-8 md:gap-10">
          {eventsArray.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

// export default Event;
