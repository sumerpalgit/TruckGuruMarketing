import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "TruckGuru — Book Trucks Online",
  description: "India's Most Trusted Truck Booking Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body
        className="antialiased min-h-screen flex flex-col bg-white"
        suppressHydrationWarning
      >
        <HeaderWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
