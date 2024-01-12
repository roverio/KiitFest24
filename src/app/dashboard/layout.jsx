'use client'

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Topbar from "@/components/dashboard/Topbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { slideAnimation } from "@/config/motion";

export default function DashboardLayout({
    children, 
  }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
      if (window.innerWidth > 1119) {
        setSidebarOpen(true)
      }
    },[])
    
    return (
      <AnimatePresence>
        <div className="bg-[#0E0B17] flex font-roboto text-white">
          <motion.section {...slideAnimation('left')} >
            <DashboardSidebar 
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            /> 
          </motion.section>
          <div className="px-4 md:px-6 py-7 w-full flex-1">
            <motion.section {...slideAnimation('down')}>
              <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            </motion.section>
            <motion.section {...slideAnimation('up')}>
              {children}
            </motion.section>
          </div>
        </div>
      </AnimatePresence>
    )
  }