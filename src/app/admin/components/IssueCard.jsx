"use client";

import React, { useState } from "react";
import { assignUid } from "../action";

export default function IssueCard({ userData, issuerName }) {
  const [done, setDone] = useState(null);

  console.log(userData, 9);
  if (!userData) {
    return <div></div>;
  }

  const user = userData?.searchedUser[0];
  const user2 = userData?.searchedUser[1];

  if (!user) {
    return (
      <div className="text-white">
        User does not exist
        <button
          type="submit"
          onClick={() => window.location.reload()}
          className="w-full text-white mt-4 bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Search Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full  p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
      <div className="">
        <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          User Data
        </h1>
        <div className="font-light text-yellow-500 dark:text-yellow-400">
          <p>UserName : {user.name}</p>
          <p>Kfid : {user?.kfid}</p>
          <p>Payment : {user?.isPaymentCompleted.toString()}</p>
          <p>KIIT student: {user?.isKiitStudent.toString()}</p>
          <p>
            ID card status: {user?.receivedIdCard ? "received" : "NOT ISSUED"}
          </p>
          <p>card Issuer Name (if assigned) : {user?.cardIssuer}</p>
          <p>UID (if assigned): {user?.uid}</p>
        </div>
        <div className="text-red-200">if second user exists. If two id cards are issued. Details will be shown below</div>
        {user2 && (
        <div className="font-light text-yellow-500 dark:text-yellow-400">
          <p>UserName : {user2.name}</p>
          <p>Kfid : {user2?.kfid}</p>
          <p>Payment : {user2?.isPaymentCompleted.toString()}</p>
          <p>KIIT student: {user2?.isKiitStudent.toString()}</p>
          <p>
            ID card status: {user2?.receivedIdCard ? "received" : "NOT ISSUED"}
          </p>
          <p>card Issuer Name (if assigned) : {user2?.cardIssuer}</p>
          <p>UID (if assigned): {user2?.uid}</p>
        </div>)}
        {/* {!user.receivedIdCard && (
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            action={async (formData) => {
              await assignUid(formData);
              setDone(true);
              setTimeout(() => {
                window.location.reload()
              }, 2000);
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Assign UID
              </label>
              <input
                type="number"
                name="uid"
                id="uid"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Number to be assinged"
                required
              />
              <input
                type="hidden"
                value={issuerName}
                name="issuerName"
                id="issuerName"
              />
              <input type="hidden" value={user.kfid} name="kfid" id="kfid" />
            </div>
            {done && (
              <div className="flex items-start text-green-500">Done.</div>
            )}
            <div className="flex items-start"></div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Issue card
            </button>
          </form>
        )} */}
        <button
          type="submit"
          onClick={() => window.location.reload()}
          className="w-full text-white mt-4 bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
