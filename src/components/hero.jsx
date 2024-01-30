"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex  relative items-center w-full h-[100vh] overflow-hidden justify-start flex-col space-y-32 py-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 8, duration: 1 }}
        className="flex items-center  justify-center"
      >
        <Image
          src="/Assets/fest_newlogo.png"
          alt="fest logo"
          width={1000}
          height={850}
          className="w-[100%] lg:w-[80%] pt-32   max-w-[960px]"
        ></Image>
      </motion.div>

      <motion.img
        src="/Assets/objects1.png"
        alt="building"
        initial={{ opacity: 0, y: 900, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 20, delay: 6, duration: 4 }}
        className={`w-full  object-cover  lg:object-fill  overflow-x-hidden absolute bottom-0  left-0 h-[50%]`}
      ></motion.img>

      <motion.img
        src="/Assets/building3.png"
        alt="building"
        initial={{ opacity: 0, y: 900, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className={`w-full lg:w-[73%]  object-cover  lg:object-fill  absolute bottom-[5%] lg:bottom-[8%] left-0 lg:left-[10%]  h-[48%]`}
      ></motion.img>
    </div>
  );
};

export default Hero;
