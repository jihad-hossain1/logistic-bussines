"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen, svgControls, containerControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative ">
      <button
        onClick={() => handleOpenClose()}
        className="flex flex-col justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-9 h-9"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <span className="uppercase text-xs">menu</span>
      </button>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          animate={containerControls}
          //   onClick={() => handleOpenClose()}
          initial="close"
          className=" bg-[#003875] flex flex-col z-10 gap-20 p-5 absolute top-0  right-0 h-screen shadow shadow-neutral-600"
        >
          <div className="flex justify-end">
            <button
              className="p-1 rounded-full flex"
              onClick={() => handleOpenClose()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
                variants={svgVariants}
                animate={svgControls}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-3 items-end text-justify">
            <NavigationLink name="Home" path={"/"} />

            <NavigationLink name="Our Service" path={"/"} />

            <NavigationLink name="Our Members" path={"/"} />

            <NavigationLink name="Industry Sectors" path={"/"} />

            <NavigationLink name="Education Center" path={"/"} />

            <NavigationLink name="Media Center" path={"/"} />

            <NavigationLink name="Careers" path={"/"} />

            <NavigationLink name="Contact Us" path={"/"} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
