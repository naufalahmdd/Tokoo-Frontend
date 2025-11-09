"use client";

import Image from "next/image";
import Link from "next/link";
import BannerCarousel from "@/components/composites/Carousel/BannerCarousel";
import ProductCarousel from "@/components/composites/Carousel/ProductCarousel";

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

const recomendationProducts = [
  {
    id: 1,
    title: "Iphone 12",
    city: "Kota Jakrta Barat",
    stock: 1,
    price: 3_999_000,
    img: "/iphone-product.webp",
  },
  {
    id: 2,
    title: "Macbook Pro M4 Pro",
    city: "Kota Bandung",
    stock: 1,
    price: 26_500_000,
    img: "/iphone-product.webp",
  },
  {
    id: 3,
    title: "Macbook Pro M4 Pro",
    city: "Kota Bandung",
    stock: 1,
    price: 26_500_000,
    img: "/iphone-product.webp",
  },
  {
    id: 4,
    title: "Macbook Pro M4 Pro",
    city: "Kota Bandung",
    stock: 1,
    price: 26_500_000,
    img: "/iphone-product.webp",
  },
  {
    id: 5,
    title: "Macbook Pro M4 Pro",
    city: "Kota Bandung",
    stock: 1,
    price: 26_500_000,
    img: "/iphone-product.webp",
  },
  {
    id: 6,
    title: "Macbook Pro M4 Pro",
    city: "Kota Bandung",
    stock: 1,
    price: 26_500_000,
    img: "/iphone-product.webp",
  },
];

const vouchers = [
  {
    title: "Gratis Ongkir",
    expedition: "J&T",
  },
  {
    title: "Gratis Ongkir",
    expedition: "SiCepat",
  },
  {
    title: "Gratis Ongkir",
    expedition: "JNE",
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
      <section className="flex flex-col gap-8 lg:gap-10 w-full mt-7 lg:mt-14">
        <h3 className="text-2xl lg:text-3xl">
          Dipilih Khusus <span className="font-bold">Untukmu</span>
        </h3>
        <ProductCarousel recomendationProducts={recomendationProducts} />
      </section>
      {/* Pendatang Baru */}
      <section className="flex flex-col gap-8 lg:gap-10 w-full mt-7 lg:mt-14">
        <h3 className="text-2xl lg:text-3xl">
          Pendatang <span className="font-bold">Baru</span>
        </h3>
        <ProductCarousel recomendationProducts={recomendationProducts} />
      </section>
      {/* Dari Mata ke Hati */}
      <section className="flex flex-col gap-8 lg:gap-10 w-full mt-7 lg:mt-14">
        <h3 className="text-2xl font-bold lg:text-3xl">
          Dari Mata <span className="font-normal">ke Hati</span>
        </h3>
        <ul className="flex items-center gap-8">
          <Link href="" className="">
            <li className="flex flex-col items-center gap-3">
              <Image
                src="/tren_terkini.webp"
                alt="tren terkini"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="text-center text-xs md:text-sm font-medium">
                Tren terkini
              </p>
            </li>
          </Link>
          <Link href="" className="">
            <li className="flex flex-col items-center gap-3">
              <Image
                src="/upgrade_gadget.webp"
                alt="Upgrade Gadget"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="text-center text-xs md:text-sm font-medium">
                Upgrade Gadget
              </p>
            </li>
          </Link>
          <Link href="" className="">
            <li className="flex flex-col items-center gap-3">
              <Image
                src="/mobil_bekas.webp"
                alt="Mobil Bekas"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="text-center text-xs md:text-sm font-medium">
                Mobil Bekas
              </p>
            </li>
          </Link>
          <Link href="" className="">
            <li className="flex flex-col items-center gap-3">
              <Image
                src="/hunian_impian.webp"
                alt="Hunian Impian"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="text-center text-xs md:text-sm font-medium">
                Property
              </p>
            </li>
          </Link>
        </ul>
      </section>
      <section className="flex flex-col gap-8 lg:gap-10 w-full mt-10 lg:mt-14">
        <h3 className="text-2xl lg:text-3xl">
          Buruan Klaim <span className="font-bold">Promonya!</span>
        </h3>
        <ul className="flex items-center gap-4 overflow-auto py-4">
          {vouchers.map((voucher) => (
            <li
              key={voucher.expedition}
              className="cursor-pointer w-full max-w-sm border border-dashed border-yellow-400 bg-yellow-100 rounded-lg p-2"
            >
              <div className="flex items-center gap-3 w-sm">
                <Image
                  src="/free-shipping.svg"
                  alt="Ilustration Free Shipping"
                  width={120}
                  height={120}
                  className=""
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-yellow-950">November Hemat dengan {voucher.expedition}</p>
                  <span className="text-lg font-bold">{voucher.title}</span>
                  <p className="text-xs text-yellow-400">s/d 09 NOv 2025</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
