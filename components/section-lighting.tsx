import { Button } from "./ui/button";
import SplitSection from "./split-section";

const SectionLighting = () => {
  return (
    <SplitSection
      title="Lighting"
      description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim labore et dolore magn ad
            minim veniam."
      imageUrl="/images/image-lighting.png"
      buttons={
        <>
          <Button>Explore our Lighting</Button>
        </>
      }
    />
  );
};

export default SectionLighting;
