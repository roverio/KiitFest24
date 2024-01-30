"use-client";
import { updateMerchandise } from "@/app/dashboard/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Merchandise = ({ merchandise, userEmail }) => {
  // fallback
  const router = useRouter();
  return (
    <div className="text-center bg-dashboard-coundown px-8 rounded-xl py-2 flex flex-col justify-center items-center lg:max-w-xs xl:max-w-md">
      <h1 className='font-semibold font-roboto uppercase tracking-widest py-4'>Merchandise</h1>
      <Image 
        src={"/merchandise.png"} 
        alt='merchandise'
        width={500}
        height={550}
        className="w-[200px] h-[250px] sm:w-[300px] sm:h-[350px] lg:w-[500px] lg:h-[450px]"
      />
      <button
        onClick={async () => {
          const res = await updateMerchandise(merchandise, userEmail);
          if (res.success === true) {
            toast.success(res.message);
          } else {toast.error(res.message)};
        }}
        className="bg-blue-700 px-4 py-2 lg:w-full rounded-md uppercase mt-4 text-sm tracking-wider hover:bg-blue-600 transition-colors duration-200"
      >
       {merchandise ? 'Remove MERCH' : 'Add MERCH'}
      </button>
    </div>
  );
};

export default Merchandise;

