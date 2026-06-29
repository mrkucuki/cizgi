import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Çizgi — whitewashed suites, the spa, the cove and the Aegean light in Fevziye, Ortaca.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Moments"
        title="Gallery"
        subtitle="White on white, light on water — wander through the suites, the spa and the cove."
        image="/gallery/cizgi7-new.png"
        imageAlt="Çizgi Hotel infinity pool at sunset overlooking the sea"
      />

      <section className="bg-chalk py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <LightboxGallery />
        </div>
      </section>
    </>
  );
}
