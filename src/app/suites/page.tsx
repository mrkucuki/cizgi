import type { Metadata } from "next";
import Image from "next/image";
import { BedDouble, Maximize, Eye, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { BlurFade } from "@/components/ui/blur-fade";
import { CtaBand } from "@/components/home/cta-band";
import { Mail } from "lucide-react";
import { suites } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rooms & Bungalows",
  description:
    "86 rooms, suites and farm bungalows at Çizgi Hotel — sea-view beds, private terraces and unique farm stays in Fevziye, Ortaca.",
};

export default function SuitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay"
        title="Rooms & Bungalows"
        subtitle="86 rooms designed for every kind of guest — sea-view rooms, comfortable standards, family suites and unique farm bungalow houses."
        image="/gallery/hotel-exterior.jpg"
        imageAlt="Çizgi Hotel main entrance with warm lighting and palm trees"
      />

      <div className="bg-chalk py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-5 sm:px-8 md:space-y-36">
          {suites.map((suite, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={suite.slug}
                id={suite.slug}
                className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {/* Image */}
                <div className={reversed ? "md:order-2" : ""}>
                  <BlurFade inView direction={reversed ? "left" : "right"}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(35,37,33,0.5)]">
                      <Image
                        src={suite.image}
                        alt={suite.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 48vw"
                        className="object-cover"
                      />
                    </div>
                  </BlurFade>
                </div>

                {/* Details */}
                <div className={reversed ? "md:order-1" : ""}>
                  <BlurFade inView delay={0.1}>
                    <p className="eyebrow">{suite.meaning}</p>
                    <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
                      {suite.name}
                    </h2>
                    <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                      {suite.details}
                    </p>

                    {/* Meta */}
                    <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink">
                      <span className="inline-flex items-center gap-2">
                        <BedDouble className="h-4 w-4 text-sea" /> {suite.sleeps}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Maximize className="h-4 w-4 text-sea" /> {suite.size}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Eye className="h-4 w-4 text-sea" /> {suite.view}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="mt-6 grid max-w-md grid-cols-2 gap-2.5">
                      {suite.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-ink-soft"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-clay" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                      <a
                        href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Enquiry — ${suite.name}`)}`}
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-chalk transition hover:bg-ink/90"
                      >
                        <Mail className="h-4 w-4" />
                        Enquire by Email
                      </a>
                    </div>
                  </BlurFade>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
