"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-chalk/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Çizgi — home"
          className={cn(
            "font-serif text-xl tracking-[0.34em] transition-colors md:text-2xl",
            scrolled ? "text-ink" : "text-chalk"
          )}
        >
          {site.wordmark}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative text-sm font-medium tracking-wide transition-colors",
                scrolled ? "text-ink-soft hover:text-ink" : "text-chalk/85 hover:text-chalk"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                  scrolled ? "bg-ink" : "bg-chalk"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={`mailto:${site.contact.email}`}
          className={cn(
            "hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all md:inline-flex",
            scrolled
              ? "bg-ink text-chalk hover:bg-ink/90"
              : "border border-chalk/40 text-chalk backdrop-blur-sm hover:bg-chalk/10"
          )}
        >
          <Mail className="h-4 w-4" />
          Reserve
        </a>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            aria-label="Open menu"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full transition-colors md:hidden",
              scrolled ? "text-ink hover:bg-ink/5" : "text-chalk hover:bg-chalk/10"
            )}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[86vw] max-w-sm border-none bg-chalk px-7 py-8"
          >
            <SheetTitle className="font-serif text-2xl tracking-[0.3em] text-ink">
              {site.wordmark}
            </SheetTitle>
            <nav className="mt-10 flex flex-col gap-1">
              <SheetClose
                render={
                  <Link
                    href="/"
                    className="border-b border-border py-4 font-serif text-2xl text-ink transition-colors hover:text-sea"
                  >
                    Home
                  </Link>
                }
              />
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="border-b border-border py-4 font-serif text-2xl text-ink transition-colors hover:text-sea"
                    >
                      {item.label}
                    </Link>
                  }
                />
              ))}
            </nav>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-chalk"
            >
              <Mail className="h-5 w-5" />
              Book by Email
            </a>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              {site.contact.address}
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
