"use client";

import { ReactNode } from "react";

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  body: string;
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px]"
      >
        <path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    ),
    title: "Live GPS Tracking",
    body: "Every truck on the platform carries GPS. Watch your consignment move on the map and share the link with your consignee.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px]"
      >
        <path d="M3 6h13l5 6v6h-2" />
        <path d="M3 6v12h3" />
        <circle cx="8.5" cy="18" r="2" />
        <circle cx="17.5" cy="18" r="2" />
        <path d="M10.5 18h5" />
      </svg>
    ),
    title: "Transparent Per-km Pricing",
    body: "Rates from Rs.26 to Rs.91 per km depending on truck size. The fare you confirm at booking is the fare you pay.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px]"
      >
        <path d="M12 3l8 3v6c0 5-3.5 7.8-8 9-4.5-1.2-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Verified Transporter Network",
    body: "Bookings are fulfilled by a verified network of 10,000+ trucks covering 500+ locations across India.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px]"
      >
        <path d="M7 3h8l4 4v14H7z" />
        <path d="M15 3v4h4" />
        <path d="M10 12h6M10 16h6" />
      </svg>
    ),
    title: "Digital LR, Invoice and POD",
    body: "Lorry receipt, GST invoice, and proof of delivery are generated digitally on every shipment. No paper chase.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px]"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
    title: "Same-day Truck Confirmation",
    body: "Trucks are confirmed within the same day in most cases, and you can lock a dispatch date in advance for peak seasons.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[22px] w-[22px]"
      >
        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
        <path d="M4 15a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2zm16 0a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2z" />
        <path d="M18 18a3 3 0 0 1-3 3h-2" />
      </svg>
    ),
    title: "Support That Picks Up",
    body: "Book through the website, the app, or the call center. A support team is available round the clock while goods are in transit.",
  },
];

interface Props {
  theme?: 'dark' | 'light';
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  features?: FeatureItem[];
}

export default function WhySection({
  theme = 'light',
  eyebrow = "Why TruckGuru",
  heading = "Built for Businesses That Ship Every Week",
  subtext = "Everything a dispatch team needs on one platform: confirmed pricing, verified trucks, and paperwork that generates itself.",
  features = DEFAULT_FEATURES,
}: Props) {
  return (
    <section data-theme={theme} className={`py-20 ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-[#f5f5f5]'}`}>
      <div className="mx-auto w-full max-w-285 px-4">
        {/* Section head */}
        <div className="mb-10 text-center">
          <span
            className="mb-3.5 inline-block rounded-full border px-3.5 py-[5px] text-[12px] font-bold uppercase tracking-[2px]
            text-[#f2751a] bg-[rgba(242,117,26,0.08)] border-[rgba(242,117,26,0.25)]
            dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.08)] dark-theme:border-[rgba(79,209,232,0.3)]"
          >
            {eyebrow}
          </span>
          <h2 className="text-[2.15rem] font-extrabold leading-[1.18] tracking-tight text-[#062A63] dark-theme:text-white max-[640px]:text-[27px] max-[426px]:text-[22px]">
            {heading}
          </h2>
          <p className="mx-auto mt-2.5 max-w-[620px] text-base text-[#44506A] dark-theme:text-[rgba(255,255,255,0.72)] font-[Inter,sans-serif]">
            {subtext}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-5 pt-2.5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1 max-[426px]:grid-cols-1">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="group/card rounded-[18px] border border-[rgba(6,42,99,0.10)] bg-white px-[26px] py-[28px]
                shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)] transition-all duration-200
                hover:border-[rgba(244,124,32,0.35)] hover:shadow-[0_2px_6px_rgba(13,27,42,.07),0_14px_34px_rgba(13,27,42,.10)]
                dark-theme:bg-[rgba(255,255,255,0.05)] dark-theme:border-[rgba(255,255,255,0.12)] dark-theme:shadow-none
                dark-theme:hover:border-[rgba(244,124,32,0.4)]
                max-[426px]:px-4 max-[426px]:py-[18px]"
            >
              <span
                className="mb-3.5 flex h-[45px] w-[45px] items-center justify-center rounded-xl text-[#0e2f66] transition-colors duration-200
                  bg-[linear-gradient(135deg,rgba(6,42,99,0.08),rgba(0,184,217,0.12))]
                  group-hover/card:bg-[#f2751a] group-hover/card:text-white
                  dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.10)]
                  dark-theme:group-hover/card:bg-[#f2751a] dark-theme:group-hover/card:text-white"
              >
                {feat.icon}
              </span>
              <h4 className="mb-2 text-[1.02rem] font-bold text-[#062A63] dark-theme:text-white">
                {feat.title}
              </h4>
              <p className="text-[0.92rem] leading-[1.55] text-[#44506A] font-[Inter,sans-serif] dark-theme:text-[rgba(255,255,255,0.65)]">
                {feat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
