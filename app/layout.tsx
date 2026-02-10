import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import ScopusBadge from "@/components/layout/ScopusBadge";
import { conferenceStructuredData } from "@/lib/structured-data";

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
    // Conference name & branding
    "Future BME",
    "Future-BME 2026",
    "BME Conference",
    
    // Conference type
    "international conference",
    "scientific conference",
    "academic conference",
    "industry conference",
    
    // Location - LOCAL SEO
    "Novi Sad conference",
    "Serbia conference",
    "Fruške Terme",
    "conference Serbia 2026",
    "Novi Sad academic conference",
    
    // Institution
    "Faculty of Technical Sciences",
    "University of Novi Sad",
    "FTN Novi Sad",
    "Univerzitet u Novom Sadu",
    
    // Topics
    "Business Management",
    "Economics Engineering",
    "Sustainability",
    "Digital Transformation",
    "Industry 4.0",
    "Circular Economy",
    "Green Technology",
    
    // Academic keywords
    "research conference",
    "academic papers",
    "scientific research",
    "peer-reviewed conference",
    "IJIEM",
    "Scopus indexed",
    
    // Target audience
    "researchers",
    "academics",
    "industry professionals",
    "PhD students",
    "postdoctoral researchers",
    
    // Regional
    "Balkan conference",
    "Southeast Europe conference",
    "Serbian academic conference",
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
    title: "Future-BME 2026 | International Conference in Novi Sad, Serbia",
    description: "International Conference on Business, Management and Economics Engineering. September 29 - October 1, 2026, Fruške Terme, Novi Sad, Serbia. Academic & Industry Conference.",
    images: [
      {
        url: "/images/HeaderBME.jpg",
        width: 1200,
        height: 630,
        alt: "Future-BME 2026 Conference - Novi Sad, Serbia"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future-BME 2026 | International Conference in Novi Sad, Serbia",
    description: "International Conference on Business, Management and Economics Engineering. September 29 - October 1, 2026, Fruške Terme, Novi Sad, Serbia.",
    images: ["/images/HeaderBME.jpg"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(conferenceStructuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <ScopusBadge />
      </body>
    </html>
  );
}
