import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://future-bme.ftn.uns.ac.rs'),
  title: {
    default: "Future-BME 2026 | International Conference on Business, Management, and Economics Engineering",
    template: "%s | Future-BME 2026"
  },
  description: "2nd International Conference on Business, Management, and Economics Engineering - Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation. September 29 - October 1, 2026, Fruške Terme, Serbia.",
  keywords: [
    "Future BME",
    "scientific conference",
    "Serbia",
    "Faculty of Technical Sciences",
    "University of Novi Sad",
    "IJIEM",
    "Business",
    "Management",
    "Economics Engineering",
    "Sustainability",
    "Digital Transformation",
    "International Conference",
    "2026",
    "Fruške Terme"
  ],
  authors: [{ name: "Faculty of Technical Sciences, University of Novi Sad" }],
  creator: "Faculty of Technical Sciences, University of Novi Sad",
  publisher: "Faculty of Technical Sciences, University of Novi Sad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://future-bme.ftn.uns.ac.rs",
    siteName: "Future-BME 2026",
    title: "Future-BME 2026 | International Conference",
    description: "Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation",
    images: [
      {
        url: "/images/HeaderBME.jpg",
        width: 1200,
        height: 630,
        alt: "Future-BME 2026 Conference"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future-BME 2026 | International Conference",
    description: "Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation",
    images: ["/images/HeaderBME.jpg"],
  },
  icons: {
    icon: [
      { url: "/future-bme-2026/images/favicon2.png" },
      { url: "/future-bme-2026/images/favicon.png", sizes: "any" }
    ],
    apple: [
      { url: "/future-bme-2026/images/favicon2.png" }
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
