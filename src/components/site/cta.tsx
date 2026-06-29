import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "sea" | "light" | "outlineDark" | "outlineLight";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-chalk hover:bg-ink/90",
  sea: "bg-sea text-white hover:bg-sea-deep",
  light: "bg-chalk text-ink hover:bg-white",
  outlineDark: "border border-ink/20 text-ink hover:bg-ink hover:text-chalk",
  outlineLight: "border border-chalk/40 text-chalk hover:bg-chalk hover:text-ink",
};

export function CtaLink({
  href,
  children,
  variant = "solid",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
