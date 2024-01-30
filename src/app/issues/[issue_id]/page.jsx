"use client";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { getIssue } from "./action";

const Page = ({ params }) => {
  const id = params.issue_id;
  const [issue, setIssue] = useState({});
  const [success, setSuccess] = useState(false);
  const [errmsg, setErrmsg] = useState();
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => {
    const getIssue = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.get(`/api/issue/${id}`, config);
        setIssue(res.data.Issue);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    getIssue();
  }, [id]);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const changeHandler = (e) => {
    setAccessCode(e.target.value);
    // console.log(accessCode);
  };
  const ResolveHandler = async () => {
    try {
      const res = await axios.put(
        "/api/issue",
        {
          issueId: id,
          accessCode: accessCode,
        },
        config
      );
      setAccessCode("");
      setSuccess(true);
      console.log(res);
    } catch (err) {
      setSuccess(false);
      setAccessCode("");
      setErrmsg(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
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
      <div className="w-full   py-28 ">
        <div className="max-w-[1500px] flex flex-col justify-between w-[95%] min-h-[600px]   lg:w-[85%] bg-[#CCC]/20 backdrop-blur-sm shadow-xl border-[1px] rounded-xl border-white py-6 text-white text-lg px-[25px] md:px-[45px] mx-auto relative">
          <div>
            <p className="text-2xl">{issue.subject}</p>
            <p>{issue.issue}</p>
            <p>
              Status :
              {issue.resolved ? (
                <span className="text-green-500"> Resolved</span>
              ) : (
                <span className="text-red-500"> Not Resolved</span>
              )}
            </p>
          </div>
          {!issue.resolved && (
            <div className="flex flex-col">
              <input
                type="number"
                value={accessCode}
                onChange={changeHandler}
                placeholder="Enter the admin access code"
                className="p-2 w-[200px] text-black rounded-md"
              />
              <button
                onClick={ResolveHandler}
                className="p-2 w-[140px] rounded-lg my-4 bg-green-500"
              >
                Resolve
              </button>
              {!success && <p className="text-red-500">{errmsg}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
