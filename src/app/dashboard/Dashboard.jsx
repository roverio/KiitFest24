"use client";

import AddedToCartSwiper from "@/components/dashboard/AddedToCartSwiper";
import CountDown from "@/components/dashboard/CountDown";
import StaticCalendar from "@/components/dashboard/static-calendar";
import Image from "next/image";
import { motion } from "framer-motion";
import { headTextAnimation } from "@/config/motion";
import Link from "next/link";

const Dashboard = ({ userData }) => {
  const { merchandise, isKiitStudent, kfid } = userData;
  let price;
  if (isKiitStudent) {
    price = merchandise
      ? "₹750 (Registration + Merchandise)"
      : "₹450 (Registration)";
  } else {
    price = merchandise
      ? "₹1000 (Registration + Merchandise)"
      : "₹700 (Registration)";
  }

  return (
    <div className="mt-2 flex justify-evenly flex-col items-between min-h-screen max-w-screen-xl m-auto">
      <motion.div {...headTextAnimation}>
        <h1 className="text-5xl hidden md:block">
          <span className="font-sans font-light">Welcome,</span>{" "}
          <span className="font-semibold uppercase">
            {userData.name.split(" ")[0]}
          </span>
        </h1>
      </motion.div>
      <div className="flex justify-between flex-col md:flex-row gap-8 md:gap-0">
        <div className="max-w-xl mt-2 py-5 pl-4 pr-2 md:px-6 rounded-xl bg-dashboard-user-details flex flex-col flex-shrink-0 flex-grow">
          <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl relative">
            <h1 className="uppercase font-semibold">{userData.name}</h1>
            {/* refactor this later */}
            <Link href="/dashboard/payment-confirm">Payment link</Link>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-2 md:gap-5 font-light font-sans">
                <span>KF ID</span>
                <span>Contact</span>
                <span>Email ID</span>
                <span>Amount to pay</span>
                <span>Payment status</span>
                <span>College</span>
              </div>
              <div className="flex flex-col gap-2 md:gap-5 font-light font-sans ">
                <span>KF_{userData.kfid}</span>
                <span>{userData.phoneNumber}</span>
                <span>{userData.email}</span>
                <span>{price}</span>
                <span>{userData.isPaymentCompleted ? "PAID" : "NOT PAID"}</span>
                <span>{userData.institution}</span>
              </div>
            </div>
            <Image
              src={
                "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709212/kiifest/robot-vaccum_u2fjry.png"
              }
              alt="dashboard-robot-vaccum"
              width={132}
              height={86}
              className="absolute right-0 -top-20 md:hidden"
            />
          </div>
          {/* <div className='flex justify-center mt-7'>
            <button className='uppercase font-medium border-4 py-[2px] px-8 rounded-full bg-gradient-to-b from-[#1741CC] to-[#16BCDC] hover:from-[#16BCDC] hover:to-[#1741CC]'>EDIT</button>
          </div> */}
        </div>
        <div className="flex flex-col justify-between">
          <Image
            src={
              "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709212/kiifest/robot-vaccum_u2fjry.png"
            }
            alt="dashboard-robot-vaccum"
            width={264}
            height={171}
            className="hidden md:block"
          />
          <CountDown />
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-10 flex-col md:flex-row">
        <AddedToCartSwiper />
        <StaticCalendar merchandise={merchandise} userEmail={userData.email} />
      </div>
    </div>
  );
};

export default Dashboard;
