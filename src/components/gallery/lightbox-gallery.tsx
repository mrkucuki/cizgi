"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BlurFade } from "@/components/ui/blur-fade";
import { gallery } from "@/lib/content";

export function LightboxGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const go = useCallback(
    (dir: number) =>
      setIndex((cur) =>
        cur === null ? cur : (cur + dir + gallery.length) % gallery.length
      ),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const current = index !== null ? gallery[index] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {gallery.map((img, i) => (
          <BlurFade key={img.src} inView delay={(i % 3) * 0.08}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open ${img.alt}`}
              className={`group relative w-full overflow-hidden rounded-xl ${
                img.tall ? "aspect-[3/4]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25">
                <Plus className="h-7 w-7 text-chalk opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </button>
          </BlurFade>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          showCloseButton
          className="max-w-5xl border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-5xl"
        >
          <DialogTitle className="sr-only">
            {current?.alt ?? "Gallery image"}
          </DialogTitle>
          {current && (
            <div className="relative flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
              />
              <p className="mt-4 text-center text-sm text-chalk/90">
                {current.alt}
                <span className="ml-3 text-chalk/50">
                  {(index ?? 0) + 1} / {gallery.length}
                </span>
              </p>

              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/50 text-chalk backdrop-blur transition hover:bg-ink/70 md:-left-14"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/50 text-chalk backdrop-blur transition hover:bg-ink/70 md:-right-14"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
