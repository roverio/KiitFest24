"use client";
import React from "react";
import Image from "next/image";
import ParticleBackgound from "./particleBackgound";
import { motion, useAnimation, useAnimate } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  const homePage = {};
  return (
    <div className="flex relative items-center w-full h-full justify-start flex-col space-y-32 py-2">
      <ParticleBackgound />
      <Image
        src="/Assets/fest_logo.png"
        alt="fest logo"
        width={1000}
        height={850}
        className="w-[50%] max-w-[960px]"
      ></Image>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 3 }}
      >
        <Image
          src="/Assets/objects1.png"
          alt="building"
          width={1500}
          height={1800}
          className="w-full absolute bottom-0  left-0 h-[50%]"
        ></Image>
      </motion.div>
      <Image
        src="/Assets/building3.png"
        alt="building"
        width={1500}
        height={1800}
        className="w-[73%] absolute bottom-[8%] left-[10%]  h-[48%]"
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
