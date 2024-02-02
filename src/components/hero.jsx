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
        transition={{ delay: 3.2, duration: 1 }}
        className="flex items-center  justify-center"
      >
        <Image
          src="/Assets/fest_newlogo.webp"
          alt="fest logo"
          width={1000}
          height={850}
          className="w-[100%] sm:w-[80vw] md:w-[60vw] lg:w-[45vw] xl:w-[40vw] pt-28 max-w-[960px] z-40"
        ></Image>
      </motion.div>

      <motion.img
        src="/Assets/objects1.png"
        alt="building"
        initial={{ opacity: 0, y: 900, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 20, delay: 2, duration: 4 }}
        className={`w-full  object-cover  lg:object-fill  overflow-x-hidden absolute -bottom-8  left-0 h-[47%]`}
      ></motion.img>

      <motion.img
        src="/Assets/building3.png"
        alt="building"
        className={`w-full lg:w-[73%]  object-cover  lg:object-fill  absolute bottom-[5%] lg:bottom-[4%] left-0 lg:left-[10%]  h-[45%]`}
      ></motion.img>
    </div>
  );
};

export default Hero;
