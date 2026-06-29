"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BlurFade } from "@/components/ui/blur-fade";
import { CtaLink } from "@/components/site/cta";
import { suites } from "@/lib/content";

export function SuitesCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="suites" className="scroll-mt-20 bg-chalk-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading row */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <BlurFade inView>
              <p className="eyebrow">Rooms &amp; bungalows</p>
            </BlurFade>
            <BlurFade inView delay={0.08}>
              <h2 className="mt-4 text-balance font-serif text-[2.1rem] leading-[1.1] text-ink sm:text-4xl md:text-[2.9rem]">
                86 rooms designed for comfort
              </h2>
            </BlurFade>
          </div>
          <BlurFade inView delay={0.14}>
            <CtaLink href="/suites" variant="outlineDark">
              View all rooms
            </CtaLink>
          </BlurFade>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-12 max-w-6xl px-5 sm:px-8">
        <Carousel
          opts={{ align: "center", loop: true }}
          plugins={[autoplay.current]}
        >
          <CarouselContent className="-ml-4">
            {suites.map((suite) => (
              <CarouselItem
                key={suite.slug}
                className="basis-[86%] pl-4 sm:basis-[60%] lg:basis-[40%]"
              >
                <Link
                  href={`/suites#${suite.slug}`}
                  className="group block overflow-hidden rounded-[1.6rem]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={suite.image}
                      alt={suite.name}
                      fill
                      sizes="(max-width: 640px) 86vw, (max-width: 1024px) 60vw, 40vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-chalk">
                      <p className="text-[0.7rem] uppercase tracking-[0.24em] text-chalk/70">
                        {suite.view}
                      </p>
                      <h3 className="mt-1.5 font-serif text-2xl text-chalk md:text-3xl">
                        {suite.name}
                      </h3>
                      <p className="mt-1 text-sm italic text-chalk/75">
                        {suite.meaning}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-chalk/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        View suite
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 hidden border-ink/15 bg-chalk text-ink hover:bg-ink hover:text-chalk md:flex" />
          <CarouselNext className="-right-4 hidden border-ink/15 bg-chalk text-ink hover:bg-ink hover:text-chalk md:flex" />
        </Carousel>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-ink-soft md:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
