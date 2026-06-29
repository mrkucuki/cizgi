import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Scale, TreePine, Sun } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { CtaBand } from "@/components/home/cta-band";
import { CtaLink } from "@/components/site/cta";

export const metadata: Metadata = {
  title: "The Farm",
  description:
    "Çizgi Farm — where modern techniques meet traditional wisdom. Free-roaming animals, natural feeding and sustainable land care on the Muğla coast.",
};

const features = [
  {
    icon: Leaf,
    title: "Natural Feeding",
    description:
      "Every animal on the farm is raised on a natural diet — no additives, no shortcuts. Fresh grass, seasonal grains and clean water from our own wells.",
  },
  {
    icon: Scale,
    title: "Wildlife Balance",
    description:
      "We manage the land with the ecosystem in mind, preserving native plants and creating corridors that support the natural wildlife of the Muğla coast.",
  },
  {
    icon: TreePine,
    title: "Sustainable Land Care",
    description:
      "From composting to water conservation, every practice on the farm is designed to leave the land better than we found it — season after season.",
  },
  {
    icon: Sun,
    title: "Open-Air Life",
    description:
      "Our animals roam freely across open pastures from sunrise to sunset. Space, sunlight and fresh air are not extras here — they are the foundation.",
  },
];

export default function FarmPage() {
  return (
    <>
      <PageHero
        eyebrow="Rural Nature Experience"
        title="In the Heart of Natural Life"
        subtitle="Where modern techniques and traditional wisdom come together — Çizgi Farm brings a rare piece of countryside to the Muğla coast."
        image="/gallery/cizgifarm.png"
        imageAlt="Çizgi Farm green fields at golden hour"
      />

      {/* Philosophy */}
      <section className="bg-chalk py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-20">
          {/* Text */}
          <div>
            <BlurFade inView>
              <p className="eyebrow">Our Philosophy</p>
            </BlurFade>
            <BlurFade inView delay={0.08}>
              <h2 className="mt-4 text-balance font-serif text-[2.2rem] leading-[1.1] text-ink sm:text-4xl md:text-[2.9rem]">
                Sustainability is not a choice —
                <span className="italic text-sea"> it is a way of life.</span>
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.16}>
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                At Çizgi Farm, we believe that caring for the land and the
                animals on it is not a trend — it is a responsibility. Every
                decision we make, from what we grow to how we graze, is guided
                by a simple principle: do more good than harm.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.22}>
              <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                Livestock roam freely, crops are grown without synthetic
                chemicals and water is managed with care. The farm is not just
                a feature of Çizgi Hotel — it is the heart of what makes this
                place different.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="mt-9">
                <CtaLink href="/experiences" variant="outlineDark">
                  Discover all experiences
                </CtaLink>
              </div>
            </BlurFade>
          </div>

          {/* Image */}
          <BlurFade inView delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(35,37,33,0.45)]">
              <Image
                src="/gallery/cizgifarm.png"
                alt="Çizgi Farm green fields at golden hour with farmhouse"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Livestock & Features */}
      <section className="bg-chalk-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Livestock & Animal Husbandry"
            title="Free-roaming animals, honest farming"
            subtitle="The animals at Çizgi are raised with space, care and respect — a different kind of farming that you can see and feel."
          />

          {/* Image + cards grid */}
          <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
            {/* Main image with overlay label */}
            <BlurFade inView direction="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(35,37,33,0.5)]">
                <Image
                  src="/gallery/cizgifarm2.png"
                  alt="Çizgi Farm free-roaming cattle in open pasture"
                  fill
                  sizes="(max-width: 768px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-ink/75 px-5 py-3 backdrop-blur-sm">
                  <p className="font-serif text-lg text-chalk">
                    Free-Roaming Animals
                  </p>
                  <p className="mt-0.5 text-xs tracking-wide text-chalk/70">
                    Open pasture · natural grazing
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* Feature cards */}
            <div className="flex flex-col gap-5">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <BlurFade key={feature.title} inView delay={i * 0.08}>
                    <div className="rounded-2xl bg-chalk p-6 shadow-[0_4px_24px_-8px_rgba(35,37,33,0.12)]">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sea/10">
                          <Icon className="h-5 w-5 text-sea" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg text-ink">
                            {feature.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Farm Bungalows teaser */}
      <section className="bg-chalk py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-20">
          {/* Image */}
          <BlurFade inView direction="right">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(35,37,33,0.45)]">
              <Image
                src="/gallery/farm-bungalow.jpg"
                alt="Çizgi Farm Bungalow with private pool surrounded by palm trees at dusk"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </BlurFade>

          {/* Text */}
          <div>
            <BlurFade inView delay={0.1}>
              <p className="eyebrow">Stay on the farm</p>
              <h2 className="mt-4 text-balance font-serif text-[2.2rem] leading-[1.1] text-ink sm:text-4xl md:text-[2.9rem]">
                Wake up surrounded by nature.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                Our Farm Bungalows offer a one-of-a-kind stay right in the
                middle of the countryside setting. Wake up to birdsong, step
                outside to greet the animals and spend your mornings in the
                kind of quiet that only nature can give.
              </p>
              <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                Each bungalow has a private terrace, king bed and direct
                access to the farm grounds — a completely different side of
                Ortaca that most guests never discover.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <CtaLink href="/suites#farm-bungalow" variant="solid">
                  View Farm Bungalow
                </CtaLink>
                <CtaLink href="/experiences" variant="outlineDark">
                  All experiences
                </CtaLink>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
