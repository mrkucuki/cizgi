import type { ReactNode } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <BlurFade inView>
          <p className={cn("eyebrow", light && "text-chalk/70!")}>{eyebrow}</p>
        </BlurFade>
      )}
      <BlurFade inView delay={0.08}>
        <h2
          className={cn(
            "mt-4 text-balance font-serif text-[2.1rem] leading-[1.08] sm:text-4xl md:text-[2.9rem]",
            light ? "text-chalk" : "text-ink"
          )}
        >
          {title}
        </h2>
      </BlurFade>
      {subtitle && (
        <BlurFade inView delay={0.16}>
          <p
            className={cn(
              "mt-5 text-pretty text-base leading-relaxed md:text-lg",
              light ? "text-chalk/80" : "text-ink-soft"
            )}
          >
            {subtitle}
          </p>
        </BlurFade>
      )}
    </div>
  );
}
