"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useSwiper } from "swiper/react";
import slider1 from "@/public/slider/slider1.jpg";
import slider2 from "@/public/slider/slider2.jpg";
import slider3 from "@/public/slider/slider3.jpg";

const ServiceSlider = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 3
        : 0
    );
  };

  useEffect(() => {
    setSlidesPerview();
    window.addEventListener("resize", setSlidesPerview);
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <div className="mt-12 max-w-screen-xl mx-auto relative px-2">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={slides}
        className="mySwiper "
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="group cursor-pointer">
            <div className="overflow-hidden">
              <Image
                width={400}
                height={300}
                className=" rounded-sm w-[370px] md:w-[450px] group-hover:scale-105 transition-all duration-500"
                src={slider1.src}
                alt="slider iamge"
              />
            </div>
            <button className="p-4 bg-slate-200/90 w-full group-hover:bg-[#78b926] transition-all duration-500 uppercase font-[400] text-sm ">
              Our Logistics Delivery services
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group cursor-pointer">
            <div className="overflow-hidden">
              <Image
                width={400}
                height={300}
                className="rounded-sm  w-[370px] md:w-[450px] group-hover:scale-105 transition-all duration-500"
                src={slider2.src}
                alt="slider img"
              />
            </div>
            <button className="p-4 bg-slate-200/90 w-full group-hover:bg-[#78b926] transition-all duration-500 uppercase font-[400] text-sm">
              Be a member of Logistics
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group cursor-pointer">
            <div className="overflow-hidden">
              <Image
                width={400}
                height={300}
                className="rounded-sm w-[370px] md:w-[450px] group-hover:scale-105 transition-all duration-500"
                src={slider3.src}
                alt="slider image"
              />
            </div>
            <button className="p-4 bg-slate-200/90 w-full group-hover:bg-[#78b926] transition-all duration-500 uppercase font-[400] text-sm">
              Education Centre
            </button>
          </div>
        </SwiperSlide>

        <SliderButton />
      </Swiper>
    </div>
  );
};

function SliderButton() {
  const swiper = useSwiper();
  return (
    <>
      <div className="absolute z-50 top-[50%] left-3">
        <div className="swiper-nav-btns  gap-6 mt-4 ">
          <button
            className=" rounded bg-slate-50/40 p-3 hover:bg-slate-100 transition-all duration-500"
            onClick={() => swiper.slidePrev()}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
        </div>
      </div>
      <div className="absolute z-50 top-[50%] right-3">
        <div className="swiper-nav-btns  gap-6 mt-4 ">
          <button
            className="rounded bg-slate-50/40 p-3 hover:bg-slate-50 transition-all duration-500"
            onClick={() => swiper.slideNext()}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
export default ServiceSlider;
