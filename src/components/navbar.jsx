import React from "react";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <nav className="flex justify-between fixed w-full z-[50] font-medium  px-20 py-10 items-center text-white ">
      <Image
        src="/Assets/kiit_logo.png"
        alt="kiit logo"
        width={100}
        height={100}
        className="w-20 h-12"
      ></Image>
      <div className="text-[24px] flex space-x-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Events</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>ContactUs</Link>
      </div>
      <button className="  text-[17px] bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-9 py-2">
        SIGN IN
      </button>
    </nav>
  );
};

export default navbar;
