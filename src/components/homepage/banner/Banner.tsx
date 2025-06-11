"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import ban1 from "../../../assets/banner1.jpg";


import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

const bannerImages = [
  {
    id: 1,
    img: ban1,
  },
  {
    id: 2,
    img: ban1,
  },
  {
    id: 3,
    img: ban1,
  },
];

const Banner: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerImages.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* <div className="relative w-full h-[10rem] md:h-[18rem] lg:h-[25rem] bg-gray-100 flex justify-center items-center overflow-hidden">
              <div
                className="relative"
                style={{ width: "1000px" }}
              >
                <Image
                  src={slide.img}
                  width={1000}
                  height={1000}
                  alt="banner"
                  className="object-cover"
                />
              </div>
            </div> */}
            <div className="flex items-center justify-center">
              <Image
                src={slide.img}
                width={1000}
                height={1000}
                alt="banner"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
