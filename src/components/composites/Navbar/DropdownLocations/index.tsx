"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LocationList from "./LocationList";
import LocationSearchBar from "./LocationSearchBar";
import CurrentLocation from "./CurrentLocation";
import { MapPin } from "lucide-react";

export default function DropdownLocations({locations}: {
  locations: string[]
}) {
  const [location, setLocation] = useState<string>("Bandung")
  const [open, setOpen] = useState<boolean>(false)

  const handleSetLocation = (loc: string) => {
    setLocation(loc)
    setOpen(false)
  }

  return (
    <div className="hidden lg:block">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            type="button"
            name="dropdown-location-trigger"
            id="dropdown-location-trigger"
            className="justify-start h-11 w-36"
          >
            <MapPin /> {location}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="flex flex-col gap-3 w-60 p-3"
        >
          <DropdownMenuLabel className="sr-only">
            Dropdown Locations
          </DropdownMenuLabel>
          <LocationSearchBar />
          <LocationList locations={locations} handleSetLocation={handleSetLocation} />
          <DropdownMenuSeparator />
          <CurrentLocation />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
