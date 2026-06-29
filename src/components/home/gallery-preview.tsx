import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaLink } from "@/components/site/cta";

const preview = [
  { src: "/gallery/hotel-exterior.jpg", alt: "Çizgi Hotel main entrance and facade" },
  { src: "/gallery/infinity-pool.jpg", alt: "Infinity pool overlooking the sea at sunset" },
  { src: "/gallery/restaurant-alacarte.jpg", alt: "Outdoor a'la carte restaurant at sunset" },
  { src: "/gallery/beach-club.jpg", alt: "Beach club with sunbeds and private cabanas" },
  { src: "/gallery/spa-wellness.jpg", alt: "Spa and wellness room with massage beds" },
  { src: "/gallery/reception.jpg", alt: "Çizgi Hotel entrance at night" },
];

export function GalleryPreview() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-chalk-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A portrait of Çizgi"
          subtitle="A glimpse of the hotel, beach club, spa, restaurants and everything in between."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {preview.map((img, i) => (
            <BlurFade key={img.src} inView delay={i * 0.06}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
              </figure>
            </BlurFade>
          ))}
        </div>

        <BlurFade inView>
          <div className="mt-12 text-center">
            <CtaLink href="/gallery" variant="outlineDark">
              View full gallery
            </CtaLink>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
