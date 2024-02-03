import Link from "next/link";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#030320]">
      <div className="w-[50vw] h-[100vh] fixed left-0 bottom-0">
        <Image
          src="/stars.png"
          alt="bg image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="w-[50vw] h-[100vh] fixed right-0 top-0">
        <Image
          src="/stars.png"
          alt="bg image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4 z-10 px-3">
        <Image
          src="/coming-soon.webp"
          height={400}
          width={400}
          className="rounded-[10px]"
          alt="coming soon image"
        />
        <div className="text-lg md:text-2xl text-white tracking-[2.4px] font-semibold blink">
          We are facing a huge traffic which will be fixed sortly, make sure you come here again😄...
        </div>
        <Link href="/" className="flex self-center">
          <button className="text-sm lg:text-[17px] text-white font-semibold bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-4 py-1  lg:px-9 lg:py-3">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
