import { db } from "@/server/db";

import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const issues = await db.issue.findMany({});

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <div className="-z-30 w-[100vw] h-[100vh] fixed">
        <Image
          src="/Assets/bgblue.png"
          alt="bg image"
          fill
          className="object-cover"
        />
      </div>
      <div className="-z-20 w-[100vw] h-[100vh] fixed">
        <Image
          src="/Assets/bgimage2.png"
          alt="bg image"
          fill
          className="object-cover translate-y-[200px]"
        />
      </div>
      <div className="w-full  flex flex-col py-16 gap-4 items-center justify-center">
        <h1 className="text-4xl pb-8 font-semibold text-white">Issues</h1>
        {issues.map((issue, index) => {
          return (
            <Link
              key={index}
              className="lg:w-[85%] w-[95%]"
              href={`/issues/${issue.id}`}
            >
              <div className="max-w-[1500px] flex justify-between text-center  bg-[#CCC]/20 backdrop-blur-sm shadow-xl border-[1px] rounded-xl border-white py-6 text-white text-lg px-[25px] md:px-[45px] mx-auto relative">
                <p>{issue.subject}</p>
                {/* <p>{issue.}</p> */}
                {issue.resolved ? (
                  <p className="text-green-500">Resolved</p>
                ) : (
                  <p className="text-red-500">Not Resolved</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
