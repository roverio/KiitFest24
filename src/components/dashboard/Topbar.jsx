import React from 'react'
import BackButton from '@/components/logo-components/back-button';
import { FaUser } from "react-icons/fa";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'

const Topbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className='flex justify-between w-full max-w-screen-xl m-auto'>
        <div className='flex gap-5 items-center'>
            {!sidebarOpen && (
                <div className="block cursor-pointer" onClick={() => setSidebarOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none" className='w-7 h-7 md:w-9 md:h-5'>
                        <line x1="22" y1="1" x2="38" y2="1" stroke="white" strokeWidth="2"/>
                        <line x1="14" y1="10" x2="38" y2="10" stroke="white" strokeWidth="2"/>
                        <line y1="19" x2="38" y2="19" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
            )}
            <span className='cursor-pointer'>
                <BackButton className/>
            </span>
        </div>
        <Link href={'/dashboard'}>
            <div className='transition-all duration-1000 gradient-button bg-gradient-to-r p-2 md:p-4 rounded-full from-[#1741CC] to-[#16BCDC] hover:from-[#16BCDC] hover:to-[#1741CC]'>
                <FaUser className='text-2xl md:text-3xl'/>
            </div>
        </Link>
    </div>
  )
}

export default Topbar