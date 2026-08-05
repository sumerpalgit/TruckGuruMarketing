"use client";

import { useState } from "react";
import Link from "next/link";
import type { CmsHeader } from "@/lib/types";

interface HeaderProps {
  headers?: CmsHeader[];
}

export default function Header({ headers = [] }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Transform CMS headers to navigation items
  const navItems = headers
    .map((header) => ({
      label: header.name,
      href: header.url,
      items: header.children?.map((child) => ({ name: child.name, url: child.url })) || [],
    }))
    .concat({ label: "Contact", href: "/contact", items: [] });

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="mx-auto h-22 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/image.png"
            alt="TruckGuru Logo"
            className="h-[42px] w-[140px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 font-[500] text-[16px] !text-[#122036] uppercase tracking-[.06em]">
          {navItems.map((item) =>
            item.items && item.items.length > 0 ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 py-8 hover:text-orange-500 transition-colors font-inter uppercase">
                  <span className="mt-0.5 transition-transform duration-200 group-hover:rotate-180">
                    <svg
                      className="w-[.72rem] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                    </svg>
                  </span>
                  <span className="hover:text-[var(--tg-primary)] !py-1 !font-[600] rounded-2xl hover:bg-[rgba(6,42,99,0.06)] hover:no-underline text-[#122036]">
                    {item.label}
                  </span>
                </button>

                {/* Dropdown: opens on hover of the whole group, stays open while hovering the panel */}
                <div
                  className="absolute left-0 top-full w-56 bg-white
                             opacity-0 invisible translate-y-1
                             group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                             transition-all duration-200 py-2 normal-case font-normal
                             list-none m-0 !p-[10px] rounded-[14px] shadow-[0_2px_6px_rgba(13,27,42,0.07),0_14px_34px_rgba(13,27,42,0.10)] min-w-[236px]
                             "
                >
                  {item.items.map((child) => (
                    <Link
                      key={child.url}
                      href={child.url}
                      className="block !px-5 !py-1 text-center text-[16px] text-[#122036]! rounded-md  hover:bg-[rgba(244,124,32,0.1)] hover:text-[#F47C20] transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="hover:text-orange-500 transition-colors !font-[600]"
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="hidden lg:block text-center">
            <p className="text-[10px] uppercase tracking-widest text-[#44506A]">
              Get In Touch
            </p>
            <h3 className="text-md font-bold text-[#062A63]">72020 45678</h3>
          </div>
        </nav>

        {/* Contact */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-[#143A66]"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col py-3">
            {navItems.map((item) =>
              item.items && item.items.length > 0 ? (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label,
                      )
                    }
                    className="w-full flex items-center justify-between px-5 py-3 font-semibold text-gray-800"
                  >
                    {item.label}
                    <span
                      className={`text-xs transition-transform duration-200 ${
                        mobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {mobileDropdown === item.label && (
                    <div className="bg-gray-50 pb-2">
                      {item.items.map((child) => (
                        <Link
                          key={child.url}
                          href={child.url}
                          onClick={() => setOpen(false)}
                          className="block px-8 py-2.5 text-sm text-gray-600 hover:text-orange-500"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 font-semibold text-gray-800 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ),
            )}

            <div className="border-t my-3"></div>

            <div className="px-5">
              <p className="text-xs uppercase text-gray-400">Get In Touch</p>
              <h3 className="text-xl font-bold text-[#143A66]">72020 45678</h3>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
