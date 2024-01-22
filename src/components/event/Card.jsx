import Link from "next/link";
import Image from "next/image";

export const Card = ({ event }) => (
  <>
    <div className="">
      <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mx-auto  border-[0.5px] border-[#130C5C] shadow-events-card rounded-xl md:rounded-2xl pt-6 md:pt-8 pb-2 md:pb-6 px-2 md:px-6 flex flex-col items-center max-w-72">
        <Image
          src={event.image}
          alt={event.name}
          width={257}
          height={270}
          className=" object-cover w-full sm:h-[270px] "
        />
        <div className="text-center uppercase text-xs md:text-xl mt-0.5">
          {event.name}
        </div>
        <div className="flex justify-between items-center mt-2 w-full">
          <Link href={`/event/${event.id}`}>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <circle cx="11.9705" cy="12.3649" r="11.8468" fill="white" />
                <path
                  d="M20.3482 3.98777C15.7217 -0.638245 8.22041 -0.63876 3.59336 3.98777C-1.03317 8.61431 -1.03265 16.1156 3.59336 20.7426C8.2199 25.3681 15.7211 25.3686 20.3482 20.7426C24.9742 16.1156 24.9737 8.61482 20.3482 3.98777ZM13.5155 17.5161C13.5155 18.3696 12.8238 19.0614 11.9703 19.0614C11.1168 19.0614 10.425 18.3696 10.425 17.5161V11.335C10.425 10.4815 11.1168 9.78974 11.9703 9.78974C12.8238 9.78974 13.5155 10.4815 13.5155 11.335V17.5161ZM11.943 8.69363C11.0529 8.69363 10.4595 8.06316 10.4781 7.28486C10.4595 6.46896 11.0529 5.85755 11.961 5.85755C12.8696 5.85755 13.4445 6.46948 13.4635 7.28486C13.463 8.06316 12.8701 8.69363 11.943 8.69363Z"
                  fill="url(#paint0_linear_784_474)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_784_474"
                    x1="11.9706"
                    y1="0.518066"
                    x2="11.9706"
                    y2="24.2119"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1741CC" />
                    <stop offset="1" stop-color="#16BCDC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Link>

          <div className=" text-[9.5px] md:text-sm font-semibold border-2 bg-gradient-to-b from-[#1741CC] to-[#16BCDC] p-1 md:p-2 text-white rounded-full cursor-pointer">
            ADD TO CART
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Card;
