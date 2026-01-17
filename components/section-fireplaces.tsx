import React from "react";
import { Button } from "./ui/button";
import SplitSection from "./split-section";

const SectionFireplaces = () => {
  return (
    <SplitSection
      title="Fireplaces"
      description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim labore et dolore magn ad
            minim veniam."
      imageUrl="/images/image-fireplaces.png"
      buttons={
        <>
          <Button>Explore our Fireplaces</Button>
          <Button>Sell an Antique Chimneypiece</Button>
        </>
      }
    />
  );
};

export default SectionFireplaces;
