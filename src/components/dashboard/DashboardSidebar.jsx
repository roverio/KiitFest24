import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import DashboardSidebarItem from './DashboardSidebarItem';

function DashboardSidebar({ setSidebarOpen, sidebarOpen }) {
  return (
    <div className={`sidebar px-2 md:px-7 py-4 md:py-8 h-screen flex flex-col justify-between bg-gradient-to-l from-[#0c0a1d] to-[#181146] z-40 flex-shrink-0 top-0 transition-transform duration-300 ${!sidebarOpen ? " -translate-x-full absolute" : "translate-0 fixed sidebar:sticky"}`}>
        <div className='flex flex-col gap-20'>
            <div className='flex justify-between items-center gap-16'>
                <Image
                    src='https://res.cloudinary.com/dlkd1pzli/image/upload/v1704709213/kiifest/dashboard-kiitfest-logo_kruogx.png'
                    alt='dashboard-kiitfest-logo'  
                    width={120}
                    height={27}
                    className='md:w-40 h-14'
                />
                <div className='translate-y-1 cursor-pointer' onClick={() => setSidebarOpen(false)}>
                    <IoCloseSharp className='text-2xl'/>
                </div>
            </div>
            <div className='flex flex-col gap-12 px-5'>
                <DashboardSidebarItem title={'alerts'} alertNo={3} link={'/dashboard'}/>
                <DashboardSidebarItem title={'change password'} link={'/dashboard'}/>
                <DashboardSidebarItem title={'report issues'} link={'/dashboard'}/>
                <DashboardSidebarItem title={'logout'} link={'/dashboard'}/>
            </div>
        </div>
        <div className='flex justify-around'>
            <BottomSocials logo={<FaFacebookF />} link={''}/>
            <BottomSocials logo={<PiInstagramLogoFill />} link={''}/>
            <BottomSocials logo={<FaTwitter />} link={''}/>
        </div>
    </div>
  )
}

function BottomSocials ({ link, logo }) {
    return (
        <Link href={link}>
            <div className='text-xl hover:border-2 border-[#1741CC] p-2 w-10 h-10 flex justify-center items-center rounded-full'>
                { logo }
            </div>
        </Link>
    )
}

export default DashboardSidebar
