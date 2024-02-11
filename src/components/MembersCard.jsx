import Image from "next/image"
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const MembersCard = ({ member }) => {
  return (
    <div className="text-white members-card flex flex-col items-center group gap-3 py-5 px-5 max-w-60 min-h-[300px] rounded-2xl hover:scale-110 transition-transform duration-300 relative overflow-hidden">
      <div className="absolute flex flex-col items-center justify-center inset-0 bg-black member-card bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-8">
        <div className="font-semibold font-roboto tracking-wider">SOCIALS</div>
        <div className="flex justify-evenly w-full">
          <Link href={member.instagram} target="_blank">
            <div className="cursor-pointer group relative">
              <BsInstagram className="text-3xl hover:text-blue-500 transition-colors duration-200"/>
            </div>
          </Link>
          <Link href={member.linkedin} target="_blank">
            <div className="cursor-pointer group">
              <FaLinkedinIn className="text-3xl hover:text-blue-500 transition-colors duration-20"/>
            </div>
          </Link>
          <Link href={member.github} target="_blank">
            <div className="cursor-pointer group">
              <FaGithub className="text-3xl hover:text-blue-500 transition-colors duration-20"/>
            </div>
          </Link>
        </div>
        </div>
        <Image 
            src={member.src} 
            alt={member.memberName} 
            width={200}
            height={250}
            className="object-cover w-48 h-48 object-top"
        ></Image>
        <div>
          <h1 className="uppercase font-semibold text-center">{member.memberName}</h1>
          <h1 className="text-sm text-center">{member.title}</h1>
        </div>
    </div>
  )
}

export default MembersCard