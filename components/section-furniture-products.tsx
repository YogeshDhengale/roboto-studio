"use client"

import CollectionCarousel from './collection-carousel'
import CardProduct from './cards/cards-product'
import { Furniture } from '@/lib/data'

const SectionFurnitureProducts = () => {
  return (
    <CollectionCarousel
      title="Our latest lighting"
      Card={CardProduct}
      items={Furniture}
      itemClassName="md:basis-1/5 flex flex-col items-center justify-center"
    />
  )
}

export default SectionFurnitureProducts