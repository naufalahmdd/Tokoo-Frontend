"use client";

import { Button } from "@/components/ui/button";

type LocationListProps = {
  locations: string[];
  handleSetLocation: (loc: string) => void;
};

export default function LocationList(props: LocationListProps) {
  const { locations, handleSetLocation } = props;
  return (
    <ul className="flex flex-col">
      {locations.map((location, i) => (
        <li key={`${location}-${i}`}>
          <Button
            variant="ghost"
            type="button"
            name={`location-item-${i}`}
            id={`location-item-${i}`}
            className="justify-start w-full font-normal"
            onClick={() => handleSetLocation(location)}
          >
            {location}
          </Button>
        </li>
      ))}
    </ul>
  );
}
