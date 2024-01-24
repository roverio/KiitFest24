"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BgAudio from "./BgAudio";

import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex max-w-[1900px] backdrop-blur-md mx-auto justify-between fixed left-0 right-0 w-full z-[50] font-medium p-4 md:p-5 lg:px-20 lg:pt-10 items-center text-white ">
      <Image
        src="/Assets/kiit_logo.png"
        alt="kiit logo"
        width={100}
        height={100}
        className="w-16 h-10 lg:w-20 lg:h-12"
      ></Image>
      <MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg lg:text-[24px] hidden md:flex space-x-8"
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Events</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>ContactUs</Link>
      </motion.div>
      <div className="flex items-center space-x-2">
        <Link href={"/auth/login"}>
          <button className="  text-sm lg:text-[17px] bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-4 py-1  lg:px-9 lg:py-2">
            SIGN IN
          </button>
        </Link>
        <BgAudio />
        <button className="md:hidden" onClick={toggleNavbar}>
          <Image src="/mobiilenav.svg" alt="mb" width={32} height={12}></Image>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
