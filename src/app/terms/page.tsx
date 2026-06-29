import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Booking terms, cancellation policy and general conditions for stays at Çizgi Hotel, Ortaca.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Booking, cancellation and general conditions for your stay."
        image="/gallery/cizgi7-new.png"
        imageAlt="Çizgi Hotel"
      />

      <section className="bg-chalk py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="prose prose-stone max-w-none [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_p]:leading-relaxed [&_p]:text-ink-soft [&_ul]:text-ink-soft [&_ul]:leading-relaxed">

            <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
              Last updated: June 2026
            </p>

            <p className="mt-6">
              These Terms and Conditions govern all reservations and stays at{" "}
              <strong>Çizgi Hotel</strong>, located at {site.contact.address}. By submitting
              a reservation enquiry or confirming a booking, you agree to these terms.
            </p>

            <h2>1. Reservations</h2>
            <p>
              All reservations are made via email to{" "}
              <a href={`mailto:${site.contact.email}`} className="text-sea underline">
                {site.contact.email}
              </a>
              . A reservation is confirmed only when you receive a written confirmation
              from Çizgi Hotel. Availability is not guaranteed until confirmation is issued.
            </p>

            <h2>2. Check-in & Check-out</h2>
            <ul>
              <li><strong>Check-in:</strong> from 14:00 (GMT+3)</li>
              <li><strong>Check-out:</strong> by 12:00 (GMT+3)</li>
              <li>
                Early check-in or late check-out may be arranged subject to availability —
                please request in advance via email.
              </li>
            </ul>

            <h2>3. Cancellation policy</h2>
            <ul>
              <li>
                <strong>More than 14 days before arrival:</strong> Full refund or free
                date change.
              </li>
              <li>
                <strong>7–14 days before arrival:</strong> 50% of the total booking value
                is charged.
              </li>
              <li>
                <strong>Less than 7 days before arrival or no-show:</strong> 100% of the
                total booking value is charged.
              </li>
            </ul>
            <p>
              Cancellations must be communicated in writing by email to{" "}
              <a href={`mailto:${site.contact.email}`} className="text-sea underline">
                {site.contact.email}
              </a>
              . The date of receipt of the email is the cancellation date.
            </p>

            <h2>4. Payment</h2>
            <p>
              Payment terms and accepted methods will be communicated at the time of
              booking confirmation. Çizgi Hotel reserves the right to request a deposit
              to secure a reservation during peak season.
            </p>

            <h2>5. Guest responsibilities</h2>
            <p>
              Guests are responsible for any damage caused to hotel property during their
              stay. Çizgi Hotel reserves the right to charge the cost of repairs or
              replacement to the guest. Disruptive behaviour that impacts the experience
              of other guests may result in removal from the property without refund.
            </p>

            <h2>6. Included services</h2>
            <p>
              Unless otherwise stated in your booking confirmation, rates include daily
              breakfast, access to the pool and beach club, and standard concierge service.
              Spa treatments, private dining experiences and transfers are charged separately.
            </p>

            <h2>7. Liability</h2>
            <p>
              Çizgi Hotel is not liable for loss, theft or damage to personal belongings
              on the property. Guests use all facilities at their own risk. The hotel is
              not responsible for events beyond its reasonable control (force majeure).
            </p>

            <h2>8. Children & pets</h2>
            <p>
              Children are welcome. Pets are not permitted on the property unless
              explicitly agreed in writing prior to arrival.
            </p>

            <h2>9. Governing law</h2>
            <p>
              These Terms are governed by the laws of the Republic of Turkey. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of Muğla.
            </p>

            <h2>10. Contact</h2>
            <p>
              Çizgi Hotel · {site.contact.address}
              <br />
              Email:{" "}
              <a href={`mailto:${site.contact.email}`} className="text-sea underline">
                {site.contact.email}
              </a>
              <br />
              Phone:{" "}
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-sea underline">
                {site.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
