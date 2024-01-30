"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BgAudio from "./BgAudio";

import MobileNav from "./MobileNav";

const NavwithoutAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
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
      className={`w-[100vw] ${"lg:backdrop-blur-md"} top-0  fixed  z-[50] left-0 right-0  `}
    >
      <div className=" lg:ml-8 flex max-w-[1900px]  mx-auto justify-between w-full font-medium p-4 md:p-5 lg:px-20 rounded-sm items-center text-white">
        <Image
          src="/Assets/kiit_logo.png"
          alt="kiit logo"
          width={100}
          height={100}
          className="w-16 h-10  lg:w-20 lg:h-12"
        ></Image>
        <MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <div className="text-lg font-[300] font-roboto lg:text-[24px] hidden md:flex space-x-8">
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
        </div>
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

export default NavwithoutAnimation;
