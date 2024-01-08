"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

import PreLoader from "@/components/PreLoader";
export default function Home() {
  return (
    <main className="bg-gradient-to-b h-[100vh] from-[#0e0b17a8] via-[#1d15579f] to-[#05111d8a] z-20">
      {/* <div className="fixed top-0 left-0 min-h-[100vh] min-w-[100vw] z-[-10]">
        <video className="object-cover w-full h-[100vh]" autoPlay loop muted>
          <source src="/Assets/bg_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}{" "}
      {/* This is the code for using video instead of particle js */}
      {/* <PreLoader /> */}
      <Navbar />
      <Hero />
    </main>
  );
}
