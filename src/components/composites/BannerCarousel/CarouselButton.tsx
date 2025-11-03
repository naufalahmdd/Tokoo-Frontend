"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/button";

type CarouselButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const CarouselButton = forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ children, className }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        size="icon-lg"
        className={`absolute top-1/2 z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${className}`}
      >
        {children}
      </Button>
    );
  }
);

CarouselButton.displayName = "CarouselButton";

export default CarouselButton;
