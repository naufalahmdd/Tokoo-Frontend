"use client";

import Link from "next/link";
import SearchBarProducts from "@/components/composites/Navbar/SearchBarProducts";
import DropdownLocations from "@/components/composites/Navbar/DropdownLocations";
import AuthButton from "@/components/composites/Navbar/AuthButton";
import NavbarMenuItemsMobile from "./NavbarMenuItemsMobile";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

const locations = [
  "DKI Jakarta",
  "Bandung",
  "Bogor",
  "Bekasi",
  "Tangerang",
  "Denpasar",
  "DI Yogyakarta",
];

export default function NavbarActions() {
  return (
    <div className="flex justify-between gap-5 items-center w-full">
      <div className="flex items-center gap-2 lg:gap-8 w-full">
        <div className="flex items-center">
          <NavbarMenuItemsMobile locations={locations} />
          <Link
            href="/"
            className="hidden lg:inline-block font-semibold text-2xl"
          >
            Tokoo
          </Link>
        </div>

        <div className="flex items-center gap-5 w-full">
          <DropdownLocations locations={locations} />
          <SearchBarProducts />
        </div>

        <Button
          asChild
          variant="outline"
          type="button"
          name="login-mobile-trigger"
          id="login-mobile-trigger"
          className="lg:hidden"
        >
          <Link href="/login">
            <UserRound />
          </Link>
        </Button>
      </div>

      <div className="flex items-center">
        <AuthButton />
      </div>
    </div>
  );
}
