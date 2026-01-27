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
  title: "Future-BME 2026 | International Conference",
  description: "2nd International Conference on Business, Management, and Economics Engineering - Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation",
  keywords: "Future BME, scientific conference, Serbia, Faculty of Technical Sciences, University of Novi Sad, IJIEM, Business, Management, Economics Engineering",
  openGraph: {
    title: "Future-BME 2026 Conference",
    description: "Forging the Future: Pioneering Approaches in Business, Management, and Economic Engineering",
    images: ["/images/HeaderBME.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon2.png" />
      </head>
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
