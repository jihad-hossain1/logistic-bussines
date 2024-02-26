import React from "react";
import { featureDta } from "./featureData";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const Features = () => {
  return (
    <main className="max-w-screen-xl m-auto px-2 flex flex-col gap-4 xl:gap-7 lg:my-10">
      <div className="flex flex-col gap-4 xl:gap-7 items-center pt-6 lg:pt-16">
        <h4
          className="text-lg lg:text-xl font-semibold "
          style={{ color: "#3782d5" }}
        >
          Features
        </h4>
        <h4 className="flex flex-col gap-2 text-xl sm:text-2xl md:text-4xl xl:text-6xl font-semibold text-center">
          <span>Special Features Thats Make You</span>
          <span>Happy And Cheer Up!</span>
        </h4>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 lg:pt-10">
        {featureDta?.map((item) => (
          <div
            key={item?.id}
            className="group flex flex-col gap-3 cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <div className="absolute w-[43%] md:w-[17%] lg:w-[22%] xl:w-[23%]  group-hover:w-2/6  h-full flex flex-col justify-between -left-10 bg-blue-400 bg-opacity-20 group-hover:left-0 opacity-100 group-hover:opacity-100 transition-all duration-300" />
              <Image
                className="m-3 lg:h-[60px] lg:w-[60px]"
                src={item?.icon}
                height={40}
                width={40}
                alt={item?.title}
              />
            </div>
            <h4 className="font-semibold lg:text-2xl hover:text-[#3782d5] transition-all duration-500">
              {item?.title}
            </h4>
            <p className="text-inherit tracking-tight text-gray-500 break-all lg:break-normal">
              {item?.details}
            </p>
          </div>
        ))}
      </div>
      <div className="group flex justify-center items-center mt-10">
        <div className="relative overflow-hidden w-fit">
          <div className="absolute w-full  h-full flex flex-col justify-between -bottom-20 bg-blue-400 bg-opacity-20 group-hover:bottom-0 opacity-100 group-hover:opacity-100 transition-all duration-300 cursor-pointer" />
          <button className="font-semibold  px-6 py-3 rounded-sm border border-gray-300 transition-all duration-700 w-fit flex gap-1 items-center">
            <span>See More</span> <GoArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Features;
