"use client";

import BannerCarousel from "@/components/composites/BannerCarousel";

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
      <div className="relative w-full mx-auto px-[5%] lg:max-w-340 group">
        <BannerCarousel images={bannerImages} />
      </div>
    </main>
  );
}
