"use client";
import React, { useState } from "react";
import Image from "next/image";
import ParticleBackgound from "./particleBackgound";
import { motion, useAnimation, useAnimate } from "framer-motion";

const Hero = ({ clicked, clickHandler }) => {
  const homePage = {};
  return (
    <div className="flex bg-gradient-to-b from-[#0e0b17a8] via-[#1d15579f] to-[#05111d8a] relative items-center w-full h-[100vh] overflow-hidden justify-start flex-col space-y-32 py-2">
      <ParticleBackgound />
      <motion.div
        initial={{ opacity: 0, y: 400, scale: 0.7 }}
        animate={clicked ? { opacity: 1, y: 0, z: 0, scale: 1 } : {}}
        transition={{ delay: 0, duration: 1.5 }}
        className="flex items-center  justify-center"
      >
        <Image
          src="/Assets/fest_logo.png"
          alt="fest logo"
          width={1000}
          height={850}
          className="w-[70%] md:w-[60%] lg:w-[70%] max-w-[960px]"
        ></Image>
      </motion.div>
      <Image
        src="/Assets/objects1.png"
        alt="building"
        width={1500}
        height={1800}
        onClick={clickHandler}
        className={`w-full ${
          clicked ? "scale:[1]" : "scale-[1.2]"
        } object-cover md:object-fill transition duration-700 cursor-pointer  overflow-x-hidden absolute bottom-0  left-0 h-[50%]`}
      ></Image>

      <Image
        src="/Assets/building3.png"
        alt="building"
        width={1500}
        height={1800}
        onClick={clickHandler}
        className={`w-[73%] ${
          clicked ? "scale:[1]" : "scale-[1.2]"
        } object-cover md:object-fill transition duration-1000 cursor-pointer  absolute bottom-[8%] left-[10%]  h-[48%]`}
      ></Image>
    </div>
  );
};
{
  /* <button className="text-[37px] edgecut text-white font-medium bg-gradient-to-r from-[#034957] rounded to-[#3BE4FF] px-20 py-2">
        ENTER
      </button> */
}
export default Hero;
