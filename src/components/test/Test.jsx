"use client";

import React from "react";
import ToolTip from "../navbar/ToolTip";
import { BsEnvelope } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

const contact = [
  {
    id: 1,
    name: "logistic@bussiness.info",
    icon: <BsEnvelope className="w-5 h-5 hover:text-[#74bf43]" />,
  },
  {
    id: 2,
    name: "+880 1779334696",
    icon: <IoCallOutline className="w-5 h-5 hover:text-[#74bf43]" />,
  },
];
const Test = () => {
  return (
    <>
      <div className="">
        <ToolTip items={contact} />
      </div>
    </>
  );
};

export default Test;
