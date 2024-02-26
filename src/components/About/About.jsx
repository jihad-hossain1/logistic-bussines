import Image from "next/image";
import React from "react";
import aboutImage from "@/public/about.jpg";
import icons1 from "@/public/icons/1.svg";
import icons2 from "@/public/icons/2.svg";
import icons3 from "@/public/icons/3.svg";
import icons4 from "@/public/icons/4.svg";
import icons5 from "@/public/icons/5.svg";
import icons6 from "@/public/icons/6.svg";

const About = () => {
  return (
    <main className="max-w-screen-xl m-auto px-2 mt-14 lg:mt-20">
      <div className=" xl:flex ">
        <aside className="xl:h-[900px] xl:bg-[#003875] xl:text-white xl:p-20 bg-gray-100">
          <AboutText />
        </aside>
        <main className="xl:h-[900px] bg-gray-100 p-3 xl:p-20">
          <h4
            style={{ fontWeight: "300" }}
            className="text-sm lg:text-lg font-thin text-gray-950 tracking-wide leading-loose break-all md:break-normal"
          >
            Logistics Bussiness has over 25 years’ experience in express
            palletised freight delivery and has steadily expanded its network to
            key countries within Europe, building a network of over 400 members
            operating from over 450 depots dedicated to offering a wide range of
            pallet delivery services to suit you. We operate a range of premium
            services (within 24 hours depending on location) and a range of
            economy services (within 48 hours depending on location).
          </h4>
          <h4 className="font-semibold text-sm mt-5 lg:mt-10">
            Latest edition of our newsletter The Hub is now available.
            <a href="#" className="font-[300] underline hover:text-blue-500">
              {` Click here `}
            </a>
            to view.
          </h4>

          <div className="mt-10  bg-[#fefefe] relative ">
            <div className="xl:flex xl:absolute -left-[30%]">
              <div className="flex items-center lg:items-start justify-center">
                <Image
                  src={aboutImage.src}
                  alt="tracked image"
                  width={300}
                  height={300}
                  className="object-cover w-96 lg:w-full lg:h-[500px]  "
                />
              </div>
              <div className="bg-[#fefefe] flex flex-col gap-3 text-[13px] p-3 md:p-5 md:tracking-wide md:text-[15px] font-[300]">
                <div className="flex gap-4 items-center">
                  <Image
                    alt="tracked icon"
                    width={60}
                    height={60}
                    className=""
                    src={icons2.src}
                  />
                  <h4>
                    Two big things happend in transport in{" "}
                    <span className="font-bold text-blue-800">1994</span> - the
                    channel tunnel opened and so did Palletways
                  </h4>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    alt="tracked icon"
                    width={60}
                    height={60}
                    className=""
                    src={icons2.src}
                  />
                  <h4>
                    <h4>
                      We have{" "}
                      <span className="font-bold text-blue-800">
                        7 main networks:
                      </span>{" "}
                      UK, Benelux, Iberia, Italy, Germany, Hungary,
                      International
                    </h4>
                  </h4>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    alt="tracked icon"
                    width={60}
                    height={60}
                    className=""
                    src={icons3.src}
                  />
                  <h4>
                    There are 28 countries in the EU and our network is up to{" "}
                    <span className="font-bold text-blue-800">
                      24 and counting
                    </span>
                  </h4>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    alt="tracked icon"
                    width={60}
                    height={60}
                    className=""
                    src={icons4.src}
                  />
                  <h4>
                    We have{" "}
                    <span className="font-bold text-blue-800">6 core</span>{" "}
                    international pallet types
                  </h4>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    alt="tracked icon"
                    width={60}
                    height={60}
                    className=""
                    src={icons5.src}
                  />
                  <h4>
                    Over{" "}
                    <span className="font-bold text-blue-800">
                      45,000 pallets
                    </span>{" "}
                    travel through our network every day delivering bricks to
                    wine to gravel.
                  </h4>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    alt="tracked icon"
                    width={60}
                    height={60}
                    className=""
                    src={icons6.src}
                  />
                  <h4>
                    We deliver through{" "}
                    <span className="font-bold text-blue-800">
                      over 450 depots
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

function AboutText() {
  return (
    <>
      <h4 className="text-inherit text-nowrap uppercase pt-5 text-sm xl:text-md font-[300] xl:font-normal xl:pt-0">
        About Logistics
      </h4>
      <h4 className=" text-lg text-[#003875] xl:text-white xl:text-3xl font-bold mt-5 ">
        Domestic & international express Logistics delivery
      </h4>
    </>
  );
}

export default About;
