import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileNav = ({ isOpen, toggleNavbar }) => {
  return (
    <motion.div
      className={`fixed w-full inset-0 bg-black bg-opacity-50 z-[70] ${
        isOpen ? "" : "hidden"
      }`}
      onClick={toggleNavbar}
    >
      <motion.div
        className="fixed text-white flex flex-col  text-xl font-light font-roboto justify-between bg-gradient-to-r from-[#110D26] via-[#181146] to-[#110D26]  h-full w-[50vw] p-4 shadow-md top-0 left-0"
        initial={{ x: "-100%" }}
        animate={isOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="p-2 flex flex-col space-y-6">
          <li className="mb-6">
            <Link href={"/"}>
              <Image
                src="/Assets/fest_logo.png"
                alt="fest logo"
                width={1000}
                height={850}
                className="w-full "
              ></Image>
            </Link>
          </li>

          <li className="hover:pl-3 duration-200">
            {" "}
            <Link href={"/"}>Home </Link>
          </li>

          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/about"}>About </Link>
          </li>

          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/events"}>Events </Link>
          </li>
          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/members"}>Members </Link>
          </li>
          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/contactus"}>Contact Us </Link>
          </li>
        </ul>
        <div className="flex w-full  justify-between p-2">
          <Link href="/">
            <Image
              src="/icons/social1.png"
              alt="social"
              width={40}
              className="hover:scale-[1.1] transition"
              height={20}
            ></Image>
          </Link>
          <Link href="https://www.instagram.com/kiitfest?igsh=MXJ1OGh2a2FyeTFvMQ==">
            <Image
              src="/icons/social2.png"
              alt="social"
              width={40}
              className="hover:scale-[1.1] transition"
              height={20}
            ></Image>
          </Link>
          <Link href="/">
            <Image
              src="/icons/social3.png"
              alt="social"
              width={40}
              className="hover:scale-[1.1] transition"
              height={20}
            ></Image>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
