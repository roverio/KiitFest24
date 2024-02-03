import { db } from "@/server/db";

import Image from "next/image";
import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";

const Page = async () => {
  const session = await getServerAuthSession();

  const issues = await db.issue.findMany({
    where: {
      userId: session.user.id,
    },
  });
  // console.log(issues);

  return (
    <div className="  overflow-x-hidden">
      {/* <div className="z-70 w-[100vw]  h-[100vh] fixed">
        <Image
          src="/Assets/bgblue.png"
          alt="bg image"
          fill
          className="object-cover"
        />
      </div>
      <div className="z-60 w-[100vw] h-[100vh] fixed">
        <Image
          src="/Assets/bgimage2.png"
          alt="bg image"
          fill
          className="object-cover translate-y-[200px]"
        />
      </div> */}
      <div className="w-full  flex flex-col py-16 gap-4 items-center justify-center">
        {/* <h1 className="text-4xl pb-8 font-semibold text-white">Issues</h1> */}
        {issues.length === 0 && (
          <p className="text-base lg:text-2xl z-[30]">No issues found :)</p>
        )}
        {issues.map((issue, index) => {
          return (
            <div
              key={index}
              className="max-w-[1500px] lg:w-[85%] w-[95%] flex justify-between text-center  bg-[#CCC]/20 backdrop-blur-sm shadow-xl border-[1px] rounded-xl border-white py-6 text-white text-lg px-[25px] md:px-[45px] mx-auto relative"
            >
              <p>{issue.subject}</p>
              {/* <p>{issue.}</p> */}
              {issue.resolved ? (
                <p className="text-green-500">Resolved</p>
              ) : (
                <p className="text-red-500">Not Resolved</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
