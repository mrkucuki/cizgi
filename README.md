# Çizgi — Boho Resort, Bodrum

A state-of-the-art marketing site for **Çizgi**, a minimalist boho resort on the
Bodrum Peninsula. Bright Aegean-whitewash aesthetic, full-bleed photography,
WhatsApp-first conversion.

## Run it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first theme in `src/app/globals.css`)
- **shadcn/ui** (base-nova style — built on **Base UI**, not Radix) for primitives
- **Magic UI** — BlurFade, Marquee, BorderBeam, etc. (motion-based reveals/accents)
- **Aceternity UI** — ImagesSlider (hero), FocusCards (experiences)
- **motion** (the `motion` package) · **Embla** carousel + autoplay · **lucide-react**

> ℹ️ These libraries aren't npm packages — their components were pulled into this
> repo as editable source via the `shadcn` CLI (`npx shadcn@latest add <url>`).
> Everything in `src/components/ui` is yours to re-skin.

> ⚠️ **Base UI gotcha:** components use the `render` prop, **not** `asChild`
> (e.g. `<SheetClose render={<Link … />} />`), and Accordion uses `multiple`,
> not `type`/`collapsible`.

## Edit the content (no component digging required)

| What | Where |
| --- | --- |
| **WhatsApp number, phone, email, address, Instagram** | `src/lib/site.ts` — ⚠️ the WhatsApp number is a **placeholder**, replace `contact.whatsapp` (digits only, country code first) |
| Suites, experiences, testimonials, stats, gallery, nearby | `src/lib/content.ts` |
| Colours, fonts, radii (the "Aegean whitewash" system) | `src/app/globals.css` (`:root` + `@theme inline`) |
| Photos | `public/gallery/` (semantic filenames) — originals kept in `images/` |

## Pages

- `/` — hero slider, brand story + stats, suites carousel, experiences, gallery teaser, Bodrum location, testimonials marquee, closing CTA
- `/suites` · `/experiences` · `/gallery` (lightbox) · `/contact` (WhatsApp inquiry form + map + FAQ)

## Conversion

Every CTA points to WhatsApp via `whatsappUrl()`. The contact form composes the
guest's details into a pre-filled WhatsApp message — no backend required. A
floating WhatsApp button is fixed on every page.

## Image credits

The 10 photos in `public/gallery/` were provided for this build. Replace with
licensed photography of the actual property before going live.
