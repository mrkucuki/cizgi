export const site = {
  name: "Çizgi",
  wordmark: "ÇİZGİ",
  tagline: "A hotel where the coast meets the countryside.",
  description:
    "Çizgi is a hotel in Fevziye, Ortaca — 86 rooms, a private beach club, a farm with animals and bungalow houses, all in one place.",
  location: {
    area: "Fevziye",
    city: "Ortaca",
    region: "Muğla",
    country: "Türkiye",
    short: "Fevziye · Ortaca",
  },
  contact: {
    email: "cizginebo@hs09.kep.tr",
    phone: "+90 533 479 9956",
    whatsapp: "905320000000",
    address: "Fevziye Mahallesi, Ortaca, Muğla, Türkiye",
    instagram: "https://instagram.com/cizgiresort",
  },
} as const;

export const nav = [
  { label: "Rooms", href: "/suites" },
  { label: "Experiences", href: "/experiences" },
  { label: "Farm", href: "/farm" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Çizgi — I'd love to check availability for a stay.";
