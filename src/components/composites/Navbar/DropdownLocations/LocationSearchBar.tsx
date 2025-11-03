"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

export default function LocationSearchBar({className}: {
  className?: string;
}) {
  return (
    <form className={`relative flex items-center ${className}`}>
      <Label className="block w-full">
        <Input
          type="text"
          name="search-locations"
          id="search-locations"
          placeholder="Cari Lokasi"
          className="ps-11 h-11"
        />
      </Label>
      <Button
        variant="ghost"
        size="icon"
        type="submit"
        name="search-locations-trigger"
        id="search-locations-trigger"
        className="absolute left-1"
      >
        <Search />
      </Button>
    </form>
  );
}
