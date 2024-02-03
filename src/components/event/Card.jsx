import Link from "next/link";
import Image from "next/image";

export const Card = ({ event, showRegister = true, buttonComponent }) => {
  const bgBlurImg = `data:image/webp;base64,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`
  return (
    <div className="">
      <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mx-auto  border-[0.5px] border-[#130C5C] shadow-events-card rounded-xl md:rounded-2xl pt-6 md:pt-8 pb-2 md:pb-6 px-2 md:px-6 flex flex-col items-center max-w-72 lg:min-w-72">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={257}
          placeholder="blur"
          blurDataURL={bgBlurImg}
          height={270}
          className="aspect-auto w-full object-cover "
        />
        <div className="text-center uppercase text-xs md:text-xl pt-3 text-white">
          {event.name}
        </div>
        {showRegister && (
          <Link href={`/events/${event.id}`}>
            <button className=" text-[9.5px] mt-3 md:text-sm font-semibold border-2 bg-gradient-to-b from-[#1741CC] to-[#16BCDC] text-white rounded-xl px-6 py-2">
              Go to Event
            </button>
          </Link>
        )}
        {buttonComponent && buttonComponent}
      </div>
    </div>
  );
};

export default Card;
