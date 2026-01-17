"use client";

import CollectionCarousel from "./collection-carousel";
import CardProduct from "./cards/cards-product";
import { ChimneyProducts } from "@/lib/data";

const SectionChimneypieces = () => {
  return (
    <CollectionCarousel
      title={"Our latest chimneypieces"}
      items={ChimneyProducts}
      Card={CardProduct}
      itemClassName="md:basis-1/4"
    />
  );
};

export default SectionChimneypieces;
