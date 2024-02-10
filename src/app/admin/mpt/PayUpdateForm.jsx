"use client";

import React, { useState } from "react";
import { updatePayment } from "./action";
import Link from "next/link";
export default function PayUpdateForm({ issuerName }) {
  const [message, setMessage] = useState(null);
  const [kfid, setKfid] = useState("");

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full  p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <div className="">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Strictly Confidential
            </h1>

            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action={async (formData) => {
                try {
                  const res = await updatePayment(formData);
                  setMessage(res.message);
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                } catch (error) {
                  setMessage(res.message);
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                }
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Update User Payment After Checking Sheet
                </label>
                <input
                  type="hidden"
                  value={issuerName}
                  name="issuerName"
                  id="issuerName"
                />{" "}
                <input
                  type="text"
                  required
                  onChange={(e) => setKfid(e.target.value)}
                  value={kfid}
                  name="kfid"
                  placeholder="kfid without KF_"
                  id="kfid"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {message && (
                <div className="flex items-start text-green-500">
                  {message}
                </div>
              )}
              <div className="flex items-start"></div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update Payment(this cant be undone)
              </button>
            </form>
            <Link href="/admin">
              <button
                type="submit"
                className="w-full text-white mt-4 bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Admin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
