"use client"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Slide from "@/components/Slide";


const Banner: React.FC = () => {
 
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={"/assets/male-modelwebp.webp"}
            title={"Winter Collection"}
            model={"Winter Jacket"}
            price={"1000"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={"/assets/male-modelwebp.webp"}
            title={"Winter Collection"}
            model={"Winter Jacket"}
            price={"1200"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={"/assets/male-modelwebp.webp"}
            title={"Winter Collection"}
            model={"Winter Jacket"}
            price={"1300"}
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
