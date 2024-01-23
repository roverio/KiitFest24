"use client";

import { signOut } from "next-auth/react";

export default function logout() {
  return (
    <h1
      className="uppercase cursor-pointer  hover:translate-x-4 transition-transform duration-300"
      onClick={() => signOut()}
    >
      logout
    </h1>
  );
}
