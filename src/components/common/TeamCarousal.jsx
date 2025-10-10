"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Virtual,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

import Image from "next/image";
import { team } from "@/data/team";

const TeamSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, Virtual]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="z-0"
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
      }}
      breakpoints={{
        640: { slidesPerView: 1 }, // When screen width <= 640px
        768: { slidesPerView: 2 }, // When screen width <= 768px
        1024: { slidesPerView: 3 }, // When screen width > 768px
      }}
    >
      {/* Render SwiperSlide for each team member */}
      {team.map((pro) => (
        <SwiperSlide
          key={pro.id}
          className="text-center font-Raleway flex flex-col justify-center items-center p-10 rounded-xl shadow-2xl"
        >
          <div className="flex justify-center items-center">
            <a href={pro?.link} target="_blank" rel="noreferrer">
              {/* Use Next.js Image for optimized loading */}
              <Image
                className="max-h-[300px] min-h-[200px] border border-black rounded-full"
                src={pro.image}
                alt={pro.name}
                width={200}
                height={200}
                priority // Optionally prioritize loading
              />
            </a>
          </div>
          <div className="pt-3 flex flex-col gap-1">
            <p className="text-3xl font-bold">{pro.name}</p>
            <p className="text-sm">Experience - {pro.exprience || "N/A"}</p>
            <p className="text-sm">{pro.desc || "No description available."}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
