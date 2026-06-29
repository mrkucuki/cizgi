import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaLink } from "@/components/site/cta";
import { experiences } from "@/lib/content";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="scroll-mt-20 bg-chalk py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experiences"
          title={
            <>
              Days you will
              <span className="italic text-sea"> remember</span>
            </>
          }
          subtitle="Spa, infinity pool, beach club, farm and two restaurants — a few of the things that make Çizgi unique on the Ortaca coast."
        />

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {experiences.map((exp, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={exp.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {/* Image */}
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

                {/* Text */}
                <div className={reversed ? "md:order-1" : ""}>
                  <BlurFade inView delay={0.1}>
                    <p className="eyebrow">{exp.kicker}</p>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
                      {exp.title}
                    </h3>
                    <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                      {exp.description}
                    </p>
                  </BlurFade>
                </div>
              </div>
            );
          })}
        </div>

        <BlurFade inView>
          <div className="mt-20 text-center">
            <CtaLink href="/experiences" variant="solid">
              Explore all experiences
            </CtaLink>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
