"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/validations/userSchema";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { PulseLoader } from "react-spinners";
import Link from "next/link";

const Page = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });
  const [isKiitStudent, setIsKiitStudent] = useState(false);
  const [rollNumber, setRollNumber] = useState("");
  const [showRollNumberField, setShowRollNumberField] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        isKiitStudent,
        rollNumber,
      }),
    });
    const { success, message } = await response.json();
    if (!success) {
      setLoading(false);
      setErrorMessage(message);
      return setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setLoading(false);
      setDisplayMessage("Check you email for verification. You may close this tab");
      setSubmitted(true);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <div className="-z-10 w-[100vw] h-[100vh] fixed">
        <Image
          src="/Assets/bgbottom.webp"
          alt="bg image"
          fill
          priority
          className=" invisible md:visible object-cover translate-y-[100px]"
        />
        <Image
          src="/Assets/bgbottom2.webp"
          alt="bg image"
          fill
          priority
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
      <div className="w-full h-full pt-36">
        <div className="max-w-[653px] w-11/12 bg-[#CCC]/20 backdrop-blur-sm shadow-xl border-[4px] rounded-3xl border-white py-[44px] md:py-[76.5px] px-[25px] md:px-[45px] mx-auto relative">
          <Image
            src="/Assets/profile.svg"
            alt="bg image"
            width={122}
            height={122}
            className="absolute left-[calc(50%-43px)] md:left-[calc(50%-61px)] -top-[43px] md:-top-[61px] md:w-[122px] md:h-[122px] h-[86px] w-[86px]"
          />

          <div className="flex gap-8">
            <Link
              href="/"
              className="absolute -top-8 left-2 text-white hover:scale-105 transition-all duration-200 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/privacy"
              className="absolute -top-8 right-2 text-white hover:scale-105 transition-all duration-200 hover:font-bold"
            >
              Privacy Policy
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="w-full h-full flex flex-col space-y-5">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                  src="/icons/profile.webp"
                  alt="bg image"
                  width={30}
                  height={30}
                  className="absolute left-[10px] bottom-[7.8px]"
                />
                <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                  {errors.name?.message}
                </span>
              </div>

              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Email ID"
                  {...register("email")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                  src="/icons/mail.webp"
                  alt="bg image"
                  width={30}
                  height={30}
                  className="absolute left-[10px] bottom-[7.8px]"
                />
                <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                  {errors.email?.message}
                </span>
              </div>

              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full relative">
                  <input
                    type="password"
                    autoComplete="on"
                    placeholder="Password"
                    {...register("password")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                    src="/icons/password.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.password?.message}
                  </span>
                </div>

                <div className="w-full relative">
                  <input
                    type="password"
                    autoComplete="on"
                    placeholder="Re-type Password"
                    {...register("password_confirmation")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                    src="/icons/password.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.password_confirmation?.message}
                  </span>
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full relative">
                  <input
                    type="string"
                    placeholder="Phone No."
                    {...register("phoneNumber")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                    src="/icons/phone.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.phoneNumber?.message}
                  </span>
                </div>
                <div className="w-full relative">
                  <span className="absolute text-xs font-medium text-blue-100 -bottom-4 ">
                    Enter your Date of Birth above.
                  </span>
                  <input
                    type="date"
                    placeholder="Date Of Birth"
                    max="2013-01-01"
                    {...register("date")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 h-[45.6px]"
                    required
                  />
                  <Image
                    src="/icons/calendar.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.date?.message}
                  </span>
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="City"
                    {...register("city")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                    src="/icons/city.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.city?.message}
                  </span>
                </div>

                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="State"
                    {...register("state")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                    src="/icons/state.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.state?.message}
                  </span>
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full relative">
                  <select
                    {...register("gender")}
                    onChange={(e) =>
                      setValue("gender", e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-[10px] appearance-none"
                  >
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                  <Image
                    src="/Assets/downarrow.svg"
                    alt="icon"
                    width={18}
                    height={18}
                    className="absolute right-5 bottom-3.5 "
                  />
                  <Image
                    src="/icons/gender.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.gender?.message}
                  </span>
                </div>

                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Institution"
                    {...register("institution")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                    src="/icons/institution.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.institution?.message}
                  </span>
                </div>
              </div>

              {showRollNumberField && (
                <div className="w-full relative mt-3">
                  <input
                    type="number"
                    placeholder="Roll Number"
                    // {...register("rollNumber")}
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                    src="/icons/institution.webp"
                    alt="bg image"
                    width={30}
                    height={30}
                    className="absolute left-[10px] bottom-[7.8px]"
                  />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">
                    {errors.rollNumber?.message}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 pt-5">
              <input
                type="checkbox"
                id="kiitStudentCheckbox"
                // {...register("isKiitStudent")}
                onChange={(e) => {
                  setIsKiitStudent(e.target.checked);
                  setShowRollNumberField(e.target.checked);
                }}
                className="mr-2 w-8 h-8 cursor-pointer"
              />
              <label htmlFor="kiitStudentCheckbox" className="text-cyan-300">
                Are you a kiit student? Fill your KIIT issued email id and fill your roll number for
                checking credentials later.
              </label>
            </div>
            <p className="mx-auto text-green-400 font-medium mt-5">
              {displayMessage}
            </p>
            <p className="mx-auto text-red-400 font-medium mt-5">
              {errorMessage}
            </p>
            <button
              type="submit"
              disabled={loading || submitted}
              className={`${
                loading || (submitted && "opacity-50 cursor-not-allowed")
              } mx-auto flex items-center gap-4 py-1 mt-5 md:py-2 leading-none px-4 md:px-6 rounded-full bg-gradient-to-b from-[#174ACE] to-[#16B2DB] border-[3.3px] border-white text-sm md:text-lg font-medium text-white`}
            >
              <PulseLoader loading={loading} size={6} color="#fff" />
              {submitted && <>👍</>}
              <p>Submit</p>
            </button>
          </form>
          <div className="text-center py-3 text-white">
            Already have an account ?
            <Link href="/auth/login" className="text-blue-300 font-bold">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Page;

export default dynamic(() => Promise.resolve(Page), { ssr: false });
