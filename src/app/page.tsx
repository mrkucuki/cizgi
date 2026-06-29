import { Hero } from "@/components/home/hero";
import { IntroStory } from "@/components/home/intro-story";
import { SuitesCarousel } from "@/components/home/suites-carousel";
import { ExperiencesSection } from "@/components/home/experiences-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { LocationSection } from "@/components/home/location-section";
import { CtaBand } from "@/components/home/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStory />
      <SuitesCarousel />
      <ExperiencesSection />
      <GalleryPreview />
      <LocationSection />
      <CtaBand />
    </>
  );
}
