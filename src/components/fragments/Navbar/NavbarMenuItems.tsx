"use client";

import CategoryMenuItems from "@/components/composites/Navbar/CategoryMenuItems";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

const categories = [
  "Jasa",
  "Kendaraan",
  "Buku",
  "Perlengkapan Pesta & Craft",
  "Fashion Pria",
  "Gaming",
  "Kesehatan",
  "Film & Music",
  "Kecantikan",
  "Rumah Tangga",
  "Fashion Muslim",
  "Ibu & Bayi",
  "Elektronik",
  "Office & Stationery",
  "Handphone & Tablet",
  "Pertukangan",
  "Otomotif",
];

const categoryItems = [
  {
    categoryTitle: "Jasa Perumahan & Property",
    items: [
      "Jasa Relokasi",
      "Agen Real Estate",
      "Arsitek dan Disainer Interior",
      "Perawatan dan Perbaikan Rumah",
      "Kontraktor Bangunan",
      "Cleaning Service",
      "Manajemen Property",
    ],
  },
  {
    categoryTitle: "Jasa Hukum & Legal",
    items: [
      "Konsultasi Hukum dan Keluarga",
      "Notaris",
      "Konsultan Hak Kekayaan Intelektual",
      "Jasa Perizinan",
      "Pengacara dan Advokat",
      "Mediator dan Arbiter",
      "Jasa Penyusunan Kontrak",
    ],
  },
  {
    categoryTitle: "Jasa Perawatan Pribadi",
    items: [
      "Spa dan Pusat Kecantikan",
      "Manicure dan Pedicure",
      "Salon dan Barbershop",
      "Personal Trainer",
      "Yoga dan Pilates Instructor",
      "Perawatan Hewan Peliharaan",
      "Terapi Pijat",
    ],
  },
  {
    categoryTitle: "Jasa Teknologi Informasi",
    items: [
      "IT Support dan Networking",
      "Pengembangan Software dan Aplikasi",
      "Web Development dan Desain",
      "Jasa SEO dan Digital Marketing",
      "Konsultan IT",
      "Penyedia Jasa Internet (ISP)",
      "Keamanan Cyber",
    ],
  },
];

const productsFeatured = [
  "Kameja",
  "Celana Kulot",
  "Iphone",
  "Lampu Tidur"
]

export default function NavbarMenuItems() {
  return (
    <div className="hidden lg:flex justify-between items-center w-full">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="gap-2">
                <LayoutGrid className="w-4 h-4" /> Semua Kategori
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <CategoryMenuItems
                  categories={categories}
                  categoryItems={categoryItems}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={`${navigationMenuTriggerStyle()}`}
            >
              <Link href="/" className="flex items-center gap-2 underline">
                Tokoo Classified
                <p className="text-[0.6rem] font-bold py-1 px-2 bg-primary text-white rounded-full underline-none">
                  Iklan Baris
                </p>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className={`${navigationMenuTriggerStyle()}`}>
              <NavigationMenuLink asChild>
                <Link href="/" className="underline">Tokoo Seller</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={`${navigationMenuTriggerStyle()}`}>
              <NavigationMenuLink asChild>
                <Link href="/" className="underline">Artikel</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden xl:block">
        <ul className="flex items-center gap-5">
          {productsFeatured.map(product => (
            <Link key={product} href="/">
              <li className="text-sm font-normal">
                {product}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
