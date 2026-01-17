import Image from "next/image";
import React from "react";

const SectionHero = () => {
  return (
    <section aria-label="hero-section" className="container mx-auto">
      <Image
        src="/images/image-hero-section.png"
        alt="hero-section"
        width={1436}
        height={768}
        quality={100}
        className="w-full"
      />
      <h1 className="w-full text-base text-center py-2 text-muted-foreground tracking-wide">Fireplaces  |  Lighting  | Furniture  |  Journal</h1>
    </section>
  );
};

export default SectionHero;
