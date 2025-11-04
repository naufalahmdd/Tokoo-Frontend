"use client";

import BannerCarousel from "@/components/composites/Carousel/BannerCarousel";
import BaseCarousel from "@/components/composites/Carousel/BaseCarousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

const bannerImages = [
  "/banner-1.webp",
  "/banner-2.webp",
  "/banner-3.webp",
  "/banner-4.webp",
  "/banner-5.webp",
  "/banner-6.webp",
];

const Categories = [
  {
    title: "Fashion Wanita",
    img: "/fashion_wanita.webp",
  },
  {
    title: "Kendaraan",
    img: "/kendaraan.webp",
  },
  {
    title: "Handphone & Tablet",
    img: "/handphone_tablet.webp",
  },
  {
    title: "Kecantikan",
    img: "/kecantikan.webp",
  },
  {
    title: "Kesehatan",
    img: "/kesehatan.webp",
  },
  {
    title: "Elektronik",
    img: "/elektronik.webp",
  },
  {
    title: "Rumah Tangga",
    img: "/rumah_tangga.webp",
  },
  {
    title: "Mainan & Hobi",
    img: "/mainan_hobi.webp",
  },
  {
    title: "Properti",
    img: "/properti.webp",
  },
];

export default function HomeView() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-[5%] my-14 pt-10 lg:pt-24">
      {/* Banner Carousel */}
      <BannerCarousel images={bannerImages} />
      {/* Categories Section */}
      <section className="flex items-center w-full lg:mt-10">
        <ul className="flex items-center gap-6 lg:gap-14 overflow-auto py-8">
          {Categories.map((category) => (
            <Link key={category.title} href="/">
              <li className="flex flex-col gap-2 items-center">
                <Image
                  src={category.img}
                  alt={category.title}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <p className="text-center text-xs font-medium">
                  {category.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      {/* Dipilih Untuk mu */}
      <section className="flex flex-col gap-8 w-full lg:mt-14">
        <h3 className="lg:text-3xl">
          Dipilih Khusus <span className="font-bold">Untukmu</span>
        </h3>
      </section>
    </main>
  );
}
