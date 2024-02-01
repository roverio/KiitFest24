import Link from "next/link";
import Image from "next/image";

export const RegisteredCard = ({ event, buttonComponent }) => {
  return (
    <div className="">
      <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mx-auto  border-[0.5px] border-[#130C5C] shadow-events-card rounded-xl md:rounded-2xl pt-6 md:pt-8 pb-2 md:pb-6 px-2 md:px-6 flex flex-col items-center max-w-72 lg:min-w-72">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={257}
          height={270}
          className=" object-cover w-full sm:h-[270px] "
        />
        <div className="text-center uppercase text-xs md:text-xl pt-3 text-white">
          {event.name}
        </div>

        <div className="flex gap-2">
          <Link href={`/events/${event.id}`}>
            <button className=" text-[9.5px] mt-3 md:text-sm font-semibold border-2 bg-gradient-to-b from-[#1741CC] to-[#16BCDC] text-white rounded-xl px-6 py-2">
              Check
            </button>
          </Link>

          {buttonComponent && buttonComponent}
        </div>
      </div>
    </div>
  );
};

export default RegisteredCard;
