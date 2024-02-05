"use client";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const EventsData = ({ events }) => {
  const [searchInput, setSearchInput] = useState("");
  const searchParams = useSearchParams();
  const search = searchParams.get("type");
  return (
    <div className=" flex flex-col  items-center">
      <div className="relative flex flex-col w-[78%] text-[#573FEA] mb-8 lg:mb-20 max-w-[600px] items-center border bg-white rounded-full mx-3">
          <FaSearch className="absolute left-6 text-zinc-500  top-[34%]" />
          <input
            placeholder="Search"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="rounded-full pl-14 py-3  border border-[#B5B1B1] bg-white w-full h-full"
          />
        </div>
      <div className="tabs | mb-9 flex-col max-w-[630px] lg:max-w-none flex-wrap  md:flex-nowrap md:inline-flex lg:flex-row  inline-flex justify-center gap-6 text-lg font-semibold text-[#606060]  w-10/12 lg:w-full lg:px-4">
        <Link
          className={`${
            !search
              ? "border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]"
              : "border border-[#B5B1B1] bg-white"
          } cursor-pointer rounded-[72px]  px-3 lg:px-6 py-2 mx-4 lg:py-3 `}
          href="?"
          scroll={false}
        >
          All Events
        </Link>
        <Link
          href="?type=CULTURAL"
          className={`${
            search === "CULTURAL"
              ? "border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]"
              : "border border-[#B5B1B1] bg-white"
          } cursor-pointer rounded-[72px]  px-3 lg:px-6 py-2 mx-4 lg:py-3 `}
          scroll={false}
        >
          Cultural, Literary & Art
        </Link>
        <Link
          href="?type=TECHNICAL"
          className={`${
            search === "TECHNICAL"
              ? "border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]"
              : "border border-[#B5B1B1] bg-white"
          } cursor-pointer rounded-[72px]  px-3 lg:px-6 py-2 mx-4 lg:py-3`}
          scroll={false}
        >
          Technical Events
        </Link>
    
      </div>
      
      <div className="max-w-[1532px] mx-auto my-3">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-[93%] mx-auto gap-8 md:gap-10">
          {events
            .filter((d) => (search ? d.type === search : d))
            .filter((d) =>
              searchInput
                ? d.name.toLowerCase().includes(searchInput.toLowerCase())
                : d
            )
            .map((event, index) => (
              <Card key={index} event={event} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventsData;