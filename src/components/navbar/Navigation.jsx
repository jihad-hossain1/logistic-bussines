"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { navData } from "./navData";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
      ease: [1, 0.67, 0.83, 1],
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 1,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [isOpen, containerControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative ">
      <button
        onClick={() => handleOpenClose()}
        className="flex flex-col justify-center items-center p-4"
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
          // onClick={() => handleOpenClose()}
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
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            transition={{
              delay: 0.35,
            }}
            className="flex flex-col gap-5 lg:gap-8 items-end text-justify"
          >
            {navData?.map((nav, index) => (
              <motion.a
                key={index}
                href={"#"}
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.1,
                  borderBottom: "solid 1px gray ",
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                transition={{
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
              >
                {nav?.name}
              </motion.a>
            ))}
          </motion.div>
          <Contact />
        </motion.div>
      )}
    </div>
  );
};

function Contact() {
  return (
    <aside className="md:hidden flex flex-col gap-5 ml-10 text-xs text-gray-300 items-center absolute bottom-20 ">
      <h4>+880 1779 334696</h4>
      <h4>Info@logistics.com</h4>
      <div className="flex gap-6 text-[23px] text-gray-400">
        <FaYoutube className="cursor-pointer hover:text-gray-50 transition-all duration-200" />
        <FaFacebook className="cursor-pointer hover:text-gray-50 transition-all duration-200" />
        <FaTwitter className="cursor-pointer hover:text-gray-50 transition-all duration-200" />
      </div>
    </aside>
  );
}
export default Navigation;
