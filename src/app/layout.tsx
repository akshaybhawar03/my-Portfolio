import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshay Bhawar – Portfolio",
  description: "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
  icons: {
    icon: "/logo/Portfolio.png",
    shortcut: "/logo/Portfolio.png",
    apple: "/logo/Portfolio.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
