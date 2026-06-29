export type Suite = {
  slug: string;
  name: string;
  meaning: string;
  image: string;
  blurb: string;
  details: string;
  sleeps: string;
  size: string;
  view: string;
  features: string[];
};

export const suites: Suite[] = [
  {
    slug: "standard-room",
    name: "Standard Room",
    meaning: "Garden view",
    image: "/gallery/standard-room.jpg",
    blurb:
      "A comfortable and stylish room surrounded by lush gardens and the calm atmosphere of Çizgi Hotel.",
    details:
      "The Standard Room combines modern comfort with warm design. Ideal for guests who love nature, it opens to a tranquil garden setting just steps from the pool and main facilities.",
    sleeps: "2 guests",
    size: "28 m²",
    view: "Garden view",
    features: ["Work desk", "Queen bed", "Garden view", "Rain shower"],
  },
  {
    slug: "farm-bungalow",
    name: "Farm Bungalow",
    meaning: "Nature & animals",
    image: "/gallery/farm-bungalow.jpg",
    blurb:
      "A unique bungalow experience surrounded by our farm animals, fresh air and the sounds of nature.",
    details:
      "The Farm Bungalow offers a one-of-a-kind stay in the countryside setting of Çizgi. Wake up to birdsong, meet the farm animals, and enjoy a slower, more authentic side of Ortaca life.",
    sleeps: "2–4 guests",
    size: "55 m²",
    view: "Farm & nature",
    features: ["Private terrace", "Farm access", "King bed", "Outdoor seating"],
  },
];

export type Experience = {
  title: string;
  src: string;
  kicker: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    title: "Spa & Wellness",
    kicker: "Wellness",
    src: "/gallery/spa-wellness.jpg",
    description:
      "A calm and beautifully designed spa with massage treatments, warm stone rooms, candles and soothing scents — a true escape from the everyday.",
  },
  {
    title: "Infinity Pool",
    kicker: "Golden hour",
    src: "/gallery/infinity-pool.jpg",
    description:
      "As the sun sets over the Aegean, the infinity pool turns golden. Float in silence, watch the horizon, and let the evening begin.",
  },
  {
    title: "A'la Carte Restaurant",
    kicker: "Fine dining",
    src: "/gallery/restaurant-alacarte.jpg",
    description:
      "An outdoor seaside dining experience at its finest. Candlelit tables, fresh local ingredients and a sea view that makes every meal unforgettable.",
  },
  {
    title: "Beach Club & Bar",
    kicker: "Relax",
    src: "/gallery/beach-club.jpg",
    description:
      "Sunbeds, private cabanas, a beach bar and a wooden deck right by the water. The Çizgi Beach Club is your base for long, lazy days in the sun.",
  },
];

export const stats = [
  { value: "86", label: "Rooms & bungalows" },
  { value: "1", label: "Private beach club" },
  { value: "1", label: "Farm with animals" },
  { value: "24h", label: "Concierge" },
] as const;

export type GalleryImage = { src: string; alt: string; tall?: boolean };

export const gallery: GalleryImage[] = [
  { src: "/gallery/hotel-exterior.jpg", alt: "Çizgi Hotel main entrance and facade", tall: true },
  { src: "/gallery/infinity-pool.jpg", alt: "Infinity pool overlooking the sea at sunset" },
  { src: "/gallery/restaurant-alacarte.jpg", alt: "Outdoor a'la carte restaurant at sunset", tall: true },
  { src: "/gallery/beach-club.jpg", alt: "Beach club with sunbeds and private cabanas" },
  { src: "/gallery/spa-wellness.jpg", alt: "Spa and wellness room with massage beds", tall: true },
  { src: "/gallery/kids-pool.jpg", alt: "Colorful kids pool with slides" },
  { src: "/gallery/fitness-center.jpg", alt: "Modern fitness center with sea view", tall: true },
  { src: "/gallery/restaurant-main.jpg", alt: "Main indoor restaurant with wooden ceiling" },
  { src: "/gallery/reception.jpg", alt: "Çizgi Hotel deluxe sea view room with private balcony", tall: true },
  { src: "/gallery/farm-bungalow.jpg", alt: "Çizgi Farm Bungalow with private pool surrounded by palm trees" },
];


export const nearby = [] as const;
