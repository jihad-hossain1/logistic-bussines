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

const HomeSlider = () => {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        // slidesPerView={slides}
        className="mySwiper "
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${image1.src})` }}
            className=" slider-bg"
          >
            <div className="slider-block">
              <h4 className="lg:text-xl font-bold text-white">
                Your Partner For Simplified Delivery
              </h4>
              <h4 className="slider-font">
                <span>The New Logistec</span>
                <span>Revolutions For</span>
                <span>Your Bussiness</span>
              </h4>
              <div className="flex items-center gap-5">
                <Link href={"#"} className="btn-1">
                  Read More
                </Link>
                <Link href={"#"} className=" btn-2">
                  Free quote!
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${image2.src})` }}
            className=" slider-bg"
          >
            <div className="slider-block">
              <h4 className="lg:text-xl font-bold text-white">
                Your Partner For Simplified Delivery
              </h4>
              <h4 className="slider-font">
                <span>Safest Logistics</span>
                <span>Solutions provider</span>
                <span>With Integrity</span>
              </h4>
              <div className="flex items-center gap-5">
                <Link href={"#"} className="btn-1">
                  Read More
                </Link>
                <Link href={"#"} className=" btn-2">
                  Free quote!
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${image3.src})` }}
            className="slider-bg"
          >
            <div className="slider-block">
              <h4 className="lg:text-xl font-bold text-white">
                Your Partner For Simplified Delivery
              </h4>
              <h4 className="slider-font">
                <span>Fast And More</span>
                <span>Trusted Transport</span>
                <span>Service.</span>
              </h4>
              <div className="flex items-center gap-5">
                <Link href={"#"} className="btn-1">
                  Read More
                </Link>
                <Link href={"#"} className=" btn-2">
                  Free quote!
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
