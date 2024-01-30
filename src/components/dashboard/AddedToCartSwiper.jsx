"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CarouselCard from "./swiper-card";
import { dashboard_carousel_dummyData } from "@/constants";

import "swiper/css";
import "swiper/css/autoplay";

const AddedToCartSwiper = () => {
  return (
    <div className="flex flex-col gap-4 bg-dashboard-coundown rounded-xl py-2">
      <div className="flex justify-between gap-2 px-3 py-2">
        <h1 className="text-2xl font-semibold">My Cart</h1>
        <button className="bg-blue-700 px-4 rounded-md uppercase text-sm tracking-wider hover:bg-blue-600 transition-colors duration-200">
          Proceed to Payment
        </button>
      </div>
      <div className="w-full max-w-md sm:max-w-2xl md:max-w-md 950:w-[50vw] 950:max-w-xl lg:max-w-2xl flex-shrink flex justify-center items-center mx-auto ">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            550: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          {dashboard_carousel_dummyData.map((card, index) => (
            <SwiperSlide key={index}>
              <CarouselCard name={card.name} imgURl={card.imgUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AddedToCartSwiper;
