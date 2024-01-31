"use client";

import { registerUserInEvent } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterButton = ({ isRegistered, userId, eventId }) => {
  const router = useRouter();
  return (
    <button
      className="text-sm lg:text-[17px] font-semibold bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-4 py-1  lg:px-9 lg:py-3"
      onClick={async () => {
        const res = await registerUserInEvent(userId, eventId);
        if (res.success === true) {
          toast("You can find your registered events in your Dashboard", {
            action: {
              label: "GO TO DASHBOARD",
              onClick: () => router.push("/dashboard/registered-events"),
            },
          });
          toast.success(res.message);
        } else toast.error(res.message);
      }}
    >
      {isRegistered ? "Registered" : "Register"}
    </button>
  );
};

export default RegisterButton;
