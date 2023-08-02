"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import { teamItem } from "@/constants";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <div id="team" className="pt-[80px] pb-[130px]">
      <h2 className="text-[22px] lg:text-4xl text-center block leading-6 font-bold">
        Meet our superheros
      </h2>
      <p className="text-center max-w-[490px] w-full text-sm lg:text-base block mx-auto mt-4 leading-7 lg:leading-9">
        Build an incredible workplace and grow your business with Gusto’s
        all-in-one platform with amazing contents.
      </p>
      <div className="pl-[30px] pt-[60px]">
        <Swiper
          navigation={true} modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1700: {
              slidesPerView: 6,
            }
          }}
        >
          {teamItem.map((item, index) => (
            <SwiperSlide key={index}>
              <TeamItem team={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
