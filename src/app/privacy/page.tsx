import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Çizgi Hotel collects, uses and protects your personal data in accordance with KVKK and GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal data."
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
              Çizgi Hotel (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal
              data. This Privacy Policy explains what information we collect when you visit{" "}
              <strong>cizgiresort.com</strong>, use our contact form, or communicate with us by
              email, and how we use and protect that information.
            </p>

            <p>
              This policy is in compliance with the Turkish Personal Data Protection Law
              (KVKK — Kişisel Verilerin Korunması Kanunu No. 6698) and, where applicable,
              the EU General Data Protection Regulation (GDPR).
            </p>

            <h2>1. What data we collect</h2>
            <p>We collect only the data you voluntarily provide:</p>
            <ul>
              <li><strong>Contact form:</strong> your name, email address and your message.</li>
              <li><strong>Email enquiries:</strong> any information you include when emailing us directly at {site.contact.email}.</li>
            </ul>
            <p>
              We do not collect payment card data, ID numbers or any sensitive personal data.
            </p>

            <h2>2. How we use your data</h2>
            <p>We use the information you send us solely to:</p>
            <ul>
              <li>Respond to your reservation enquiry or question.</li>
              <li>Confirm your booking and send you relevant stay details.</li>
              <li>Improve the quality of our service based on feedback you share.</li>
            </ul>
            <p>
              We do not sell, rent or share your data with third parties for marketing purposes.
            </p>

            <h2>3. Cookies and third-party services</h2>
            <p>
              Our website embeds a <strong>Google Maps</strong> iframe on the Contact page.
              Google Maps may set cookies or collect technical data (such as your IP address)
              when you load that section. This is governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sea underline"
              >
                Google&apos;s Privacy Policy
              </a>
              . We do not operate any first-party analytics, advertising or tracking cookies.
            </p>

            <h2>4. Data retention</h2>
            <p>
              We keep your enquiry emails for as long as necessary to service your request
              and for a maximum of 2 years after your stay or last contact, after which they
              are permanently deleted.
            </p>

            <h2>5. Your rights</h2>
            <p>Under KVKK (and GDPR if applicable) you have the right to:</p>
            <ul>
              <li>Know whether your personal data is being processed.</li>
              <li>Request access to or a copy of your data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to the processing of your data.</li>
              <li>File a complaint with the relevant data protection authority.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${site.contact.email}`} className="text-sea underline">
                {site.contact.email}
              </a>{" "}
              and we will respond within 30 days.
            </p>

            <h2>6. Data security</h2>
            <p>
              We implement industry-standard security headers and transport-layer encryption
              (HTTPS/TLS) on this website. Email correspondence is transmitted over encrypted
              connections where supported by both mail servers.
            </p>

            <h2>7. Contact</h2>
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

            <h2>8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this
              page with an updated &quot;Last updated&quot; date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
