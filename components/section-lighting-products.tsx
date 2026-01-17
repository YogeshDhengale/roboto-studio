"use client";

import CollectionCarousel from "./collection-carousel";
import CardProduct from "./cards/cards-product";
import { LightingProducts } from "@/lib/data";

const SectionLightingProducts = () => {
  return (
    <CollectionCarousel
      title="Our latest lighting"
      Card={CardProduct}
      items={LightingProducts}
      itemClassName="md:basis-1/5"
    />
  );
};

export default SectionLightingProducts;
