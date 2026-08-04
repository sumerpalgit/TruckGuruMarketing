import Link from "next/link";
import { ReactNode } from "react";

// ── internal helpers ────────────────────────────────────────────────────────

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-6 font-manrope text-[13.12px] font-semibold uppercase tracking-[0.14em] text-white">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="transition-[color,padding-left] duration-200 hover:pl-1 hover:text-[#F47C20] hover:no-underline"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialBtn({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="flex h-9.5 w-9.5 items-center justify-center rounded-xl border border-white/15 bg-[rgba(255,255,255,0.07)] text-white/90 transition-all duration-200 hover:-translate-y-0.75 hover:border-[#F47C20] hover:bg-[#F47C20]"
    >
      {children}
    </a>
  );
}

// ── data ────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "#" },
  { label: "Payment Terms", href: "#" },
  { label: "Chat Bot Assistant", href: "#" },
];

const SERVICES = [
  { label: "Online Truck Booking", href: "#" },
  { label: "Logistics Services", href: "#" },
  { label: "Transportation Services", href: "#" },
  { label: "Express Cargo Services", href: "#" },
  { label: "Truck Rental Services", href: "#" },
];

// ── social icons ─────────────────────────────────────────────────────────────

const PlayStoreIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
    <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
    <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568C480.224,136.96,497.728,118.496,512,97.248z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
    <path d="m.396 7.977h4.976v16.023h-4.976z" />
    <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
    <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096C512,181.088,504.704,138.592,490.24,113.92zM192,352V160l160,96L192,352z" />
  </svg>
);

// ── component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-[rgba(255,255,255,.72)]">

      {/* Top section */}
      <div className="mx-auto max-w-285 px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[290px_1fr_1fr_1fr]">

          {/* About */}
          <div>
            <FooterHeading>About Us</FooterHeading>
            <p className="font-inter text-[.9rem] leading-[1.7] text-[rgba(255,255,255,.62)]">
              TruckGuru LLP is a full truckload intercity truck booking platform
              with offices in Vadodara and Bangalore, serving businesses across
              110+ cities in India. Check your freight cost before you book,
              pick from Tata Ace to 32ft containers, and place your order
              online, through the app, or by calling 72020 45678. No part loads,
              no parcels—just full trucks moving commercial cargo between cities
              at rates you can see upfront.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:ps-10">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-5 font-inter text-[.9rem] text-[rgba(255,255,255,.62)]">
              {QUICK_LINKS.map((l) => (
                <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Our Services</FooterHeading>
            <ul className="space-y-5 font-inter text-[.9rem] text-[rgba(255,255,255,.62)]">
              {SERVICES.map((l) => (
                <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <div className="space-y-5 font-inter text-[.9rem] text-[rgba(255,255,255,.62)]">
              <p className="transition-[color,padding-left] duration-200 hover:pl-1 hover:text-[#F47C20]">
                Phone : 72020 45678
              </p>
              <p className="transition-[color,padding-left] duration-200 hover:pl-1 hover:text-[#F47C20]">
                WhatsApp : 72020 45678
              </p>
              <p className="transition-[color,padding-left] duration-200 hover:pl-1 hover:text-[#F47C20]">
                Email : cs@truckguru.co.in
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#204A73]">
        <div className="mx-auto grid max-w-285 grid-cols-1 items-center gap-6 px-6 py-5 lg:h-18 lg:grid-cols-[250px_1fr_250px] lg:gap-0">

          {/* App store buttons */}
          <div className="flex items-center justify-center gap-6 lg:justify-start">
            <SocialBtn><PlayStoreIcon /></SocialBtn>
            <SocialBtn><AppStoreIcon /></SocialBtn>
          </div>

          {/* Copyright */}
          <p className="order-first mb-0 text-center text-[13.12px] text-[rgba(255,255,255,.62)] lg:order-none">
            Copyright © TruckGuru LLP
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <SocialBtn><FacebookIcon /></SocialBtn>
            <SocialBtn><TwitterIcon /></SocialBtn>
            <SocialBtn><LinkedInIcon /></SocialBtn>
            <SocialBtn><YouTubeIcon /></SocialBtn>
          </div>

        </div>
      </div>

    </footer>
  );
}
