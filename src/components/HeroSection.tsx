"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { searchPlaces } from "@/lib/places";
import type { Place } from "@/lib/types";

const CHECKS = [
  "Verified Trucks",
  "Live Tracking",
  "Transparent Pricing",
  "Digital POD",
];

// ── Internal city search input ────────────────────────────────────────────────

interface CityInputProps {
  placeholder: string;
  dotColor: string;
  onSelect: (place: Place) => void;
}

function CityInput({ placeholder, dotColor, onSelect }: CityInputProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Place[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const handleInput = useCallback((val: string) => {
    setQuery(val);
    clearTimeout(timerRef.current);

    if (!val.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const places = await searchPlaces(val);
        const lower = val.toLowerCase().trim();

        // keep only results where the city name matches the query
        const filtered = places.filter((p) =>
          p.city?.name?.toLowerCase().includes(lower),
        );

        // deduplicate by city name
        const seen = new Set<string>();
        const unique = filtered.filter((p) => {
          const key = (p.city?.name ?? p.name).toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        setResults(unique);
        setOpen(unique.length > 0);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 350);
  }, []);

  const handleSelect = (place: Place) => {
    const cityName = place.city?.name ?? place.name;
    const stateName = place.city?.state?.name;
    const displayText = stateName ? `${cityName}, ${stateName}, India` : cityName;
    setQuery(displayText);
    setResults([]);
    setOpen(false);
    onSelect(place);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <span
        className={`absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${dotColor}`}
      />
      <input
        type="text"
        value={query}
        onChange={(e) => handleInput(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-xl bg-white py-3.5 pl-9 pr-8 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
      />

      {/* Loading indicator */}
      {loading && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
          •••
        </span>
      )}

      {/* Dropdown */}
      {open && results.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-50 mt-1 max-h-52 overflow-y-auto rounded-xl border border-slate-100 bg-white shadow-xl">
          {results.map((place) => (
            <li
              key={place.id}
              onMouseDown={() => handleSelect(place)}
              className="cursor-pointer px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-orange-50"
            >
              {place.city?.name ?? place.name}
              {place.city?.state?.name
                ? `,${place.city.state.name}, India`
                : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── HeroSection ───────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [pickup, setPickup] = useState<Place | null>(null);
  const [delivery, setDelivery] = useState<Place | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheckFare = () => {
    if (!pickup || !delivery) {
      alert("Please select both pickup and delivery city");
      return;
    }
    setLoading(true);
    const bookingUrl = `${process.env.NEXT_PUBLIC_BOOKING_URL}/book?sourceId=${pickup.id}&destinationId=${delivery.id}`;
    window.open(bookingUrl, "_blank");
    setLoading(false);
  };

  return (
    <>
      <section
        className="relative overflow-hidden py-[70px] pb-22.5"
        style={{
          background:
            "radial-gradient(circle at 78% 30%, rgba(79,209,232,0.10), transparent 45%), linear-gradient(135deg, #081a3a 0%, #0b2452 55%, #0e2f66 100%)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1140px] px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
            {/* ── Left: copy ── */}
            <div>
              {/* Eyebrow badge */}
              <span
                className="mb-[22px] inline-block rounded-full px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.05em]"
                style={{
                  color: "#4fd1e8",
                  background: "rgba(79,209,232,0.08)",
                  border: "1px solid rgba(79,209,232,0.35)",
                }}
              >
                India&apos;s Freight Pricing Transparency Platform
              </span>

              {/* Heading */}
              <h1 className="mb-0 text-5xl font-extrabold leading-[1.18] tracking-tight text-white max-[1300px]:text-[47px] max-[980px]:text-[40px] max-[640px]:text-[25px] max-[426px]:text-[24px]">
                Book Trucks Online Across India with TruckGuru
              </h1>

              {/* Trust line */}
              <div
                className="mb-[18px] text-base font-semibold"
                style={{ color: "#44506A" }}
              >
                <span className="pr-1 text-[13px]">✦</span>Trusted by Businesses
                Across India
              </div>

              {/* Description */}
              <p
                className="mb-7 max-w-[480px] text-base leading-[1.7] max-[426px]:text-[14.8px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Know your truck transport cost before booking. Full truckload
                rates from Rs.26 per km, confirmed upfront, with GPS tracking
                and digital documents on every trip.
              </p>

              {/* Feature checks */}
              <ul className="m-0 grid max-w-[390px] list-none grid-cols-2 gap-x-8 gap-y-3 p-0 max-[640px]:grid-cols-1">
                {CHECKS.map((label) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-[15px] font-semibold text-white"
                  >
                    <span
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-base"
                      style={{
                        background: "rgba(79,209,232,0.15)",
                        color: "#4fd1e8",
                        border: "1px solid rgba(79,209,232,0.4)",
                      }}
                    >
                      ✓
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: booking card ── */}
            <div className="flex min-h-[320px] items-center justify-center lg:justify-end max-[980px]:min-h-[220px] max-[426px]:min-h-[160px]">
              <div
                className="w-full max-w-md rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
                style={{
                  background: "#ffffff1a",
                  border: "1px solid rgba(255, 255, 255, .22)",
                }}
              >
                <h3 className="mb-5 text-center text-lg font-bold text-white">
                  Book Your Truck in Minutes
                </h3>

                {/* Pickup city */}
                <div className="mb-3">
                  <CityInput
                    placeholder="Select Pickup City"
                    dotColor="bg-green-500"
                    onSelect={setPickup}
                  />
                </div>

                {/* Delivery city */}
                <div className="mb-5">
                  <CityInput
                    placeholder="Select Delivery City"
                    dotColor="bg-orange-500"
                    onSelect={setDelivery}
                  />
                </div>

                {/* CTA */}
                <button
                  onClick={handleCheckFare}
                  disabled={loading}
                  className="w-full rounded-[14px] py-[14px] px-5 text-[16.32px] font-semibold tracking-[0.02em] text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  style={{
                    background: "linear-gradient(120deg, #F47C20, #DD6A10)",
                    boxShadow: "0 12px 26px rgba(244,124,32,0.4)",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {loading ? "Checking..." : "Check Truck Fare"}
                </button>

                <p className="mt-4 text-center text-[12.6px] leading-relaxed text-[rgba(255,255,255,.72)]">
                  Get instant rates with transparent pricing confirmed before
                  dispatch — no hidden charges. Only pay at booking
                  confirmation, advance after loading, and the balance upon
                  unloading.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Road + truck animation (exact original) ── */}
        <svg
          className="tg25-hero-route"
          viewBox="0 0 900 300"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className="tg25-route-line"
            d="M-20,240 C180,180 260,250 420,190 S700,90 940,140"
            fill="none"
          />
          <g className="tg25-route-truck">
            <rect x="-16" y="-11" width="26" height="15" rx="3" />
            <rect x="10" y="-7" width="12" height="11" rx="2" />
            <circle cx="-6" cy="6" r="4" />
            <circle cx="14" cy="6" r="4" />
          </g>
        </svg>
      </section>
    </>
  );
}
