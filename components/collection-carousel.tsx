"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";
import { InView } from "./ui/in-view";

type CollectionCarouselProps<T extends object> = {
  title: string;
  items: T[];
  Card: React.ComponentType<T>;
  itemClassName?: string;
  className?: string;
};

const CollectionCarousel = <T extends object>({
  title,
  items,
  Card,
  itemClassName,
  className,
}: CollectionCarouselProps<T>) => {
  return (
    <section
      aria-label={title}
      className={cn("px-5 py-10 space-y-8 bg-primary", className)}
    >
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        once
      >
        <h2 className="text-center text-xl font-medium">{title}</h2>
        <Carousel
          opts={{
            loop: true, // ✅ REQUIRED for infinite scroll
            align: "start",
          }}
          plugins={[
            AutoScroll({
              playOnInit: true, // ✅ start automatically
              speed: 2, // ✅ recommended range: 1–5
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className={itemClassName}>
                <Card {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </InView>
    </section>
  );
};

export default CollectionCarousel;
