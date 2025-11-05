"use client";

import { SwiperSlide } from "swiper/react";
import BaseCarousel from "./BaseCarousel";
import CardProduct from "../CardProduct";

type RecomendationProductsProps = {
  id: number;
  title: string;
  city: string;
  stock: number;
  price: number;
  img: string;
};

export default function ProductCarousel({
  recomendationProducts,
}: {
  recomendationProducts: RecomendationProductsProps[];
}) {
  return (
    <BaseCarousel
      pagination={false}
      autoplay={false}
      loop={false}
      spaceBetween={20}
      centeredSlides={false}
      breakpoints={{
        0: { slidesPerView: 2 },
        800: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      className="w-full"
    >
      {recomendationProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <CardProduct
            title={product.title}
            city={product.city}
            stock={product.stock}
            price={product.price}
            img={product.img}
          />
        </SwiperSlide>
      ))}
    </BaseCarousel>
  );
}
