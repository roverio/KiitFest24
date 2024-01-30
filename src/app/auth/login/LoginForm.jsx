"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validations/userSchema";
import Image from "next/image";
import React,{useState} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";
import { PulseLoader } from "react-spinners";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
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
      console.log(res, 'res');
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
      <div className="-z-10 w-[100vw] h-[100vh] fixed">
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
      </div>
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
        <div className="max-w-[484px] w-11/12 bg-[#CCC]/20 backdrop-blur-sm shadow-xl border-[4px] rounded-3xl border-white py-[44px] md:py-[76.5px] px-[25px] md:px-[45px] mx-auto relative">
          <Image
            src="/Assets/profile.svg"
            alt="bg image"
            width={122}
            height={122}
            className="absolute left-[calc(50%-43px)] md:left-[calc(50%-61px)] -top-[43px] md:-top-[61px] md:w-[122px] md:h-[122px] h-[86px] w-[86px]"
          />

          <Link href="/" className="absolute -top-8 right-2 text-white hover:scale-105 transition-all duration-200 hover:font-bold">Home</Link>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full h-full flex flex-col space-y-6">
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Email ID"
                  {...register("email")}
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
                  {errors.email?.message}
                </div>
              </div>

              <div className="w-full relative">
                <input
                  type="password"
                  autoComplete="on"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                  src="/icons/password.png"
                  alt="bg image"
                  width={30}
                  height={30}
                  className="absolute left-[10px] bottom-[7.8px]"
                />
                <div className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                  {errors.password?.message}
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
          <div className="text-center pt-8">Don't have an account ? 
            <Link href='/auth/register' className="text-blue-700 font-bold"> Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Page;

export default dynamic(() => Promise.resolve(Page), { ssr: false });