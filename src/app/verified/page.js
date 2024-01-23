'use client'

import { FaCheck } from "react-icons/fa"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const Verified = () => {
    const [redirectCount, setRedirectCount] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setRedirectCount((prevCount) => prevCount - 1);
        }, 1000)

        if (redirectCount === 0) {
            clearInterval(interval);
            router.push('/auth/login')
        }

        return () => clearInterval(interval)
    })
  return (
    <div className="w-full h-screen flex justify-center items-center bg-about-background">
        <div className="w-11/12 max-w-lg px-8 py-12 md:py-16 border border-[#183367] bg[#13111c] rounded-xl verified-card text-white flex text-center flex-col item-center justify-center drop-shadow-lg font-sans gap-6">
            <div className="w-16 h-16 rounded-full hidden md:block border-2 border-[#183367] absolute bottom-8 -left-8 bg-[#191624]"></div>
            <span className="p-2 text-xl bg-gradient-to-r  from-[#1741CC] to-[#16BCDC] rounded-full w-14 h-14 flex items-center justify-center self-center cursor-default">
                <FaCheck />
            </span>
            <div>
                <h1 className="font-semibold">Verified!</h1>
                <h2 className="text-sm text-gray-400">You have successfully verified your account.</h2>
            </div>
            <Link href="/auth/login" className="flex self-center">
                <button className="bg-[#1741CC]  px-6 py-2 rounded-xl flex self-center">Go back to login page</button>
            </Link>
            
            <div className="text-sm text-gray-300">Redirecting to login page in {redirectCount}</div>
        </div>
    </div>
  )
}

export default Verified