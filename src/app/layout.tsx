import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { CookieBanner } from "@/components/site/cookie-banner";
import { site } from "@/lib/site";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cizgiresort.com"),
  title: {
    default: `${site.name} · Hotel & Resort, Ortaca`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Çizgi",
    "Ortaca hotel",
    "Fevziye hotel",
    "hotel with farm Turkey",
    "Ortaca bungalow",
    "Mediterranean luxury hotel",
  ],
  openGraph: {
    title: `${site.name} · Hotel & Resort, Ortaca`,
    description: site.description,
    type: "website",
    images: ["/gallery/hotel-exterior.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
