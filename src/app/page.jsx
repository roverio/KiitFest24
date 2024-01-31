"use client";

import Hero from "@/components/hero";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { useState } from "react";
import PreLoader from "@/components/PreLoader";
import ParticleBackground from "@/components/particleBackground";
// import Image from "next/image";
// import { useState } from "react";
// import BgAudio from "@/components/BgAudio";

export default function Home() {
  const [hj, kl] = useState("");
  return (
    <main className=" h-[100vh] bg-gradient-to-b overflow-hidden from-[#0e0b17a8] via-[#1d15579f] to-[#05111d8a]  z-20">
      <PreLoader />
      <motion.div
        initial={{ opacity: 0, y: 900 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <ParticleBackground />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 900, display: "none" }}
        animate={{ opacity: 1, y: 0, display: "block" }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <Navbar />
        <Hero />
      </motion.div>
    </main>
  );
}
