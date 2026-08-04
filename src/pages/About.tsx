"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTATalkSection from "@/components/CTATalkSection";

const FEATURES = [
  {
    icon: "https://truckguru.co.in/new_assets/img/icon/feature-1.png",
    title: "OUR COMMITMENT",
    desc: "When we confirm a booking, the truck shows up. When we quote a rate, that is what you pay. If something goes wrong on the road — a breakdown, a delay at a toll — our team calls you before you have to call us. Over 110+ cities, every single order follows the same rule: no excuses, no hidden charges, no last-minute surprises.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/icon/feature-2.png",
    title: "OUR VISION",
    desc: "To become the platform Indian businesses turn to first when they need to move goods between cities. Not because of marketing, but because every shipper who has used TruckGuru knows the rate was fair, the truck arrived on time, and nothing was hidden in the fine print.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/icon/feature-3.png",
    title: "OUR MISSION",
    desc: "Bring pricing transparency to India's freight market. Every shipper should know the transport cost before they book, compare rates across truck types, and pay only what was agreed. From a Tata Ace carrying 1,250 kg to a 32 ft container moving 18 tonnes — the rate is visible before you commit.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/icon/feature-1.png",
    title: "UPFRONT PRICING",
    desc: "Most shippers call three or four transporters and get three or four different rates with no way to know which one is fair. TruckGuru fixes that. Use our freight calculator, see the estimated cost for your route and truck type, and get the final fare confirmed by our executive before you pay a single rupee.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/icon/feature-2.png",
    title: "110+ CITIES COVERED",
    desc: "Ahmedabad to Mumbai, Delhi to Bangalore, Chennai to Hyderabad — we cover all major intercity corridors across India. Our strongest network spans 16 key cities including Pune, Surat, Vadodara, Jaipur, Kolkata, Nagpur, Indore, and Kochi.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/icon/feature-3.png",
    title: "RIGHT TRUCK FOR EVERY LOAD",
    desc: "Not every shipment needs the same truck. We offer Tata Ace (1,250 kg), Bada Dost and Mahindra Pickup (1.5 ton), 14ft/17ft/19ft Eichers (3.5 to 7 ton), 20ft containers (6.5 ton), and 32ft containers in SXL and MXL variants up to 18 tonnes.",
  },
];

const WHY_ITEMS = [
  {
    icon: "https://truckguru.co.in/new_assets/img/wcu/icon-1.png",
    title: "FULL TRUCKLOAD BOOKING",
    desc: "Book a full truck for intercity goods transport — Tata Ace to 32ft containers. Select your vehicle type based on load weight and volume, and our team places the truck at your pickup location.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/wcu/icon-2.png",
    title: "TRANSPARENT PRICING",
    desc: "Use our freight calculator to get an estimated rate for your route and truck type before you commit. The final fare is confirmed by our executive after verifying pickup, drop, and material details. No hidden charges added later.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/wcu/icon-3.png",
    title: "BOOK ONLINE IN MINUTES",
    desc: "Place your booking through our website, the TruckGuru app, or by calling 72020 45678. Enter your pickup and drop city, choose the truck type, and get the rate — the entire process takes less than five minutes.",
  },
  {
    icon: "https://truckguru.co.in/new_assets/img/wcu/icon-4.png",
    title: "ADVANCE BOOKING",
    desc: "Book trucks up to a week ahead or with as little as one hour's notice. For businesses with regular shipments, we offer scheduled pickups on a daily, weekly, or monthly basis so the truck is at your gate when your goods are ready.",
  },
];

const AT_A_GLANCE = [
  { label: "Company", value: "TruckGuru LLP" },
  { label: "Service", value: "Full Truckload (FTL)" },
  { label: "Offices", value: "Vadodara & Bangalore" },
  { label: "Coverage", value: "110+ cities" },
  { label: "Fleet range", value: "1,250 kg – 18 ton" },
];

const NOT_LISTED = [
  "Part truckload (PTL) or less-than-truckload shipments",
  "Courier, parcel, or postal services",
  "Within-city or local deliveries",
  "Household relocation (no packers-movers services)",
  "Car, bike, or any automobile transport",
  "Warehousing or storage",
];

const ROUTES = [
  "Delhi – Mumbai",
  "Ahmedabad – Mumbai",
  "Delhi – Bangalore",
  "Chennai – Hyderabad",
  "Mumbai – Bangalore",
];

const CONTACT_ITEMS = [
  { label: "Company", value: "TruckGuru LLP", href: undefined },
  { label: "Phone", value: "72020 45678", href: "tel:+917202045678" },
  {
    label: "Email",
    value: "booking@truckguru.co.in",
    href: "mailto:booking@truckguru.co.in",
  },
  { label: "Website", value: "truckguru.co.in", href: "/" },
];

