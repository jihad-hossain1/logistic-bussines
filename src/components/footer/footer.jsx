import React from "react";
import Logo from "../navbar/logo";
import { footerData } from "./footerData";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="bg-[#003875] text-zinc-50 mt-16">
      <div className="max-w-screen-xl m-auto px-2 uppercase  py-7 lg:py-14">
        <div className="grid gap-7 md:flex md:gap-7 lg:gap-16 ">
          <aside className="flex flex-col gap-3 lg:gap-6 text-xs text-gray-300 items-center">
            <Logo />
            <h4>+880 1779 334696</h4>
            <h4>Info@logistics.com</h4>
            <div className="flex gap-6 text-[23px] text-gray-400">
              <FaYoutube className="cursor-pointer hover:text-gray-50 transition-all duration-200" />
              <FaFacebook className="cursor-pointer hover:text-gray-50 transition-all duration-200" />
              <FaTwitter className="cursor-pointer hover:text-gray-50 transition-all duration-200" />
            </div>
          </aside>

          <footer className="grid grid-cols-2 gap-10 lg:grid-cols-4 ">
            {footerData?.map((item, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold ">{item?.title}</h4>
                <ul className="flex flex-col gap-3 pt-5 text-xs text-gray-300">
                  {item?.links?.map((itm, _ind) => (
                    <li
                      className="cursor-pointer hover:text-gray-50 transition-all duration-200 w-fit"
                      key={_ind}
                    >
                      {itm?.link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </footer>
        </div>
      </div>
      <div className="bg-[#0d427c] py-6 px-2 lg:py-8 uppercase ">
        <div className="max-w-screen-xl m-auto">
          <div className="flex justify-between text-xs items-center md:flex-row flex-col gap-5 md:gap-3">
            <h4>ALL RIGHTS RESERVED © Logistics 2024</h4>
            <h4 className="flex flex-col text-[10px]">
              <span>Investors</span>
              <span>In People</span>
            </h4>
            <h4 className="text-slate-400">DESIGNED BY Logistics</h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
