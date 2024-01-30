"use-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import React from "react";
import { updateMerchandise } from "@/app/dashboard/actions";
const StaticCalender = ({ merchandise, userEmail }) => {
  // fallback
  const router = useRouter();
  return (
    <div className="text-center bg-dashboard-coundown px-8 rounded-xl py-2 flex flex-col justify-center">
      Merch
      <button
        onClick={async () => {
          const res = await updateMerchandise(merchandise, userEmail);
          if (res.success === true) {
            toast.success(res.message);
          } else {toast.error(res.message)};
        }}
      >
       {merchandise ? 'Remove MERCH' : 'Add MERCH'}
      </button>
    </div>
  );
};

export default StaticCalender;
