// this sideEffect component is written so it can logout user if his id his not stored in our database
// in testing phase few users created their ids so it will only effect people who are not in our db
"use client";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function ForceLogout() {
  useEffect(() => {
    return async () => await signOut();
  }, []);
}
