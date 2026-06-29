import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve your stay at Çizgi, Ortaca. Send us an email enquiry and our concierge will reply within hours.",
};

const faqs = [
  {
    q: "How do I book a stay?",
    a: "Send us an email at cizginebo@hs09.kep.tr with your dates and party size and our concierge will confirm availability and any special requests, usually within a few hours.",
  },
  {
    q: "Do you arrange airport transfers?",
    a: "Yes. Çizgi is about 10 minutes from Dalaman Airport (DLM). We can arrange a private transfer to and from the resort — just let us know your flight details.",
  },
  {
    q: "What is included in a stay?",
    a: "Daily breakfast, access to the spa and pools, beach towels and concierge service are included. Spa rituals, private dining and boat charters can be added to your stay.",
  },
  {
    q: "Are children welcome?",
    a: "Çizgi is an intimate, adults-favoured retreat, but families are welcome in our larger villas. Tell us your group and we'll recommend the right suite.",
  },
  {
    q: "When is the season?",
    a: "We open from late April through October, with the warmest sea and longest evenings between June and September.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Let's plan your stay"
        subtitle="Send us an email enquiry and our concierge will be in touch within hours."
        image="/gallery/cizgi7-new.png"
        imageAlt="Çizgi Hotel infinity pool at sunset overlooking the sea"
      />

      <section className="bg-chalk py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {/* Details */}
          <div>
            <p className="eyebrow">Direct &amp; personal</p>
            <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
              Speak with the cove
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              No booking engines, no queues — just a direct email to the
              people who run Çizgi.
            </p>

            <a
              href={`mailto:${site.contact.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-chalk transition hover:bg-ink/90"
            >
              <Mail className="h-5 w-5" />
              Email us directly
            </a>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sea" />
                <span className="text-ink-soft">{site.contact.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-sea" />
                <a href={`mailto:${site.contact.email}`} className="text-ink-soft hover:text-ink">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-sea" />
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-ink-soft hover:text-ink">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="h-5 w-5 shrink-0 text-sea" />
                <span className="text-ink-soft">Concierge · 08:00 – 23:00 (GMT+3)</span>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Çizgi location — Fevziye, Ortaca, Muğla"
                src="https://maps.google.com/maps?q=Fevziye%2C+Ortaca%2C+Mu%C4%9Fla&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-[0_30px_80px_-50px_rgba(35,37,33,0.45)] sm:p-9">
            <h3 className="font-serif text-2xl text-ink">Send an enquiry</h3>
            <p className="mt-2 text-sm text-ink-soft">
              We&apos;ll reply with availability and a tailored proposal.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-chalk-deep py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="Good to know" title="Frequently asked" />
          <Accordion multiple={false} className="mt-10 w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q}>
                <AccordionTrigger className="text-left font-serif text-lg text-ink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
