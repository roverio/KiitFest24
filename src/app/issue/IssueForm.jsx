"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { issueSchema } from "@/validations/userSchema";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";
import { PulseLoader } from "react-spinners";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const IssueForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(issueSchema),
  });

  const [displayMessage, setDisplayMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      console.log(res, "res");
      if (res?.error) {
        console.log(res?.error || "Unknown error Occurred");
        setDisplayMessage(res?.error || "Try again later or Contact us");
        setLoading(false);
      } else {
        setDisplayMessage("Taking you to your Dashboard...");
        router.push("/dashboard");
        router.refresh();
        setLoading(false);
      }
    } catch (err) {
      console.log(err || "Unknown error Occurred");
      setDisplayMessage(err || "Try again later or Contact us");

      setLoading(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      {/* <div className="-z-10 w-[100vw] h-[100vh] fixed">
        <Image
          src="/Assets/bgbottom.svg"
          alt="bg image"
          fill
          priority
          className=" invisible md:visible object-cover translate-y-[100px]"
        />
        <Image
          src="/Assets/bgbottom2.svg"
          alt="bg image"
          fill
          className="md:invisible visible object-cover translate-y-[200px]"
        />
      </div> */}
      <div className="-z-30 w-[100vw] h-[100vh] fixed">
        <Image
          src="/Assets/bgblue.png"
          alt="bg image"
          fill
          className="object-cover"
        />
      </div>
      <div className="-z-20 w-[100vw] h-[100vh] fixed">
        <Image
          src="/Assets/bgimage2.png"
          alt="bg image"
          fill
          className="object-cover translate-y-[200px]"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-[584px] w-11/12 bg-[#CCC]/20 backdrop-blur-sm shadow-xl border-[1px] rounded-3xl border-white py-[44px] md:py-[76.5px] px-[25px] md:px-[45px] mx-auto relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full h-full flex flex-col space-y-6">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                  src="/icons/profile.png"
                  alt="bg image"
                  width={30}
                  height={30}
                  className="absolute left-[10px] bottom-[7.8px]"
                />
                <div className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                  {errors.name?.message}
                </div>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  autoComplete="on"
                  placeholder="Your Email ID"
                  {...register("email")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                  src="/icons/mail.png"
                  alt="bg image"
                  width={30}
                  height={30}
                  className="absolute left-[10px] bottom-[7.8px]"
                />
                <div className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                  {errors.email?.message}
                </div>
              </div>
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                  src="/icons/profile.png"
                  alt="bg image"
                  width={30}
                  height={30}
                  className="absolute left-[10px] bottom-[7.8px]"
                />
                <div className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                  {errors.subject?.message}
                </div>
              </div>
              <div className="w-full relative">
                <textarea
                  type="text"
                  placeholder="Decribe your issue"
                  {...register("issue")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                  src="/icons/profile.png"
                  alt="bg image"
                  width={30}
                  height={30}
                  className="absolute left-[10px] top-[10%]"
                />
                <div className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                  {errors.issue?.message}
                </div>
              </div>
            </div>

            <p className="mx-auto text-red-400 font-medium mt-5">
              {displayMessage}
            </p>
            <div className="flex items-center justify-between gap-1 mt-5">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading && "opacity-50 cursor-not-allowed"
                } mx-auto flex items-center gap-4 py-1 md:py-2 leading-none px-4 md:px-6 rounded-full bg-gradient-to-b from-[#174ACE] to-[#16B2DB] border-[3.3px] border-white text-sm md:text-lg font-medium text-white`}
              >
                <PulseLoader loading={loading} size={6} color="#fff" />
                <p>Submit</p>
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default IssueForm;

// export default dynamic(() => Promise.resolve(Page), { ssr: false });