export const About = () => {
  const [slide, setSlide] = useState(0);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxSlide = FEATURES.length - 3;

  const go = (i: number) => {
    const next = Math.min(Math.max(i, 0), maxSlide);
    setSlide(next);
    const card = trackRef.current?.children[next] as HTMLElement | undefined;
    if (card) setOffset(card.offsetLeft);
  };

  return (
    <>
      <PageHero
        badge="About Us"
        title="About TruckGuru — Know Your Freight Cost Before Booking"
        description="TruckGuru LLP is a full truckload (FTL) intercity truck booking platform with offices in Vadodara, Gujarat and Bangalore, Karnataka, serving businesses across India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* ── Features / Why Businesses Choose TruckGuru ── */}
      <section className="bg-[#f5f7fa] px-10 py-19 max-[640px]:px-5 max-[640px]:py-14">
        <div className="mx-auto max-w-285 ">
          {/* Heading row */}
          <div className="mb-11 grid grid-cols-[1fr_1.15fr] items-center gap-8 max-[768px]:grid-cols-1">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
                Features
              </p>
              <h2 className="mt-3 text-[38px] font-extrabold leading-tight tracking-[-0.02em] text-[#16233d] max-[640px]:text-[28px]">
                Why Businesses Choose TruckGuru
              </h2>
            </div>
            <div className="border-l-[3px] border-l-[#f38634] pl-[22px]">
              <p className="text-[16px] leading-[1.7] text-[#3c4a66]">
                Need a full truckload for intercity goods transport?{" "}
                <Link href="/contact" className="font-extrabold text-[#f38634]">
                  Get in touch
                </Link>{" "}
                with us or call{" "}
                <a
                  href="tel:+917202045678"
                  className="font-extrabold text-[#f38634]"
                >
                  72020 45678
                </a>
                .
              </p>
            </div>
          </div>

          {/* Carousel track */}
          <div className="overflow-hidden p-2">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {FEATURES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="w-[calc(33.333%-16px)] flex-shrink-0 rounded-[18px] border border-[#e4e9f2] bg-white p-[34px_30px] transition-all duration-[250ms] hover:-translate-y-1.5 hover:border-[#f38634] hover:shadow-[0_14px_30px_rgba(13,27,52,0.10)] max-[768px]:w-full"
                >
                  <div
                    className="mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-[0_8px_18px_rgba(243,134,52,0.32)]"
                    style={{
                      background:
                        "linear-gradient(135deg,#f79a52 0%,#f38634 100%)",
                    }}
                  >
                    <Image
                      src={icon}
                      alt={title}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain brightness-0 invert"
                    />
                  </div>
                  <h3 className="mb-3 text-[18px] font-extrabold tracking-[0.04em] text-[#16233d]">
                    {title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.7] text-[#5b6a86]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots + Nav */}
          <div className="mt-[30px] flex items-center justify-between gap-5">
            <div className="flex gap-2">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-2 rounded-full border-none p-0 outline-none transition-all duration-300"
                  style={{
                    width: i === slide ? "26px" : "8px",
                    background: i === slide ? "#f38634" : "#d7dee9",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => go(slide - 1)}
                disabled={slide === 0}
                aria-label="Previous"
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#dbe2ee] bg-white text-[17px] text-[#16233d] outline-none transition-all hover:border-[#f38634] hover:bg-[#f38634] hover:text-white disabled:opacity-40"
              >
                ←
              </button>
              <button
                onClick={() => go(slide + 1)}
                disabled={slide === maxSlide}
                aria-label="Next"
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#dbe2ee] bg-white text-[17px] text-[#16233d] outline-none transition-all hover:border-[#f38634] hover:bg-[#f38634] hover:text-white disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Content ── */}
      <section className="bg-white px-10 py-[82px] max-[640px]:px-5 max-[640px]:py-14">
        <div className="mx-auto grid max-w-285 grid-cols-[0.85fr_1.15fr] items-start gap-13 max-[900px]:grid-cols-1">
          {/* Left sticky sidebar */}
          <div className="sticky top-[110px] flex flex-col gap-[22px] max-[900px]:static">
            <Image
              src="https://truckguru.co.in/new_assets/img/about/BharatBenz.webp"
              alt="BharatBenz truck — advanced and affordable transportation services"
              width={600}
              height={290}
              className="block h-[290px] w-full rounded-[18px] bg-[#e4e9f2] object-cover"
            />

            {/* At a Glance card */}
            <div className="rounded-[18px] border border-[#e4e9f2] bg-[#f8fafc] p-[28px_26px]">
              <p className="mb-[18px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
                At a Glance
              </p>
              <div className="flex flex-col gap-[14px]">
                {AT_A_GLANCE.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`flex items-baseline justify-between ${i < AT_A_GLANCE.length - 1 ? "border-b border-[#e9edf4] pb-[12px]" : ""}`}
                  >
                    <span className="text-[13.5px] font-semibold text-[#5b6a86]">
                      {label}
                    </span>
                    <span className="text-[14px] font-extrabold text-[#16233d]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="tel:+917202045678"
                className="mt-[22px] block rounded-[10px] bg-[#f38634] py-[14px] text-center text-[14px] font-extrabold uppercase tracking-[0.03em] text-white transition-all hover:bg-[#e0752a]"
              >
                Call 72020 45678
              </a>
            </div>
          </div>

          {/* Right: long-form content */}
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
              About Us
            </p>
            <h2 className="mb-5 mt-3 text-[36px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#16233d] max-[640px]:text-[26px]">
              FTL Truck Booking Platform — About TruckGuru
            </h2>
            <p className="mb-4 text-[16px] leading-[1.8] text-[#3c4a66]">
              TruckGuru LLP is a full truckload (FTL) intercity truck booking
              platform with offices in Vadodara, Gujarat and Bangalore,
              Karnataka, serving businesses across India. We connect businesses
              with trucks for goods transport between cities — nothing more,
              nothing less. No part loads, no parcels, no local deliveries. Just
              full trucks moving commercial cargo from one city to another.
            </p>
            <p className="mb-9 text-[16px] leading-[1.8] text-[#3c4a66]">
              The company was built around one problem that every shipper in
              India knows too well: you call three or four transporters, get
              three or four different rates, and have no way of knowing which
              one is fair. TruckGuru was started to fix that. We show you the
              truck transport cost before you book, so you know exactly what you
              are paying and why.
            </p>

            <h3 className="mb-[14px] text-[26px] font-extrabold tracking-[-0.01em] text-[#16233d]">
              What We Actually Do
            </h3>
            <p className="mb-[14px] text-[15.5px] leading-[1.8] text-[#5b6a86]">
              We operate across 110+ cities and cover all major intercity
              corridors in India. When a business needs to move goods — raw
              materials, finished products, machinery, FMCG stock, textiles,
              building materials, auto components, electronics — our team
              matches the right truck to the load and handles the booking from
              pickup to delivery.
            </p>
            <p className="mb-[14px] text-[15.5px] leading-[1.8] text-[#5b6a86]">
              Our fleet range covers everything from a Tata Ace (1,250 kg) for
              smaller commercial loads to 32 ft containers carrying up to 18
              tonnes. In between, we have the Bada Dost, Mahindra Pickup,
              14ft/17ft/19ft Eichers, 20ft containers, and 32ft SXL and MXL
              variants.
            </p>
            <p className="mb-9 text-[15.5px] leading-[1.8] text-[#5b6a86]">
              You can book through our website, the TruckGuru mobile app, or by
              calling 72020 45678. Our team verifies your pickup and drop
              details, confirms the rate, and places the vehicle. Payment is
              split: a small token at booking, 90% at loading, and the balance
              before unloading at the destination.
            </p>

            <h3 className="mb-[14px] text-[26px] font-extrabold tracking-[-0.01em] text-[#16233d]">
              How Pricing Works
            </h3>
            <p className="mb-[14px] text-[15.5px] leading-[1.8] text-[#5b6a86]">
              Most freight platforms give you a rate after you have already
              committed. We do it the other way around.
            </p>
            <p className="mb-[14px] text-[15.5px] leading-[1.8] text-[#5b6a86]">
              Use the freight calculator on our website to get an estimate for
              your route and truck type. The final fare is confirmed by our
              executive after verifying the exact locations, material weight,
              and goods type.
            </p>
            <div className="mb-9 rounded-[14px] border border-[#f8d9bd] bg-[#fff7f0] p-[20px_22px]">
              <p className="text-[15px] leading-[1.75] text-[#3c4a66]">
                <strong className="font-extrabold text-[#16233d]">
                  GST on freight
                </strong>{" "}
                is payable under the Reverse Charge Mechanism at 5%. This means
                the shipper (you) is responsible for filing and paying GST on
                the transport service, not TruckGuru. Our invoices are
                GST-compliant and sent to your registered email after delivery.
              </p>
            </div>

            <h3 className="mb-[14px] text-[26px] font-extrabold tracking-[-0.01em] text-[#16233d]">
              Where We Operate
            </h3>
            <p className="mb-4 text-[15.5px] leading-[1.8] text-[#5b6a86]">
              Our strongest coverage is across Ahmedabad, Mumbai, Delhi,
              Bangalore, Chennai, Hyderabad, Kolkata, Pune, Surat, Vadodara,
              Jaipur, Nagpur, Indore, Lucknow, Kanpur, and Kochi.
            </p>
            <div className="mb-4 flex flex-wrap gap-[9px]">
              {ROUTES.map((route) => (
                <span
                  key={route}
                  className="rounded-full border border-[#e4e9f2] bg-[#f5f7fa] px-[15px] py-2 text-[13px] font-bold text-[#3c4a66]"
                >
                  {route}
                </span>
              ))}
            </div>
            <p className="mb-9 text-[15.5px] leading-[1.8] text-[#5b6a86]">
              For routes between smaller cities, call us. If there is a road
              connecting the two points and the distance is intercity, we can
              usually arrange a truck within 24–48 hours.
            </p>

            <h3 className="mb-[14px] text-[26px] font-extrabold tracking-[-0.01em] text-[#16233d]">
              What We Do Not Do
            </h3>
            <div className="mb-9 flex flex-col gap-[11px]">
              {NOT_LISTED.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[15px] font-extrabold text-[#f38634]">
                    ✗
                  </span>
                  <span className="text-[15.5px] leading-[1.6] text-[#5b6a86]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact CTA card */}
            <div className="rounded-[18px] bg-[#0d1b34] p-[34px_32px]">
              <h3 className="mb-[18px] text-[24px] font-extrabold text-white">
                Get in Touch
              </h3>
              <div className="mb-[22px] grid grid-cols-2 gap-x-7 gap-y-4">
                {CONTACT_ITEMS.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="mb-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#7c8aa5]">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[15px] font-bold text-white hover:text-[#f38634] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-bold text-white">
                        {value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-[15px] leading-[1.7] text-[#a9b8d2]">
                Need a truck? Book online or call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose TruckGuru ── */}
      <section
        className="px-10 py-[82px] max-[640px]:px-5 max-[640px]:py-14"
        style={{
          backgroundColor: "#101f3c",
          backgroundImage: [
            "radial-gradient(800px 400px at 88% 8%, rgba(243,134,52,0.16) 0%, rgba(243,134,52,0) 60%)",
            "linear-gradient(rgba(255,255,255,0.04) 1px, rgba(255,255,255,0) 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, rgba(255,255,255,0) 1px)",
          ].join(", "),
          backgroundSize: "auto, 54px 54px, 54px 54px",
        }}
      >
        <div className="mx-auto max-w-285">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
            Why Choose Us
          </p>
          <h2 className="mb-[14px] mt-3 text-[38px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white max-[640px]:text-[28px]">
            Why Choose TruckGuru
          </h2>
          <p className="mb-11 text-[15.5px] leading-[1.75] text-[#a9b8d2]">
            TruckGuru was built for businesses that are tired of calling
            multiple transporters and getting different rates with no clarity on
            what is fair. We show you the freight cost before you book, match
            the right truck to your load, and confirm the vehicle — across 110+
            cities in India.
          </p>

          <div className="grid grid-cols-[1fr_1fr] items-start gap-11 max-[900px]:grid-cols-1">
            {/* Left: feature list */}
            <div className="flex flex-col gap-[26px]">
              {WHY_ITEMS.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-[18px]">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-[0_8px_18px_rgba(243,134,52,0.28)]"
                    style={{
                      background:
                        "linear-gradient(135deg,#f79a52 0%,#f38634 100%)",
                    }}
                  >
                    <Image
                      src={icon}
                      alt={title}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[16px] font-extrabold tracking-[0.04em] text-white">
                      {title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-[#a9b8d2]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: YouTube video */}
            <div className="sticky top-[110px] rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.05)] p-[18px] max-[900px]:static">
              <div className="overflow-hidden rounded-[12px] bg-black">
                <iframe
                  src="https://www.youtube.com/embed/aaH-Z7vEGzg"
                  title="TruckGuru Transportation Network Pan India — Online Truck Booking"
                  className="block w-full"
                  style={{ height: "296px", border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="px-2 pb-1.5 pt-[18px]">
                <h3 className="mb-2 text-[17px] font-extrabold leading-[1.4] text-white">
                  TruckGuru Transportation Network Pan India
                </h3>
                <p className="mb-4 text-[13.5px] leading-[1.65] text-[#a9b8d2]">
                  See how a booking moves from enquiry to delivery — rate
                  confirmation, truck placement, GPS tracking, and digital POD.
                </p>
                <a
                  href="https://www.youtube.com/@TruckGuruofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] font-extrabold text-[#f38634] transition-all hover:underline"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTATalkSection />
    </>
  );
};
