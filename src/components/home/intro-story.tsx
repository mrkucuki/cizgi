import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { CtaLink } from "@/components/site/cta";
import { StrokeDivider } from "@/components/site/icons";
import { stats } from "@/lib/content";

export function IntroStory() {
  return (
    <section id="story" className="scroll-mt-20 bg-chalk py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-20">
        {/* Text */}
        <div className="order-2 md:order-1">
          <BlurFade inView>
            <p className="eyebrow">Welcome to Çizgi</p>
          </BlurFade>
          <BlurFade inView delay={0.08}>
            <h2 className="mt-4 text-balance font-serif text-[2.2rem] leading-[1.1] text-ink sm:text-4xl md:text-[2.9rem]">
              Where the coast meets
              <span className="italic text-sea"> the countryside.</span>
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.16}>
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
              Çizgi is a hotel in Fevziye, Ortaca offering 86 rooms,
              a private beach club, a full-service spa and two restaurants. Whether
              you come for the sea or the silence, everything here is designed for
              the best possible stay.
            </p>
          </BlurFade>
          <BlurFade inView delay={0.22}>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              What makes Çizgi truly unique is our farm — a living, breathing piece
              of countryside right on the property. Stay in a bungalow house, meet
              the animals, and experience a side of Ortaca that most hotels cannot offer.
            </p>
          </BlurFade>
          <BlurFade inView delay={0.3}>
            <div className="mt-9">
              <CtaLink href="/experiences" variant="outlineDark">
                Discover the experience
              </CtaLink>
            </div>
          </BlurFade>
        </div>

        {/* Image composition */}
        <div className="order-1 md:order-2">
          <BlurFade inView delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(35,37,33,0.45)]">
                <Image
                  src="/gallery/hotel-entrance.png"
                  alt="Çizgi Hotel main entrance with warm lighting and palm trees"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Overlapping accent image */}
              <div className="absolute -bottom-8 -left-6 hidden h-44 w-36 overflow-hidden rounded-2xl border-4 border-chalk shadow-xl sm:block lg:h-52 lg:w-44">
                <Image
                  src="/gallery/reception.jpg"
                  alt="Çizgi Hotel entrance at night with warm lighting"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <StrokeDivider className="absolute -right-3 -top-6 h-3 w-28 text-clay" />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Stats band */}
      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8 md:mt-28">
        <BlurFade inView>
          <dl className="grid grid-cols-2 gap-y-10 border-y border-border py-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-serif text-4xl text-ink md:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </BlurFade>
      </div>
    </section>
  );
}
