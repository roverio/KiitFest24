import React from "react";
import NavwithoutAnimation from "@/components/Navwithoutanimation";

export default function layout({ children }) {
  return (
    <div>
      <NavwithoutAnimation />
      {children}
    </div>
  );
}
