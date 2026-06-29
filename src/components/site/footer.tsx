import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { StrokeDivider } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink text-chalk">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-3xl tracking-[0.3em]">{site.wordmark}</p>
            <StrokeDivider className="mt-4 h-2 w-28 text-clay" />
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-chalk/70">
              A boho boutique resort in Fevziye, Ortaca — whitewashed suites,
              a private cove and the Aegean light, drawn in clean lines.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="eyebrow text-clay!">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-chalk/70 transition hover:text-chalk">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-chalk/70 transition hover:text-chalk"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className="md:col-span-4">
            <p className="eyebrow text-clay!">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-chalk/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-chalk/40" />
                {site.contact.address}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-chalk/40" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-chalk">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-chalk/40" />
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-chalk">
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-chalk/10 pt-7 text-xs text-chalk/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Çizgi Resort · {site.location.short},{" "}
            {site.location.country}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-chalk/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-chalk/70">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
