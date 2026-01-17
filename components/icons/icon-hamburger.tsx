import { IIconProps } from "@/types/icon.type";
import React from "react";

const IconHamburger = ({ className }: IIconProps) => {
  return (
    <svg
      width="32"
      height="23"
      viewBox="0 0 32 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        y1="0.75"
        x2="31.0175"
        y2="0.75"
        stroke="#9C9C9D"
        strokeWidth="1.5"
      />
      <line
        x1="6.10352e-05"
        y1="11.4868"
        x2="31.0176"
        y2="11.4868"
        stroke="#9C9C9D"
        strokeWidth="1.5"
      />
      <line
        x1="6.10352e-05"
        y1="22.2236"
        x2="31.0176"
        y2="22.2236"
        stroke="#9C9C9D"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default IconHamburger;
