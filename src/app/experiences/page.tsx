import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { FocusCards } from "@/components/ui/focus-cards";
import { CtaBand } from "@/components/home/cta-band";
import { experiences } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "The spa, the infinity pool, the beach club, fine dining and a unique farm — the experiences that define a stay at Çizgi Hotel, Ortaca.",
};

const focusCards = [
  { title: "Spa & Wellness", src: "/gallery/spa-wellness.jpg" },
  { title: "Infinity Pool", src: "/gallery/infinity-pool.jpg" },
  { title: "A'la Carte Restaurant", src: "/gallery/restaurant-alacarte.jpg" },
  { title: "Beach Club & Bar", src: "/gallery/beach-club.jpg" },
  { title: "Main Restaurant", src: "/gallery/restaurant-main.jpg" },
  { title: "Fitness Center", src: "/gallery/fitness-center.jpg" },
];

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Çizgi day"
        title="Experiences"
        subtitle="From a morning at the farm to an evening at the a'la carte restaurant — every moment at Çizgi is designed to be remembered."
        image="/gallery/spa-wellness.jpg"
        imageAlt="Çizgi Hotel spa and wellness room"
      />

      {/* At a glance — Aceternity Focus Cards */}
      <section className="bg-chalk py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="At Çizgi Hotel"
            title="Everything, a few steps from your door"
          />
          <div className="mt-14">
            <FocusCards cards={focusCards} />
          </div>
        </div>
      </section>

      {/* Editorial rows */}
      <section className="bg-chalk-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-5 sm:px-8 md:space-y-32">
          {experiences.map((exp, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={exp.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={reversed ? "md:order-2" : ""}>
                  <BlurFade inView direction={reversed ? "left" : "right"}>
                    <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(35,37,33,0.5)]">
                      <Image
                        src={exp.src}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 48vw"
                        className="object-cover"
                      />
                    </div>
                  </BlurFade>
                </div>
                <div className={reversed ? "md:order-1" : ""}>
                  <BlurFade inView delay={0.1}>
                    <p className="eyebrow">{exp.kicker}</p>
                    <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
                      {exp.title}
                    </h2>
                    <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                      {exp.description}
                    </p>
                  </BlurFade>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
