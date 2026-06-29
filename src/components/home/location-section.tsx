import Image from "next/image";
import { Plane } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { CtaLink } from "@/components/site/cta";
import { StrokeDivider } from "@/components/site/icons";

export function LocationSection() {
  return (
    <section id="location" className="bg-sea-deep py-24 text-chalk md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-20">
        {/* Text */}
        <div>
          <BlurFade inView>
            <p className="eyebrow text-clay!">The setting</p>
          </BlurFade>
          <BlurFade inView delay={0.08}>
            <h2 className="mt-4 text-balance font-serif text-[2.1rem] leading-[1.1] text-chalk sm:text-4xl md:text-[2.9rem]">
              Ortaca, in its quietest key
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.16}>
            <p className="mt-6 max-w-md leading-relaxed text-chalk/75">
              Nestled in Fevziye, Ortaca, Çizgi Hotel looks out across the
              Muğla coast. Nature reserves, river deltas and ancient ruins
              are all minutes away, yet the hotel's private grounds — including
              the farm and beach club — give guests everything they need without
              ever leaving.
            </p>
          </BlurFade>

          <StrokeDivider className="mt-8 h-3 w-32 text-clay" />

          <BlurFade inView delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <CtaLink href="/contact" variant="light">
                Plan your stay
              </CtaLink>
              <span className="flex items-center gap-2 text-sm text-chalk/70">
                <Plane className="h-4 w-4" />
                10 min from Dalaman Airport (DLM)
              </span>
            </div>
          </BlurFade>
        </div>

        {/* Image */}
        <BlurFade inView delay={0.12}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)] md:aspect-[5/6]">
            <Image
              src="/gallery/infinity-pool.jpg"
              alt="Çizgi Hotel infinity pool overlooking the Aegean near Fevziye, Ortaca"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
            <span className="absolute bottom-5 left-5 rounded-full bg-ink/45 px-4 py-2 text-xs uppercase tracking-[0.2em] text-chalk backdrop-blur">
              Fevziye · Ortaca
            </span>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
