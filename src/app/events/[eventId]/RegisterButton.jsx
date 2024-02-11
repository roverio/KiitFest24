"use client";

import { registerUserInEvent } from "./actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";
// import { useRouter } from "next/router";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";
import Link from "next/link";

const RegisterButton = ({ isRegistered, userId, eventId }) => {
  const [load, setLoad] = useState(false);
  const router = useRouter();
  if (!userId) {
    // redirect("/auth/login");
    router.push("/auth/login");
  }
  return (
    <>
      {isRegistered ? (
        <>
          <div>
            <p className="mb-4">
              Already Registered. To Remove from Registered Events, Go to
              Dashboard.
            </p>
            <Link href="/dashboard">
              <button className="mx-auto flex items-center gap-4 py-1 md:py-2 leading-none px-4 md:px-6 rounded-full bg-gradient-to-b from-[#174ACE] to-[#16B2DB] border-[3.3px] border-white text-sm md:text-lg font-medium text-white">
                <p>Go to DashBoard</p>
              </button>
            </Link>
          </div>
        </>
      ) : (
        <button
          className={`${
            load && "opacity-50 cursor-not-allowed"
          } mx-auto flex items-center gap-4 py-1 md:py-2 leading-none px-4 md:px-6 rounded-full bg-gradient-to-b from-[#174ACE] to-[#16B2DB] border-[3.3px] border-white text-sm md:text-lg font-medium text-white`}
          disabled={load}
          onClick={async () => {
            setLoad(true);
            const res = await registerUserInEvent(userId, eventId);
            if (res.success === true) {
              setLoad(false);
              toast("You can find your registered events in your Dashboard", {
                action: {
                  label: "GO TO DASHBOARD",
                  onClick: () => router.push("/dashboard/registered-events"),
                },
              });
              toast.success(res.message);
            } else {
              toast.error(res.message);
              setLoad(false);
            }
          }}
        >
          <PulseLoader loading={load} size={6} color="#fff" />
          <p>{"Register"}</p>
        </button>
      )}
    </>
  );
};

export default RegisterButton;
