import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <div className="relative">
      <video className="object-cover w-[100vw] h-[100vh]" autoPlay muted loop>
        <source src="/Assets/prebg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 3 }}
      >
        <Image
          src="/Assets/fest_logo.png"
          alt="fest logo"
          width={1000}
          height={850}
          className=" w-[90%] left-[5%] md:w-[70%] lg:w-[40%] absolute md:left-[12%]  lg:left-[30%] top-[53%] max-w-[800px]"
        ></Image>
      </motion.div>
    </div>
  );
};

export default PreLoader;
