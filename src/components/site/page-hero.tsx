import type { ReactNode } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex h-[66vh] min-h-[440px] items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/45" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 md:pb-20">
        <BlurFade inView>
          <p className="eyebrow text-chalk/75!">{eyebrow}</p>
        </BlurFade>
        <BlurFade inView delay={0.08}>
          <h1 className="mt-3 max-w-3xl text-balance font-serif text-5xl font-light leading-[1.04] text-chalk md:text-7xl">
            {title}
          </h1>
        </BlurFade>
        {subtitle && (
          <BlurFade inView delay={0.16}>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-chalk/80">
              {subtitle}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
