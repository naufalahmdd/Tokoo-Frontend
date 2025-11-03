"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

type CategorySubItemsProps = {
  categoryTitle: string;
  items: string[];
};

export default function CategorySubItems({
  categoryItems,
}: {
  categoryItems: CategorySubItemsProps[];
}) {
  return (
    <ScrollArea className="w-full h-[60vh] p-5">
      <h6 className="flex items-center gap-3 text-2xl font-bold">
        Jasa <ChevronRight />
      </h6>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="grid grid-cols-3 gap-6 w-full mt-5"
      >
        {categoryItems.map((categoryItem, i) => (
          <AccordionItem
            key={`${categoryItem.categoryTitle}-${i}`}
            value={`item-${i + 1}`}
          >
            <AccordionTrigger>{categoryItem.categoryTitle}</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-3">
                {categoryItem.items.map((item, i) => (
                  <li key={`${item}-${i}`} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollArea>
  );
}
