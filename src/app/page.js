"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { motion } from "framer-motion";

import PreLoader from "@/components/PreLoader";
export default function Home() {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  return (
    <main className=" h-[100vh]  z-20">
      {/* <div className="fixed top-0 left-0 min-h-[100vh] min-w-[100vw] z-[-10]">
        <video className="object-cover w-full h-[100vh]" autoPlay loop muted>
          <source src="/Assets/bg_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}{" "}
      {/* This is the code for using video instead of particle js */}
      <PreLoader />
      <motion.div
        initial={{ opacity: 0, y: 900, display: "none" }}
        animate={{ opacity: 1, y: 0, display: "block" }}
        transition={{ delay: 6, duration: 2 }}
      >
        <Navbar clicked={clicked} />
        <Hero clicked={clicked} clickHandler={clickHandler} />
      </motion.div>
    </main>
  );
}
