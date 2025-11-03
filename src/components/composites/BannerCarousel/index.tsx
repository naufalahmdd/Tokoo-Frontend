"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavigationOptions } from "swiper/types";

import CarouselButton from "./CarouselButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type BannerCarouselProps = {
  images: string[];
};

export default function BannerCarousel({ images }: BannerCarouselProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative w-full mx-auto px-[5%] lg:max-w-340 group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          800: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          if (prevRef.current && nextRef.current) {
            const nav = swiper.params.navigation as NavigationOptions;
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        className="w-full"
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <Image
              src={src}
              alt="Banner"
              width={500}
              height={256}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CarouselButton ref={prevRef} className="left-10">
        <ChevronLeft />
      </CarouselButton>
      <CarouselButton ref={nextRef} className="right-10">
        <ChevronRight />
      </CarouselButton>
    </div>
  );
}
