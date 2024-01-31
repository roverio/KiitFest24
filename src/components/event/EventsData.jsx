"use client";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const EventsData = ({ events }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("type");
  return (
    <div>
      <div className="tabs | mb-12 inline-flex w-full justify-center gap-6 text-xl font-semibold text-[#606060] ">
        <div className="tabs | mb-12 inline-flex w-full justify-center gap-6 text-xl font-semibold text-[#606060] ">
          <Link
            className={`${
              !search
                ? "border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]"
                : "border border-[#B5B1B1] bg-white"
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
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
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
            scroll={false}
          >
            Cultural
          </Link>
          {/* <Link
            href="?type=TECHNICAL"
            className={`${
              search === "TECHNICAL"
                ? "border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]"
                : "border border-[#B5B1B1] bg-white"
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
            scroll={false}
          >
            Technical
          </Link> */}
          {/* <Link
            href="?type=general"
            className={`${
              search === "general"
                ? "border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]"
                : "border border-[#B5B1B1] bg-white"
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
            scroll={false}
          >
            General
          </Link> */}
        </div>
      </div>
      <div className="max-w-[1532px] mx-auto my-3">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto gap-8 md:gap-10">
          {events
            .filter((d) => (search ? d.type === search : d))
            .map((event, index) => (
              <Card key={index} event={event} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventsData;
