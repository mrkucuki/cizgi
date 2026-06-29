import Image from "next/image";
import { Mail } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden py-28 text-chalk md:py-40">
      <Image
        src="/gallery/cizgi7.png"
        alt="Çizgi Hotel infinity pool at sunset overlooking the sea"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/75" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <BlurFade inView>
          <p className="eyebrow text-clay!">Reservations open · Summer 2026</p>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.08] text-chalk md:text-6xl">
            Your Ortaca escape begins here
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-chalk/80">
            Rooms are limited and the season fills fast. Email us and our
            concierge will arrange your perfect stay — from airport transfer to
            dinner reservations and farm visits.
          </p>
        </BlurFade>
        <BlurFade inView delay={0.26}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${site.contact.email}`}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-chalk px-8 py-4 text-sm font-medium tracking-wide text-ink transition-transform duration-300 hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4 text-ink" />
              Reserve by Email
              <BorderBeam
                size={120}
                duration={8}
                borderWidth={2}
                colorFrom="#2c6e89"
                colorTo="#bc8a6b"
              />
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
