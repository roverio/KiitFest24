"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BgAudio from "./BgAudio";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

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
    <>
      <MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <nav
        className={` ${
          showBackground && "backdrop-blur-[80px]"
        } top-0  fixed  z-[50] left-0 right-0  `}
      >
        <div
          className={`flex max-w-[1900px]    mx-auto justify-between w-full  p-4  lg:px-20 py-2 rounded-sm items-center text-white`}
        >
          <Image
            src="/Assets/k_logo.webp"
            alt="kiit logo"
            width={100}
            height={100}
            quality={50}
            className="w-14 h-12  lg:w-16 lg:h-16"
          ></Image>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              pathname == "/"
                ? { delay: 3.2, duration: 1 }
                : { type: "spring", duration: 0.7 }
            }
            className="text-lg font-roboto  lg:text-[20px] hidden md:flex space-x-8"
          >
            <Link href={"/"} className={`hover:scale-[1.14] pl-16 duration-300 ${pathname === "/" && "text-blue-500"}`}>
              Home
            </Link>
            <Link href={"/events"} className={`hover:scale-[1.14] duration-300 ${pathname === "/events" && "text-blue-500"}`}>
              Events
            </Link>
            <Link href={"/about"} className={`hover:scale-[1.14] duration-300 ${pathname === "/about" && "text-blue-500"}`}>
              About
            </Link>
            <Link href={"/members"} className={`hover:scale-[1.14] duration-300 ${pathname === "/members" && "text-blue-500"}`}>
              Members
            </Link>
            <Link href={"/contactus"} className={`hover:scale-[1.14] duration-300 ${pathname === "/contactus" && "text-blue-500"}`}>
              Contact us
            </Link>
            <Link href={"/privacy"} className={`hover:scale-[1.14] duration-300 ${pathname === "/privacy" && "text-blue-500"}`}>
              Privacy
            </Link>
          </motion.div>
          <div className="flex items-center space-x-2">
            <Link href={"/auth/login"}>
              <button className="  text-sm lg:text-[17px] bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-3 py-[2px]  lg:px-9 lg:py-2">
                SIGN IN
              </button>
            </Link>
            <BgAudio />
            <button className=" md:hidden" onClick={toggleNavbar}>
              <Image
                src="/mobiilenav.svg"
                alt="mb"
                width={28}
                height={9}
              ></Image>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
