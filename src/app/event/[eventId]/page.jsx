import React from "react";
import Card from "@/components/event/Card";
import Image from "next/image";
import Link from "next/link";
// import { Image } from "next/image";

const page = ({ params }) => {
  const eventId = params.eventId;
  const eventData = {
    id: eventId,
    name: `Event ${eventId}`,
    description: `Description for Event ${eventId}`,
    image: "/Assets/eventtech.png",
  };

  return (
    <div className="bg-[url('/Assets/bgevent.png')] w-full  h-full bg-no-repeat bg-cover ">
      <div className="flex gap-8 max-w-[1500px] flex-col w-[95vw] lg:flex-row justify-center mx-auto py-10 md:py-20">
        <Card event={eventData}></Card>
        <section className="w-[90vw] mx-auto lg:w-[60vw] lg:h-[85vh] flex flex-col justify-between items-center text-white bg-gradient-to-r from-[#ffffff1a] to-[#ffffff00] backdrop-blur-2xl border-[#130C5C] rounded-xl border-[1px] md:py-[60px] md:px-12 px-6 text-lg py-8 gap-8 md:text-xl">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga
            voluptatibus ut, aliquid delectus provident fugit maxime non
            recusandae rerum optio blanditiis illo molestias dolor, ipsa beatae
            dolore aut odio. Doloremque esse repellat dolores autem dolorum
            sapiente accusamus soluta ipsa placeat, distinctio, ea perspiciatis
            minus dolore accusantium pariatur facilis quod beatae consectetur in
            sunt reiciendis nisi rerum? Earum, ab quod. Facere odio harum
            facilis repudiandae eum eveniet in dicta nostrum doloribus corrupti,
            fuga eligendi consequuntur deleniti aliquam ut dolorem aut corporis
            natus minima cupiditate exercitationem eaque iste illo sed? Sunt.
            Blanditiis voluptatum, harum corrupti ad accusantium assumenda
            soluta, dolores repellendus natus sit modi officiis, maxime aliquam
            minima labore deleniti magnam similique laudantium nulla. Dolor
            adipisci eaque tempore id ab porro? Vitae eos id rem harum unde
            illum! Eligendi corrupti, maxime a libero quam error itaque ipsum
            dolorem dolorum labore, delectus quasi cupiditate tempore
            dignissimos laboriosam eum ipsa doloribus ratione! Neque!
          </p>
          <Link href={"/auth/login"}>
            <button className="  text-sm lg:text-[17px] font-semibold bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-4 py-1  lg:px-9 lg:py-3">
              ADD TO CART
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default page;
