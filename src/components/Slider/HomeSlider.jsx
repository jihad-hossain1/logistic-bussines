"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        // slidesPerView={slides}
        className="mySwiper "
        // spaceBetween={30}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,

        // }}
        // modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <SliderOne />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SliderThree />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

function SliderOne() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title", "#title-1", "#title-2", "#title-3", "#btn"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${image1.src})` }}
      className=" slider-bg"
      ref={comp}
    >
      <div className="slider-block">
        <h4 id="title" className="lg:text-xl font-bold text-white">
          Your Partner For Simplified Delivery
        </h4>
        <h4 className="slider-font">
          <span id="title-1">The New Logistec</span>
          <span id="title-2">Revolutions For</span>
          <span id="title-3">Your Bussiness</span>
        </h4>
        <div id="btn" className="flex items-center gap-5">
          <Link href={"#"} className="btn-1">
            Read More
          </Link>
          <Link href={"#"} className=" btn-2">
            Free quote!
          </Link>
        </div>
      </div>
    </div>
  );
}
function SliderTwo() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title", "#title-1", "#title-2", "#title-3", "#btn"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      style={{ backgroundImage: `url(${image2.src})` }}
      className=" slider-bg"
    >
      <div className="slider-block">
        <h4 id="title" className="lg:text-xl font-bold text-white">
          Your Partner For Simplified Delivery
        </h4>
        <h4 className="slider-font">
          <span id="title-1">Safest Logistics</span>
          <span id="title-2">Solutions provider</span>
          <span id="title-3">With Integrity</span>
        </h4>
        <div id="btn" className="flex items-center gap-5">
          <Link href={"#"} className="btn-1">
            Read More
          </Link>
          <Link href={"#"} className=" btn-2">
            Free quote!
          </Link>
        </div>
      </div>
    </div>
  );
}
function SliderThree() {
  const comp2 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title2", "#title-12", "#title-22", "#title-32", "#btn2"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      });
    }, comp2);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp2}
      style={{ backgroundImage: `url(${image3.src})` }}
      className="slider-bg"
    >
      <div className="slider-block">
        <h4 id="title2" className="lg:text-xl font-bold text-white">
          Your Partner For Simplified Delivery
        </h4>
        <h4 className="slider-font">
          <span id="title-12">Fast And More</span>
          <span id="title-22">Trusted Transport</span>
          <span id="title-32">Service.</span>
        </h4>
        <div id="btn2" className="flex items-center gap-5">
          <Link href={"#"} className="btn-1">
            Read More
          </Link>
          <Link href={"#"} className=" btn-2">
            Free quote!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
