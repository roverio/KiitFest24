import MembersCard from "@/components/MembersCard";
import Navbar from "@/components/navbar";
import Image from "next/image";

const dummyData = [
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
  {
    src: "https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709521/kiifest/carousel/vr-girl_ofg80o.png",
    memberName: "member name"
  },
]

const Members = () => {
  return (
    <div className="bg-about-background min-h-screen font-sans ">
      <Navbar />
      <Image 
        src="/members/topRight.svg" 
        alt="top-right-star-vector"
        width={500}
        height={500}
        className="absolute right-0"
      />
      <div className="absolute right-0 bottom-0 overflow-hidden">
        <Image 
          src="/members/bottomRight.svg" 
          alt="bottom-left-star-vector"
          width={500}
          height={500}
          className=" translate-y-20"
        />
      </div>
      <Image 
        src="/members/bottomLeft.svg" 
        alt="bottom-left-star-vector"
        width={500}
        height={500}
        className="absolute bottom-0"
      />
      <MembersContainer 
        dummyData={dummyData} 
        teamname={"Design"}
      />
    </div>
  )
};

export default Members;

function MembersContainer ({ dummyData, teamname, }) {
  return (
    <div className="flex flex-col justify-end h-full px-4">
      <div className="mt-24 md:mt-40 pb-10 max-w-7xl m-auto ">
        <div className="flex gap-4 items-center ml-8 lg:ml-16 xl:ml-28 xl:pl-2 mb-12">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1741CC] to-[#16BCDC]"></div>
          <h1 className="text-2xl md:text-4xl text-white font-semibold capitalize">{teamname}</h1>
        </div>
        <div className="flex justify-center flex-wrap gap-6 relative">
          {dummyData.map((member, index) => (
            <MembersCard 
              key={index}
              src={member.src}
              memberName={member.memberName}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
