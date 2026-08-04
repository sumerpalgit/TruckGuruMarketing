import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home } from "@/pages/Home";
import { Contact } from "@/pages/Contact";
import { BulkInquiry } from "@/pages/BulkInquiry";

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
        <Header />
        <main className="flex-1">{children}</main>
        {/* <Home /> */}
        {/* <Contact /> */}
        {/* <BulkInquiry /> */}
        <Footer />
      </body>
    </html>
  );
}
