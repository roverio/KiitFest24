"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { motion } from "framer-motion";
import ParticleBackgound from "@/components/particleBackgound";

import PreLoader from "@/components/PreLoader";
export default function Home() {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  return (
    <main className=" h-[100vh] bg-gradient-to-b overflow-hidden from-[#0e0b17a8] via-[#1d15579f] to-[#05111d8a]  z-20">
      <PreLoader />
      <motion.div
        initial={{ opacity: 0, y: 900 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.5, duration: 2 }}
      >
        <ParticleBackgound />
      </motion.div>
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
