"use client";

import { useRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperOptions } from "swiper/types";
import { NavigationOptions } from "swiper/types";
import CarouselButton from "./CarouselButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BaseCarouselProps = {
  children: React.ReactNode;
  autoplay?: boolean;
  pagination?: boolean;
  loop?: boolean;
  spaceBetween?: number;
  centeredSlides?: boolean;
  breakpoints?: SwiperOptions["breakpoints"];
  className?: string;
};

export default function BaseCarousel(props: BaseCarouselProps) {
  const {
    children,
    autoplay = true,
    pagination = true,
    loop = true,
    spaceBetween = 16,
    centeredSlides = false,
    breakpoints,
    className = "",
  } = props;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className={`relative w-full mx-auto group ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={pagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 5000 } : false}
        loop={loop}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        breakpoints={breakpoints}
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
        {children}
      </Swiper>

      <CarouselButton
        ref={prevRef}
        className="left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft />
      </CarouselButton>
      <CarouselButton
        ref={nextRef}
        className="right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight />
      </CarouselButton>
    </div>
  );
}
