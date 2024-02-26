"use client";

import { motion, useScroll } from "framer-motion";
import React from "react";
motion;

const containerVarient = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridVarient = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

const Test1 = () => {
  return (
    <>
      <div className="hidden">
        <AnimationOne />
      </div>

      <div className="hidden">
        <FadeUp_FadeDown />
      </div>
      <div className="hidden">
        <Key_Frame />
      </div>
      <div className="hidden">
        <ONMouseHoverClick />
      </div>
      <div className="hidden">
        <OnDragable />
      </div>
      <div className="hidden">
        <OnScroll />
      </div>
      <div className="hidden">
        <SvgAnimation />
      </div>
      <div className="">
        <ScrollAnimation />
      </div>
    </>
  );
};

function ScrollAnimation() {
  return (
    <section className="flex flex-col gap-10 mt-10">
      <h4>Just Keep Scrolling</h4>

      <p className="font-thin text-3xl w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque magni
        iusto distinctio repellat quos, minima obcaecati rerum aliquid tempore.
      </p>
      <p className="font-thin text-3xl w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque magni
        iusto distinctio repellat quos, minima obcaecati rerum aliquid tempore.
      </p>
    </section>
  );
}

function SvgAnimation() {
  return (
    <>
      <motion.section
        initial={"hidden"}
        animate={"show"}
        variants={containerVarient}
        className="grid grid-cols-4 p-10 gap-10"
      >
        <motion.div
          variants={gridVarient}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              //   d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
    </>
  );
}

function OnScroll() {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <>
      <motion.section
        initial={"hidden"}
        animate={"show"}
        variants={containerVarient}
        className="grid grid-cols-4 p-10 gap-10"
      >
        <motion.div
          variants={gridVarient}
          className="bg-orange-500 aspect-square rounded-lg justify-center flex items-center gap-10 p-5"
        >
          <motion.div className="w-40 aspect-square bg-orange-100 rounded-lg">
            <motion.div
              className="w-full bg-orange-300 rounded-md h-full origin-bottom "
              style={{ scaleY: completionProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

function OnDragable() {
  return (
    <>
      <motion.section
        initial={"hidden"}
        animate={"show"}
        variants={containerVarient}
        className="grid grid-cols-4 p-10 gap-10"
      >
        <motion.div
          variants={gridVarient}
          className="bg-orange-500 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            drag
            dragConstraints={{
              top: -125,
              right: 125,
              bottom: 125,
              left: -125,
            }}
            dragTransition={{
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
            className="bg-orange-200 p-3 rounded-md cursor-grab"
          ></motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

function ONMouseHoverClick() {
  return (
    <>
      <motion.section
        initial={"hidden"}
        animate={"show"}
        variants={containerVarient}
        className="grid grid-cols-4 p-10 gap-10"
      >
        <motion.div
          variants={gridVarient}
          className="bg-orange-500 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "orange",
            }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
            className="bg-orange-200 p-3 rounded-md"
          >
            CLICK ME
          </motion.button>
        </motion.div>
      </motion.section>
    </>
  );
}

function Key_Frame() {
  return (
    <>
      <motion.section
        initial={"hidden"}
        animate={"show"}
        variants={containerVarient}
        className="grid grid-cols-4 p-10 gap-10"
      >
        <motion.div
          variants={gridVarient}
          className="bg-orange-500 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="bg-orange-200 w-10 xl:w-32 h-10 xl:h-32 rounded-md"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              //   repeat: Infinity,
              repeat: 2,
              repeatDelay: 1,
            }}
          />
        </motion.div>
      </motion.section>
    </>
  );
}

function FadeUp_FadeDown() {
  return (
    <>
      <motion.section
        initial={"hidden"}
        animate={"show"}
        variants={containerVarient}
        className="grid grid-cols-4 p-10 gap-10"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t, i) => (
          <motion.div
            key={i}
            variants={gridVarient}
            className="bg-orange-500 aspect-square rounded-lg justify-center flex items-center gap-10"
          >
            <div className="flex gap-3">
              <motion.div
                className="bg-orange-200 w-10 xl:w-32 h-10 xl:h-32 rounded-md"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
              <motion.div
                className="bg-orange-200 w-10 xl:w-32 h-10 xl:h-32 rounded-md"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}

function AnimationOne() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <h4>Test1</h4>

      <motion.section
        initial={"hidden"}
        animate={"show"}
        variants={containerVarient}
        className="grid grid-cols-4 p-10 gap-10"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t, i) => (
          <motion.div
            key={i}
            variants={gridVarient}
            className="bg-orange-500 aspect-square rounded-lg justify-center flex items-center gap-10"
          ></motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default Test1;
