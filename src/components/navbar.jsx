"use client";
import React, { useState, useEffect } from "react";
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
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowBackground(true);
      } else setShowBackground(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-[100vw] ${
        showBackground && "lg:backdrop-blur-[80px]"
      } top-0  fixed  z-[50] left-0 right-0  `}
    >
      <div className="flex lg:ml-8 max-w-[1900px]  mx-auto justify-between w-full  p-4 md:p-5 lg:px-20 lg:py-7 rounded-sm items-center text-white">
        <Image
          src="/Assets/kiit_logo.png"
          alt="kiit logo"
          width={100}
          height={100}
          className="w-16 h-10  lg:w-20 lg:h-12"
        ></Image>
        <MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="text-lg font-light font-roboto lg:text-[24px] hidden md:flex space-x-8"
        >
          <Link href={"/"} className="hover:scale-[1.14] duration-300">
            Home
          </Link>
          <Link href={"/events"} className="hover:scale-[1.14] duration-300">
            Events
          </Link>
          <Link href={"/about"} className="hover:scale-[1.14] duration-300">
            About
          </Link>
          <Link href={"/members"} className="hover:scale-[1.14] duration-300">
            Members
          </Link>
        </motion.div>
        <div className="flex items-center space-x-2">
          <Link href={"/auth/login"}>
            <button className="  text-sm lg:text-[17px] bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-4 py-1  lg:px-9 lg:py-2">
              SIGN IN
            </button>
          </Link>
          <BgAudio />
          <button className="md:hidden" onClick={toggleNavbar}>
            <Image
              src="/mobiilenav.svg"
              alt="mb"
              width={32}
              height={12}
            ></Image>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
