"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { searchPlaces } from "@/lib/places";
import type { Place } from "@/lib/types";

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

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
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

        const filtered = places.filter((p) =>
          p.city?.name?.toLowerCase().includes(lower)
        );

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
    <div ref={wrapperRef} className="relative flex-1">
      <span
        className={`absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${dotColor}`}
      />
      <input
        type="text"
        value={query}
        onChange={(e) => handleInput(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-xl bg-white py-4 pl-9 pr-8 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 shadow-sm"
      />

      {loading && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
          •••
        </span>
      )}

      {open && results.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-50 mt-1 max-h-52 overflow-y-auto rounded-xl border border-slate-100 bg-white shadow-xl">
          {results.map((place) => (
            <li
              key={place.id}
              onMouseDown={() => handleSelect(place)}
              className="cursor-pointer px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-orange-50"
            >
              {place.city?.name ?? place.name}
              {place.city?.state?.name ? `, ${place.city.state.name}, India` : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function HireTruckBannerSection() {
  const [pickup, setPickup] = useState<Place | null>(null);
  const [delivery, setDelivery] = useState<Place | null>(null);

  const handleCheckFare = () => {
    if (!pickup || !delivery) {
      alert("Please select both pickup and delivery city");
      return;
    }
    const bookingUrl = `${process.env.NEXT_PUBLIC_BOOKING_URL}/book?sourceId=${pickup.id}&destinationId=${delivery.id}`;
    window.open(bookingUrl, "_blank");
  };

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #0b2452 0%, #062A63 50%, #0e2f66 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-285 px-4">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-white max-[640px]:text-2xl">
          Hire a Truck Without the Hassle
        </h2>

        <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 p-6 shadow-2xl backdrop-blur-sm border border-white/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CityInput
              placeholder="Select Pickup City"
              dotColor="bg-green-500"
              onSelect={setPickup}
            />
            <CityInput
              placeholder="Select Delivery City"
              dotColor="bg-orange-500"
              onSelect={setDelivery}
            />
            <button
              onClick={handleCheckFare}
              className="shrink-0 rounded-xl px-8 py-4 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(120deg, #F47C20, #DD6A10)",
                boxShadow: "0 12px 26px rgba(244,124,32,0.4)",
              }}
            >
              Check Truck Fare
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
