"use client"

import CollectionCarousel from './collection-carousel'
import CardProduct from './cards/cards-product'
import { GrandCollectionProducts } from '@/lib/data'

const SectionGrandCollectionProducts = () => {
  return (
    <CollectionCarousel
      title="See more of our latest stories"
      Card={CardProduct}
      items={GrandCollectionProducts}
      itemClassName="md:basis-1/5 flex flex-col items-center justify-center"
    />
  )
}

export default SectionGrandCollectionProducts