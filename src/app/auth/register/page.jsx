"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/validations/userSchema";
import Image from "next/image";
import React from 'react';
import dynamic from "next/dynamic";

const Page = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <div className="-z-10 w-[100vw] h-[100vh] fixed">
        <Image
          src="/assets/bgbottom.svg"
          alt="bg image"
          fill
          priority
          className=" invisible md:visible object-cover translate-y-[100px]"
        />
        <Image
          src="/assets/bgbottom2.svg"
          alt="bg image"
          fill
          priority
          className="md:invisible visible object-cover translate-y-[200px]"
        />
      </div>
      <div className="-z-30 w-[100vw] h-[100vh] fixed">
        <Image
          src="/assets/bgblue.png"
          alt="bg image"
          fill
          className="object-cover"
        />
      </div>
      <div className="-z-20 w-[100vw] h-[100vh] fixed">
        <Image
          src="/assets/bgimage2.png"
          alt="bg image"
          fill
          className="object-cover translate-y-[200px]"
        />
      </div>
      <div className="w-full h-full">
        <div className="max-w-[653px] mt-36 w-11/12 bg-[#CCC]/20 backdrop-blur-sm shadow-xl border-[4px] rounded-3xl border-white py-[44px] md:py-[76.5px] px-[25px] md:px-[45px] mx-auto relative">
          <Image
            src="/assets/profile.svg"
            alt="bg image"
            width={122}
            height={122}
            className="absolute left-[calc(50%-43px)] md:left-[calc(50%-61px)] -top-[43px] md:-top-[61px] md:w-[122px] md:h-[122px] h-[86px] w-[86px]"
          />

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
                src="/icons/profile.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.name?.message}</span>
              </div>

              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Email ID"
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
                <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.email?.message}</span>
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
                src="/icons/password.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.password?.message}</span>
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
                src="/icons/password.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.password_confirmation?.message}</span>
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full relative">
                  <input
                    type="number"
                    placeholder="Phone No."
                    {...register("phoneNumber")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                src="/icons/phone.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.phoneNumber?.message}</span>
                </div>
                <div className="w-full relative">
                  <input
                    type="date"
                    placeholder="Date Of Birth"
                    max="2006-01-01"
                    {...register("date")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-[9px] "
                  />
                  <Image
                src="/icons/calendar.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.date?.message}</span>
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
                src="/icons/city.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.city?.message}</span>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="State"
                  {...register("state")}
                  className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                />
                <Image
                src="/icons/state.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.state?.message}</span>
              </div>
              </div>

              <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full relative">
                  <select {...register("gender")} onChange={(e) => setValue('gender', e.target.value, { shouldValidate: true })} 
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-[10px] appearance-none"
                  >
                    <option value="" >Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                  <Image
                    src="/assets/downarrow.svg"
                    alt="icon"
                    width={18}
                    height={18}
                    className="absolute right-5 bottom-3.5 "/>
                    <Image
                src="/icons/gender.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.gender?.message}</span>
                </div>

                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="College"
                    {...register("college")}
                    className="w-full placeholder-[#0098CE] bg-gray-50 border border-gray-300 text-[#0098CE] font-light text-base rounded-lg block ps-12 p-2.5 "
                  />
                  <Image
                src="/icons/college.png"
                alt="bg image"
                width={30}
                height={30}
                className="absolute left-[10px] bottom-[7.8px]"
                />
                  <span className="absolute -bottom-[18px] text-sm text-red-500 font-semibold">{errors.college?.message}</span>
                </div> 
              </div>
            </div>
            <button type="submit" className="mx-auto py-1 mt-10 md:py-2 leading-none px-4 md:px-6 rounded-full bg-gradient-to-b from-[#174ACE] to-[#16B2DB] border-[3.3px] border-white text-sm md:text-lg font-medium text-white">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default Page;

export default dynamic (() => Promise.resolve(Page), {ssr: false})