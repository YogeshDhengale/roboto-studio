import React from "react";
import SplitSection from "./split-section";
import { Button } from "./ui/button";

const SectionFurniture = () => {
  return (
    <SplitSection
      title="Furniture"
      description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim labore et dolore magn ad
            minim veniam."
      imageUrl="/images/image-furniture.png"
      buttons={
        <>
          <Button>Explore our Furniture</Button>
        </>
      }
    />
  );
};

export default SectionFurniture;
