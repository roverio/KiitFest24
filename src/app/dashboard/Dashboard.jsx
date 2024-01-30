"use client";

import AddedToCartSwiper from "@/components/dashboard/AddedToCartSwiper";
import CountDown from "@/components/dashboard/CountDown";
import PaymentButton from "@/components/dashboard/PaymentButton";
import Merchandise from "@/components/dashboard/merchandise";
import { headTextAnimation } from "@/config/motion";
import { motion } from "framer-motion";
import Image from "next/image";
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
      <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="lg:max-w-xl mt-2 py-5 pl-4 pr-2 md:px-6 rounded-xl bg-dashboard-user-details flex flex-col flex-shrink-0 flex-grow">
          <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl relative">
            <h1 className="uppercase font-semibold">{userData.name}</h1>
            <div class="bg-red-100 border text-sm border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong class="font-bold">Holy smokes!{" "}</strong>
              <span class="block sm:inline">You need to complete your payment to officially enroll for your registered events and other activies.</span>
            </div>
            <Link href={"/dashboard/payment-confirm"}>
              <button className='bg-blue-700 px-4 py-2 rounded-md uppercase text-sm tracking-wider hover:bg-blue-600 transition-colors duration-200'>Proceed to Payment</button>
            </Link>
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
        </div>
        <Merchandise merchandise={merchandise} userEmail={userData.email} />
      </div>
      <div className="flex justify-between gap-10 mt-10 flex-col md:flex-row">
        <AddedToCartSwiper />
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
    </div>
  );
};

export default Dashboard;
