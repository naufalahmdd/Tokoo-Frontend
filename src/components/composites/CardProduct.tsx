"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

type CardProductProps = {
  title: string;
  city: string;
  stock: number;
  price: number;
  img: string;
};

export default function CardProduct(props: CardProductProps) {
  const { title, city, stock, price, img } = props;
  return (
    <Card className="w-full max-w-xs h-auto gap-2 p-0 border-none shadow-none overflow-hidden">
      <div>
        <Image
          src={img}
          alt={title}
          width={250}
          height={250}
          className="rounded-2xl"
        />
        <CardDescription className="sr-only">
          This is a product card for {title}
        </CardDescription>
      </div>
      <CardContent className="flex flex-col gap-2 p-0">
        <span className="text-red-500 text-sm font-medium">Sisa {stock}</span>
        <span className="text-sm text-muted-foreground">{city}</span>
        <CardTitle className="font-medium">{title}</CardTitle>
        <span className="text-red-500 font-semibold">Rp {price}</span>
      </CardContent>
    </Card>
  );
}
