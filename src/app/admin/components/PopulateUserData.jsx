"use client";
import React, { useState } from "react";
import { searchUser } from "../action";
import IssueCard from "./IssueCard";

export default function PopulateUserData({ issuerName }) {
  const [userData, setUserData] = useState(null);
  console.log(userData);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Id card issuer
        </a>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8 mb-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Search User
          </h2>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            // this wont work outside nextjs
            action={async (formData) => {
              const user = await searchUser(formData);
              setUserData(user);
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter user&apos;s email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>

            <button
              type="submit"
              disabled={userData}
              className={`${
                userData && "cursor-not-allowed"
              } w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
            >
              Find User
            </button>
          </form>
        </div>
        <IssueCard userData={userData} issuerName={issuerName} />
      </div>
    </section>
  );
}
