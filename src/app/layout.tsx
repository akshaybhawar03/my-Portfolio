import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://my-portfolio-kappa-murex-41.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akshay Bhawar – Portfolio",
    template: "%s | Akshay Bhawar",
  },
  description: "Full‑stack developer in Daund, Maharashtra, India. Next.js, TypeScript, Tailwind.",
  keywords: [
    "Indian web developer portfolio",
    "Next.js developer India",
    "TypeScript portfolio",
    "Frontend developer Maharashtra",
    "Next.js projects for internships",
    "Finance tools for Indian students",
    "Pune developer",
    "Akshay Bhawar",
    "Akshay Bhawar Portfolio"
  ],
  authors: [{ name: "Akshay Bhawar", url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Akshay Bhawar – Portfolio",
    description: "Full‑stack developer portfolio. Next.js, TypeScript, Tailwind.",
    siteName: "Akshay Bhawar",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Akshay Bhawar Portfolio" },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Bhawar – Portfolio",
    description: "Full‑stack developer portfolio. Next.js, TypeScript, Tailwind.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo/Portfolio.png",
    shortcut: "/logo/Portfolio.png",
    apple: "/logo/Portfolio.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "Y1Mox3vYUXwpLs66dSBbe3H1FpAP8zCu5rqDBuWqlII",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
