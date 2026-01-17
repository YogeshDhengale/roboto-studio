import React from 'react'
import SplitSection from './split-section'
import { Button } from './ui/button'

const SectionGrandCollection = () => {
  return (
    <SplitSection
    className='bg-secondary'
    subTitle='JOURNAL'
      title="The Grand Collection"
      description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim labore et dolore magn ad
            minim veniam."
      imageUrl="/images/image-collection.png"
      buttons={
        <>
          <Button>Discover More</Button>
        </>
      }
    />
  )
}

export default SectionGrandCollection