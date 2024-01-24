'use client'

import MembersCard from "@/components/MembersCard";
import Navbar from "@/components/navbar";
import { slideAnimation } from "@/config/motion";
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";

import { DesignDummyData, WebDummyData } from "@/constants";

const TEAM_NAME = ["Web Development", "Design", "Marketing", "HR", "App Development", "ML"];

const getDummyData = (team) => {
  const lowercaseTeam = team.toLowerCase();

  switch (lowercaseTeam) {
    case "web development":
      return WebDummyData;
    case "design":
      return DesignDummyData;
    default:
      return [];
  }
};

const Members = () => {
  const [activeTeam, setActiveTeam] = useState("web development")
  console.log("Members", activeTeam)

  const handleTeamChange = (event) => {
    setActiveTeam(event.target.value);
  };

  return (
    <div className="bg-about-background min-h-screen font-sans ">
      <Navbar />
      <Image 
        src="/members/topRight.svg" 
        alt="top-right-star-vector"
        width={500}
        height={500}
        className="absolute right-0 z-0"
      />
      <div className="absolute right-0 bottom-0 overflow-hidden">
        <Image 
          src="/members/bottomRight.svg" 
          alt="bottom-left-star-vector"
          width={500}
          height={500}
          className=" translate-y-20"
        />
      </div>
      <Image 
        src="/members/bottomLeft.svg" 
        alt="bottom-left-star-vector"
        width={500}
        height={500}
        className="absolute bottom-0"
      />
      <div className="flex flex-col justify-end h-full px-4 pb-12">
        <div className="mt-24 md:mt-40 max-w-5xl m-auto flex justify-between w-full mb-12">
          <TeamTitle team={activeTeam}/>
          <select
            id="teamSelect"
            name="teamSelect"
            value={activeTeam}
            onChange={handleTeamChange}
            className="w-full max-w-sm px-2 py-1 block border-gray-300 rounded-md shadow-sm sm:text-sm text-gray-700 relative z-10 ring-0 outline-none"
          >
            {TEAM_NAME.map((team, index) => (
              <option key={index} value={team.toLowerCase()}>
                {team}
              </option>
            ))}
          </select> 
        </div>
        <AnimatePresence>
          <motion.section {...slideAnimation('up')}>
            <MembersContainer dummyData={getDummyData(activeTeam.toLowerCase())} />
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  )
};

export default Members;

function MembersContainer ({ dummyData }) {
  return (
    <div className="flex flex-col justify-end h-full px-4">
      <div className="max-w-7xl m-auto ">
        <div className="flex justify-center flex-wrap gap-6 relative">
          {dummyData.map((member, index) => (
            <MembersCard 
              key={index}
              member={member}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const TeamTitle = ({ team }) => (
  <div className="flex gap-4 items-center ">
    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1741CC] to-[#16BCDC]"></div>
    <h1 className="text-2xl md:text-3xl text-white font-semibold capitalize">{team}</h1>
  </div>
);