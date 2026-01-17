import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import SectionChimneypieces from "@/components/section-chimneypieces";
import SectionFireplaces from "@/components/section-fireplaces";
import SectionFurniture from "@/components/section-furniture";
import SectionFurnitureProducts from "@/components/section-furniture-products";
import SectionGrandCollection from "@/components/section-grand-collection";
import SectionGrandCollectionProducts from "@/components/section-grand-collection-products";
import SectionHero from "@/components/section-hero";
import SectionJAMB from "@/components/section-jamb";
import SectionLighting from "@/components/section-lighting";
import SectionLightingProducts from "@/components/section-lighting-products";

export default function Home() {
  return (
    <div className="bg-background overflow-y-auto w-screen h-screen relative">
      <NavBar />
      <main>
        <SectionHero />
        <SectionFireplaces />
        <SectionLighting />
        <SectionChimneypieces />
        <SectionLightingProducts />
        <SectionFurniture />
        <SectionFurnitureProducts />
        <SectionGrandCollection />
        <SectionGrandCollectionProducts />
        <SectionJAMB />
      </main>
      <Footer />
    </div>
  );
}
