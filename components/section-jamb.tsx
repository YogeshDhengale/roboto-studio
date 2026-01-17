import React from 'react'
import SplitSection from './split-section'
import { Button } from './ui/button'

const SectionJAMB = () => {
  return (
   <SplitSection
      title="Subscribe to the Jamb Journal"
      description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim labore et dolore magn ad
            minim veniam."
      imageUrl="/images/image-jamb.png"
      buttons={
        <>
          <Button>Discover More</Button>
        </>
      }
    />
  )
}

export default SectionJAMB