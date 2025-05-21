"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onclickFunction: () => void;
}

export const Button = ({ children, className , onclickFunction}: ButtonProps) => {
  return (
    <button
      className={`${className} px-2`}
      onClick={()=>onclickFunction()}
    >
      {children}
    </button>
  );
};
