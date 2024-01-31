"use client";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"
const EventsData = ({ events }) => {
   const [searchInput, setSearchInput] = useState('')
  const searchParams = useSearchParams();
  const search = searchParams.get("type");
  return (
    <div>
      <div className="tabs | mb-12 flex-col lg:max-w-none  max-w-md flex-wrap  md:flex-nowrap md:inline-flex lg:flex-row  inline-flex w-full justify-center gap-6 text-xl font-semibold text-[#606060] ">
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
            Cultural
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
            Technical {"(Coming Soon)"}
          </Link>
          <div className="relative">
            <FaSearch className="absolute left-6 top-4"/>
          <input placeholder="Search" type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className="rounded-[72px]  pl-14 mx-2 py-3 border border-[#B5B1B1] bg-white"/>
          </div>
      </div>
      <div className="max-w-[1532px] mx-auto my-3">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto gap-8 md:gap-10">
          {events
            .filter((d) => (search ? d.type === search : d))
            .filter((d) => (searchInput ? d.name.toLowerCase().includes(searchInput.toLowerCase()) : d))
            .map((event, index) => (
              <Card key={index} event={event} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventsData;
