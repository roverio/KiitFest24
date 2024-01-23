import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 6, duration: 2 }}
      className=" fixed top-0 left-0 "
    >
      <video className="object-cover w-[100vw] h-[100vh]" autoPlay muted loop>
        <source src="/Assets/prebg.mp4" type="video/mp4" />
      </video>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 3 }}
      >
        <Image
          src="/Assets/k_logo.png"
          alt="fest logo"
          width={500}
          height={550}
          className=" w-[40%] left-[36%] md:w-[25%] lg:w-[15%] absolute md:left-[43%]  lg:left-[45%] top-[53%] max-w-[800px]"
        ></Image>
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
