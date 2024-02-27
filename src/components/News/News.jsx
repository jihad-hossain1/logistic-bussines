"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { newsData } from "./newsData";
import { useEffect, useState } from "react";

const News = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 4
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
    <div className="bg-gray-100/85">
      <section className="px-2 py-10 md:py-16 max-w-screen-xl m-auto">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between  py-5 lg:py-10">
          <h4 className="md:text-2xl lg:text-4xl font-semibold text-[#003875]">
            Latest news from Logistics
          </h4>
          <button className="w-fit uppercase font-semibold border px-5 py-1 rounded-md shadow-sm hover:bg-slate-100 transition-all duration-500 text-sm">
            discover more news
          </button>
        </div>

        <Swiper
          watchSlidesProgress={true}
          slidesPerView={slides}
          className="mySwiper "
          spaceBetween={30}
        >
          {newsData?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="group cursor-pointer flex flex-col gap-3 lg:gap-5 ">
                <div className="overflow-hidden flex flex-col items-center md:items-start">
                  <Image
                    src={item?.img}
                    width={300}
                    height={300}
                    className="rounded object-cover h-[200px] lg:h-[220px] w-[300px] lg:w-[320px] group-hover:scale-95 transition-all duration-500"
                    alt="blog image"
                  />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500">{item?.date}</h4>
                </div>
                <h4
                  style={{ lineHeight: "25px" }}
                  className="tracking-wider  text-sm font-semibold group-hover:text-[#003875]"
                >
                  {item?.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default News;
