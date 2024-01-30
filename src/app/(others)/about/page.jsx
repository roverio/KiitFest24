"use client";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [currentInfo, setCurrentInfo] = useState(0);
  const [currentInfo2, setCurrentInfo2] = useState(1);
  const [currentInfo3, setCurrentInfo3] = useState(2);

  const informationList = [
    {
      title: "ABOUT KIIT",
      image: "/Assets/aboutkiit.png",
      description:
        "KIIT started in 1992-93 as an Industrial Training Institution. However, 1997 is considered the base year for the University as undergraduate and postgraduate courses in Engineering, Management and Computer Applications were added. In 2007, many new schools were added to its umbrella – School of Law, Biotechnology, Medical Sciences, Dental Sciences, Nursing, Mass Communication, Film and Media, Fashion and KIIT International School. Since then, there has been no looking back! Today, KIIT offers professional education to around 40,000 students from across India.",
    },
    {
      title: "ABOUT KIIT FEST",
      image: "/Assets/aboutkiit.png",
      description:
        "KIIT started in 1992-93 as an Industrial Training Institution. However, 1997 is considered the base year for the University as undergraduate and postgraduate courses in Engineering, Management and Computer Applications were added. In 2007, many new schools were added to its umbrella – School of Law, Biotechnology, Medical Sciences, Dental Sciences, Nursing, Mass Communication, Film and Media, Fashion and KIIT International School. Since then, there has been no looking back! Today, KIIT offers professional education to around 40,000 students from across India.",
    },
    {
      title: "ABOUT FOUNDER",
      image: "/Assets/aboutkiit.png",
      description:
        "KIIT started in 1992-93 as an Industrial Training Institution. However, 1997 is considered the base year for the University as undergraduate and postgraduate courses in Engineering, Management and Computer Applications were added. In 2007, many new schools were added to its umbrella – School of Law, Biotechnology, Medical Sciences, Dental Sciences, Nursing, Mass Communication, Film and Media, Fashion and KIIT International School. Since then, there has been no looking back! Today, KIIT offers professional education to around 40,000 students from across India.",
    },
  ];

  const handleButtonClick = (input1) => {
    if (input1 === "left") {
      const temp = currentInfo2;
      setCurrentInfo2(currentInfo);
      setCurrentInfo(temp);
    } else if (input1 === "right") {
      const temp = currentInfo3;
      setCurrentInfo3(currentInfo);
      setCurrentInfo(temp);
    }
  };

  return (
    <div className="h-screen w-screen ">
      <div className="-z-10 w-[100vw] h-[100vh] fixed pt-16  bg-about-background"></div>
      <div className="flex flex-col justify-between h-full  blur-[0.1px] text-white">
        <div>
          <div className="text-center text-xl font-semibold md:font-normal md:text-5xl tracking-[1.62px] md:tracking-[4.32px] mt-20">
            {informationList[currentInfo].title}
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-9 md:gap-11 mt-3 max-w-[991px] w-11/12 backdrop-blur-2xl border-[1px] rounded-[21px] bg-about-details-section border-[#130C5C] py-9 md:py-14 px-4 md:px-9 mx-auto">
            <div className=" order-2 md:order-1 flex-grow text-[15px] md:text-2xl font-light tracking-[1.39px] md:tracking-[2.16px] text-justify w-full md:w-[50%]">
              {informationList[currentInfo].description}
            </div>
            <div className="order-1 md:order-2 rounded-xl mx-auto w-10/12 h-[211px] sm:h-[400px] md:h-auto md:w-[50%] overflow-hidden">
              <Image
                src={informationList[currentInfo].image}
                alt="bg image"
                width={428}
                height={545}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[auto,min-content,auto] xl:min-h-[200px] mt-3 sm:-mt-3 md:-mt-7 w-full">
          <div className="relative">
            <div
              className="flex items-center gap-[2px] xl:gap-4 absolute -right-3 bottom-3 cursor-pointer group z-50"
              onClick={() => handleButtonClick("left")}
            >
              <div className="text-[9px] sm:text-xs md:text-[14px] xl:text-[24px] sm:font-light tracking-[0.5px] md:tracking-[2.16px] sm:group-hover:scale-105 transition-all duration-300">
                {informationList[currentInfo2].title}
              </div>

              <Image
                src="/Assets/arrowabout.png"
                alt="bg image"
                width={53}
                height={53}
                className=" w-[20px] xl:w-[53px] h-[20px] xl:h-[53px] rotate-90"
              />
            </div>
          </div>
          <div className="h-full ">
            <div className="mx-auto w-[120px] md:w-[300px] xl:w-[430px] ">
              <div className="relative overflow-hidden w-full">
                <Image
                  src="/Assets/ellipse.svg"
                  alt="bg image"
                  width={430}
                  height={300}
                  className="mx-auto w-full"
                />

                <video
                  className="w-[120px] md:w-[290px] xl:w-[410px] h-[120px] md:h-[300px] xl:h-[420px] absolute left-[calc(50%-57px)] md:left-[calc(50%-140px)] xl:left-[calc(50%-198px)] top-0 -z-20 rounded-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/Assets/circle.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="flex items-center gap-[2px] xl:gap-4 absolute -left-3 bottom-3 cursor-pointer group z-50"
              onClick={() => handleButtonClick("right")}
            >
              <Image
                src="/Assets/arrowabout.png"
                alt="bg image"
                width={53}
                height={53}
                className=" w-[20px] xl:w-[53px] h-[20px] xl:h-[53px] -rotate-90"
              />
              <div className="text-[9px] sm:text-xs md:text-[14px] xl:text-[24px] sm:font-light tracking-[0.5px] md:tracking-[2.16px] sm:group-hover:scale-105 transition-all duration-300">
                {informationList[currentInfo3].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
