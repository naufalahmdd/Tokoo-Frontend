"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function CategoryItems({
  categories,
}: {
  categories: string[];
}) {
  return (
    <ScrollArea className="w-full h-[60vh] p-5">
      <ul className="flex flex-col gap-2">
        {categories.map((category, i) => (
          <li key={category}>
            <Button
              variant="ghost"
              type="button"
              name={`category-${i}`}
              id={`category-${i}`}
              className="w-full justify-start font-normal"
            >
              {category}
            </Button>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
