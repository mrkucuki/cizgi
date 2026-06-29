"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { CtaLink } from "@/components/site/cta";
import { site } from "@/lib/site";

const heroImages = [
  "/gallery/hotel-exterior.jpg",
  "/gallery/infinity-pool.jpg",
  "/gallery/restaurant-alacarte.jpg",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.35 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <ImagesSlider
        className="h-full"
        images={heroImages}
        overlayClassName="bg-gradient-to-b from-black/55 via-black/15 to-black/55"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-50 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
        >
          <motion.span
            variants={item}
            className="rounded-full border border-chalk/30 bg-black/10 px-5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-chalk/85 backdrop-blur-sm"
          >
            Hotel & Resort · {site.location.short}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-8 font-serif text-6xl font-light leading-none tracking-[0.16em] text-chalk sm:text-7xl md:text-8xl"
          >
            {site.wordmark}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-balance text-lg font-light leading-relaxed text-chalk/85 md:text-xl"
          >
            86 rooms, a private beach club, a farm with animals and bungalow houses —
            all where the Ortaca coast meets the countryside.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <CtaLink
              href={`mailto:${site.contact.email}`}
              external
              variant="light"
            >
              Reserve your stay
            </CtaLink>
            <CtaLink href="/suites" variant="outlineLight">
              Explore the rooms
            </CtaLink>
          </motion.div>
        </motion.div>
      </ImagesSlider>

      {/* Scroll cue */}
      <Link
        href="#story"
        aria-label="Scroll to discover"
        className="absolute bottom-7 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 text-chalk/70 transition hover:text-chalk"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Discover</span>
        <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" />
      </Link>
    </section>
  );
}
