"use client";

import { motion } from "framer-motion";
import React from "react";
import Logo from "./logo";
import Language from "./language";
import Link from "next/link";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <>
      <div className="lg:hidden  flex items-center text-white font-semibold text-xs md:text-lg ">
        <Link
          className="uppercase bg-[#74bf43] w-full p-3 text-center"
          href={"/"}
        >
          Track My Pallet
        </Link>
        <Link
          className="uppercase   bg-[#3782d5] w-full p-3 text-center"
          href={"/"}
        >
          Delivery Lead Time Check
        </Link>
      </div>
      <nav className="relative flex justify-between gap-5 lg:gap-10 bg-[#003875]  items-center text-white">
        <div className="px-2 flex items-center gap-4 lg:gap-10">
          <Logo />
          <Language />
        </div>

        <div className="text-sm flex  gap-3 lg:gap-6 items-center">
          <div className="hidden lg:flex  gap-3 lg:gap-6 items-center">
            <Link
              className="uppercase px-5  py-2 border-[1px]  border-[#74bf43] rounded hover:bg-[#74bf43] hover:ease-in-out transition-all duration-700 flex gap-3 items-center"
              href={"/"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
              <span className="hidden xl:block">Track My Pallet</span>
            </Link>
            <Link
              className="uppercase border-[1px] border-[#3782d5] px-5 py-2 rounded hover:bg-[#3782d5] hover:ease-in-out transition-all duration-700 flex gap-3 items-center"
              href={"/"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="hidden xl:block">Delivery Lead Time Check</span>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 hover:text-[#74bf43] transition-all duration-300 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 hover:text-[#74bf43] transition-all duration-300 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
          </div>

          <div className="flex gap-5 items-center text-xs">
            <motion.a
              whileHover={{ scale: 1.05 }}
              animate="visible"
              initial="hidden"
              variants={{
                hidden: {
                  opacity: 0,
                  y: -100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              href={"/"}
              className="hidden lg:block hover:text-[#74bf43] transition-all duration-300 uppercase"
            >
              Contact Us
            </motion.a>
            <Link
              href={"/"}
              className="hidden lg:block hover:text-[#74bf43] transition-all duration-300 uppercase"
            >
              Portal Sign In
            </Link>
          </div>
          <Link
            href={"/"}
            className=" lg:hidden hover:text-[#74bf43] transition-all duration-300 uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>

          {/* menu section  */}
          <Navigation />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
