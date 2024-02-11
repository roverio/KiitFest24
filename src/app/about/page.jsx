"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

const Page = () => {
  const [currentInfo, setCurrentInfo] = useState(0);
  const [currentInfo2, setCurrentInfo2] = useState(1);
  const [currentInfo3, setCurrentInfo3] = useState(2);
  const [currentInfo4, setCurrentInfo4] = useState(3);

  const informationList = [
    {
      title: "ABOUT KIIT",
      image: "/about/aboutkiit.png",
      description:
        "KIIT has emerged as a prominent force in India's education sector, boasting an impressive array of academic programs, community engagement initiatives, and a compassionate reputation. In its transformative journey spanning 25 years, KIIT has set a benchmark for excellence, evolving from modest beginnings to notable achievements. Since its establishment in 1992, KIIT has been dedicated to delivering top-notch education and currently serves approximately 40,000 students, including 2000 international students from 65 countries. Accredited by esteemed organizations like ABET (USA) and IET (UK), KIIT's Computer Science Engineering ranks 301–400 globally, and its overall Engineering stands at 401–500 as per the 2024 Times Higher Education World University Ranking. Achieving an A++ grade from NAAC, KIIT is also recognized in the top 151-200 young universities globally. Beyond academics, KIIT has made substantial contributions to sports, receiving accolades for its role in fostering sportsmanship. The university actively engages in corporate social responsibility, garnering the Rashtriya Khel Protsahan Puruskar 2022 for promoting sports. In addition to its impact on the state and city's development, KIIT has played a vital role in supporting local art, culture, sculpture, rural development, literature, and spirituality.",
    },
    {
      title: "ABOUT KIIT FEST",
      image: "/about/aboutkiit.png",
      description:
        "The eagerly awaited seventh edition of KIIT Deemed to be University's college fest, KIITFEST 7.0 is set to unfold from February 14th to 16th. As one of the largest technical and cultural college festivals in Eastern India, KIITFEST will host over 30,000 students from across the nation, participating in diverse fields of arts, culture, and technology. Previous editions of KIITFEST garnered significant success, earning widespread acclaim on social media platforms, among other institutes and within the university. KIIT University boasts an impressive track record of hosting distinguished personalities for cultural nights, featuring renowned figures like singers Sonu Nigam, Sunidhi Chauhan, duo Salim and Suleiman, Ritwiz and Amit Trivedi, choreographers Bosco and Caesar, veteran actor Saurabh Shukla, Harsha Bhogle, Voice of India, and DJ Nucleya, among others. The event includes various activities such as music face-offs, dance battles, mime, theater acts, nukkad natak, mixed bag quizzes, literary events, and a multitude of technical events organized by various schools of KIIT University, setting benchmarks for other institutions' fests. This year, building on the success of previous editions, the organizing team is orchestrating the event on a grand scale, expecting a larger turnout of participants.",
    },
    {
      title: "ABOUT FOUNDER",
      image: "/about/achyutasir.jpg",
      description:
        "I struggled for my food for the first 25 years of my life, and now my struggle is to provide food to millions. - Achyuta Samanta. Prof. Dr. Achyuta Samanta embarked on a social development mission, leveraging education to combat poverty. A luminary educationist, humanitarian, and statesman, he overcame adversities to establish KIIT, starting from a modest polytechnic institute in 2004. Today, KIIT stands globally recognized as an Institution of Eminence, a testament to his tenacity. Prof. Samanta's life unfolds as a saga of grit and determination, captivating global audiences through films, documentaries, and talk shows. His accolades, including the Rashtriya Khel Protsahan Puruskar 2022, Ananya Samman, Art of Giving's MacJannet Prize 2021, Sandipani Maharshi Samman 2020, Green Activist Award, Personality of the Year 2019, Golden Gavel, Gandhi Mandela Peace Award 2019, Businessline Changemaker Award 2019, and NCST Leadership Award 2019, underscore his impactful leadership in social transformation.",
    },
    {
      title: "ABOUT KISS",
      image: "/about/kiss.jpg",
      description:
        "Founded in 1993, the Kalinga Institute of Social Sciences (KISS) stands as a pioneering global institution exclusively serving tribal communities in India. Commencing with 125 underprivileged tribal youth in Bhubaneswar, KISS, affiliated with the Kalinga Institute of Industrial Technology (KIIT-Deemed to be  university), operates under the KISS Foundation. Consisting of the KISS School & College and KISS University in Bhubaneswar, Odisha, it has collaborated with UNESCO, UNICEF, UNFPA, and the US Federal Government, embodying impactful initiatives. Aspiring to expand across Odisha's 30 districts and beyond, KISS offers free education, accommodation, food, and healthcare to 30,000 indigenous students, fostering a 40,000-strong alumni network. Dedicated to a world devoid of hunger, poverty, and illiteracy, KISS invites individuals to contribute to global transformation. Notable accolades include the 2023 International Green Gown Award for Diversity, Equity, and Inclusion in Sustainability, the UNESCO King Sejong Literacy Prize in 2022, and the 2019 Leadership Award from the National Commission for Scheduled Tribes.",
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
    } else if (input1 === "top") {
      const temp = currentInfo4;
      setCurrentInfo4(currentInfo);
      setCurrentInfo(temp);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="h-screen">
        <div className="-z-10 w-[100vw] h-[100vh] fixed  bg-about-background"></div>
        <div className="flex flex-col justify-between h-full  blur-[0.1px] text-white ">
          <div>
            <div className="flex flex-col md:flex-row h-[600px] justify-between gap-9 md:gap-11 mt-24  max-w-5xl w-11/12 backdrop-blur-2xl border-[1px] rounded-[21px] bg-about-details-section border-[#130C5C] py-9 md:py-14 px-4 md:px-9 mx-auto mb-8 ">
              <div className="overflow-y-auto custom-scrollbar order-2 md:order-1 flex-grow text-lg md:text-xl tracking-[1.39px] md:tracking-[2.16px] text-justify w-full md:w-[50%] pr-3 text-gray-300 hover:text-white transition-colors duration-300">
                {informationList[currentInfo].description}
              </div>
              <div className="order-1 relative md:order-2 rounded-xl mx-auto w-10/12 h-[511px] sm:h-[400px] md:h-auto md:w-[50%] overflow-hidden">
                <Image
                  src={informationList[currentInfo].image}
                  alt="bg image"
                  width={428}
                  height={545}
                  className="object-cover w-full h-full"
                />
                <div className="text-center absolute z-10 top-50 left-50  text-xl font-semibold md:font-normal md:text-4xl tracking-[1.62px] md:tracking-[4.32px] ">
                  {informationList[currentInfo].title}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[auto,min-content,auto] xl:min-h-[200px] mt-3 sm:-mt-3  w-full">
            <div className="relative">
              <div
                className="flex items-center gap-[2px] xl:gap-4 absolute -right-3 bottom-3 cursor-pointer group z-50"
                onClick={() => handleButtonClick("left")}
              >
                <div className="text-[9px] sm:text-xs md:text-[14px] xl:text-[24px] sm:font-light tracking-[0.5px] md:tracking-[2.16px] sm:group-hover:scale-105 transition-all duration-300">
                  {informationList[currentInfo2].title}
                </div>
                <Image
                  src="/about/arrowabout.png"
                  alt="bg image"
                  width={53}
                  height={53}
                  className=" w-[20px] xl:w-[53px] h-[20px] xl:h-[53px] rotate-90 z-[100]"
                />
              </div>
            </div>
            <div className="h-full">
              <div className="mx-auto w-[120px] md:w-[300px] xl:w-[430px]">
                <div className="md:translate-y-5 text-center text-[9px] sm:text-xs md:text-[14px] xl:text-[24px] sm:font-light tracking-[0.5px] md:tracking-[2.16px] sm:group-hover:scale-105 transition-all duration-300 mx-auto z-50">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleButtonClick("top")}
                  >
                    {informationList[currentInfo4].title}
                  </div>
                  <Image
                    src="/about/arrowabout.png"
                    alt="bg image"
                    width={53}
                    height={53}
                    className="md:mt-4 w-[20px] xl:w-[53px] h-[20px] xl:h-[53px] rotate-180 mx-auto cursor-pointer"
                    onClick={() => handleButtonClick("top")}
                  />
                </div>
                <div className="relative overflow-hidden w-full -z-10">
                  <Image
                    src="/about/ellipse.svg"
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
                    <source src="/about/circle.mp4" type="video/mp4" />
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
                  src="/about/arrowabout.png"
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
    </>
  );
};

export default Page;
