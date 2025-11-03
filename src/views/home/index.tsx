"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Di component atau _app.tsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const bannerImages = [
  "/banner-1.webp",
  "/banner-2.webp",
  "/banner-3.webp",
  "/banner-4.webp",
  "/banner-5.webp",
  "/banner-6.webp",
];

export default function HomeView() {
  return (
    <main className="w-full max-w-[1440px] mx-auto my-14 pt-10 lg:pt-24">
      {/* Banner Carousel */}
      <div className="w-full mx-auto px-[5%] lg:max-w-7xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          // slidesPerView={2.5}
          spaceBetween={20}
          centeredSlides={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            800: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 }
          }}
          // style={{ overflow: "visible" }}
          className="w-full"
        >
          {bannerImages.map((banner) => (
            <SwiperSlide key={banner}>
              <Image src={banner} alt="Banner" width={500} height={256}  className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
