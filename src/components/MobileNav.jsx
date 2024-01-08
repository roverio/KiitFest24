// Navbar.js
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MobileNav = ({ isOpen, toggleNavbar }) => {
  return (
    <motion.div
      className={`fixed w-full inset-0 bg-black bg-opacity-50 z-50 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={toggleNavbar}
    >
      <motion.div
        className="fixed text-white text-xl bg-gradient-to-r from-[#110D26] via-[#181146] to-[#110D26]  h-full w-64 p-4 shadow-md top-0 left-0"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Your Navbar content goes here */}
        <ul className="p-2 space-y-4">
          <li>
            <Image
              src="/Assets/fest_logo.png"
              alt="fest logo"
              width={1000}
              height={850}
              className="w-[80%] "
            ></Image>
          </li>
          <li className="pt-4">Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
