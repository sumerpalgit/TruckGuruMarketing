"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { submitContactInquiry } from "@/lib/contact";
import CTATalkSection from "@/components/CTATalkSection";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    contactNumber: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.contactNumber) {
      setError("Name, email, and mobile number are required.");
      return;
    }
    setError("");
    setSubmitting(true);
    const result = await submitContactInquiry({
      name: form.name,
      email: form.email,
      contactNumber: form.contactNumber,
      city: form.city || undefined,
      message: form.message || undefined,
      type: "INQUIRY",
    });
    setSubmitting(false);
    if (result.success) {
      setSent(true);
      setForm({ name: "", city: "", contactNumber: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } else {
      setError(result.message || "Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="Contact TruckGuru — Truck Booking Helpline"
        description="Call for FTL truck booking, freight rates, or booking queries. Offices in Vadodara and Bangalore, serving businesses across 110+ cities in India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* ── Contact Info + Form ── */}
      <section className="bg-[#f5f7fa] px-10 py-[76px] max-[640px]:px-5 max-[640px]:py-14">
        <div className="mx-auto grid max-w-285 grid-cols-[1fr_1.15fr] items-stretch gap-8 max-[900px]:grid-cols-1">
          {/* ── Left: Contact Information ── */}
          <div className="flex flex-col rounded-[18px] border border-[#e4e9f2] bg-white p-[38px_34px] max-[426px]:p-6">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
              Contact Information
            </p>
            <h2 className="mb-[30px] text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-[#16233d]">
              Talk to our freight team
            </h2>

            <div className="flex flex-col gap-[26px]">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(243,134,52,0.10)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
                      fill="#16233d"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-[7px] text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#7c8aa5]">
                    Contact Number
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="tel:+917202045678"
                      className="text-[19px] font-extrabold text-[#16233d] hover:text-[#f38634]"
                    >
                      +91 72020 45678
                    </a>
                    <span className="text-[17px] text-[#c9d2e0]">|</span>
                    <a
                      href="tel:+917202034567"
                      className="text-[19px] font-extrabold text-[#16233d] hover:text-[#f38634]"
                    >
                      +91 72020 34567
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(243,134,52,0.10)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      fill="#16233d"
                    />
                    <path
                      d="M2 7l10 7 10-7"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-[7px] text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#7c8aa5]">
                    Mail Address
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:booking@truckguru.co.in"
                      className="text-[15px] font-bold text-[#f38634] hover:underline"
                    >
                      booking@truckguru.co.in
                    </a>
                    <span className="text-[15px] text-[#c9d2e0]">|</span>
                    <a
                      href="mailto:info@truckguru.co.in"
                      className="text-[15px] font-bold text-[#f38634] hover:underline"
                    >
                      info@truckguru.co.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(243,134,52,0.10)" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="white"
                      stroke="#d0e8f0"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#5bb8d4"
                      strokeWidth="1.5"
                      strokeDasharray="3 2"
                    />
                    <circle cx="12" cy="12" r="8" fill="white" />
                    <path
                      d="M12 7v5l3 3"
                      stroke="#5bb8d4"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="1.2" fill="#e05252" />
                  </svg>
                </div>
                <div>
                  <p className="mb-[7px] text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#7c8aa5]">
                    Working Hours
                  </p>
                  <p className="text-[15px] font-semibold leading-[1.7] text-[#3c4a66]">
                    Mon to Sat : 09:30 AM to 06:30 PM
                    <br />
                    Sunday : 09:30 AM to 02:30 PM
                  </p>
                </div>
              </div>

              {/* Office Locations */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(243,134,52,0.10)" }}
                >
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C5.13 0 2 3.13 2 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
                      fill="#e05252"
                    />
                    <circle cx="9" cy="7" r="2.8" fill="white" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#7c8aa5]">
                    Office Locations
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="border-l-[3px] border-l-[#f38634] pl-[14px]">
                      <p className="mb-[5px] text-[15px] font-extrabold uppercase tracking-[0.04em] text-[#16233d]">
                        Vadodara
                      </p>
                      <p className="text-[14px] leading-[1.65] text-[#5b6a86]">
                        507, Krishna Platina, New VIP Road, Opp. Earth Icon,
                        Vadodara, Gujarat 390018, India
                      </p>
                      <p className="mt-[6px] text-[13px] text-[#3c4a66]">
                        <strong className="font-extrabold">GSTIN:</strong>{" "}
                        24AALFT4556F1Z1
                      </p>
                    </div>
                    <div className="border-l-[3px] border-l-[#d7dee9] pl-[14px]">
                      <p className="mb-[5px] text-[15px] font-extrabold uppercase tracking-[0.04em] text-[#16233d]">
                        Bangalore
                      </p>
                      <p className="text-[14px] leading-[1.65] text-[#5b6a86]">
                        TruckGuru, Cinnabar Hills, Embassy Golf Links Business
                        Park, Challaghatta, Bengaluru, Karnataka 560071, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-auto flex gap-[10px] border-t border-[#eceff5] pt-[26px] mt-[30px]">
              <a
                href="https://wa.me/917202045678"
                className="flex-1 rounded-[10px] bg-[#0d1b34] py-[13px] text-center text-[14px] font-bold text-white transition-opacity hover:opacity-90"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+917202045678"
                className="flex-1 rounded-[10px] bg-[#f38634] py-[13px] text-center text-[14px] font-bold text-white transition-opacity hover:opacity-90"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* ── Right: Send Enquiry Form ── */}
          <div className="rounded-[18px] border border-[#e4e9f2] bg-white p-[38px_34px] max-[426px]:p-6">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
              Send An Enquiry
            </p>
            <h2 className="mb-2 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-[#16233d]">
              Tell us about your shipment
            </h2>
            <p className="mb-[26px] text-[15px] leading-[1.6] text-[#5b6a86]">
              Share your route and load. Our team confirms a rate before any
              truck is dispatched — no charges added at the loading dock.
            </p>

            <div className="grid grid-cols-2 gap-4 max-[500px]:grid-cols-1">
              {[
                {
                  id: "name",
                  label: "Company / Personal Name",
                  placeholder: "Your name",
                  type: "text",
                },
                {
                  id: "city",
                  label: "City",
                  placeholder: "Your city",
                  type: "text",
                },
                {
                  id: "contactNumber",
                  label: "Mobile Number",
                  placeholder: "+91",
                  type: "tel",
                },
                {
                  id: "email",
                  label: "Email",
                  placeholder: "you@company.com",
                  type: "email",
                },
              ].map(({ id, label, placeholder, type }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="mb-[7px] block text-[12px] font-bold text-[#3c4a66]"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full rounded-[10px] border border-[#dbe2ee] bg-[#fbfcfe] px-[14px] py-[13px] text-[14px] text-[#16233d] outline-none focus:border-[#f38634] focus:ring-1 focus:ring-[#f38634]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-[7px] block text-[12px] font-bold text-[#3c4a66]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type of goods, dispatch date, or any special requirement"
                value={form.message}
                onChange={handleChange}
                className="w-full resize-y rounded-[10px] border border-[#dbe2ee] bg-[#fbfcfe] px-[14px] py-[13px] text-[14px] text-[#16233d] outline-none focus:border-[#f38634] focus:ring-1 focus:ring-[#f38634]"
              />
            </div>

            {/* Error box */}
            {error && (
              <div className="mt-4 flex items-start gap-3 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-9a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0V9Zm1 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[13px] font-semibold text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* Success box */}
            {sent && (
              <div className="mt-4 flex items-start gap-3 rounded-[10px] border border-green-200 bg-green-50 px-4 py-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[13px] font-semibold text-green-700">
                  Your enquiry has been submitted! Our team will get back to you
                  shortly!
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || sent}
              className="mt-[22px] w-full rounded-[10px] bg-[#f38634] py-4 text-[15px] font-extrabold tracking-[0.03em] text-white transition-all hover:bg-[#e0752a] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sent
                ? "ENQUIRY SENT ✓"
                : submitting
                  ? "SENDING..."
                  : "GET MY FREIGHT RATE"}
            </button>

            <p className="mt-[14px] text-center text-[12.5px] text-[#7c8aa5]">
              Typically replies in 5 minutes · Customer Support 9:30 AM to 6:30
              PM
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="bg-white px-10 py-[82px] max-[640px]:px-5 max-[640px]:py-14">
        <div className="mx-auto max-w-285">
          {/* Heading */}
          <div className="mb-[46px] text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
              What We Handle
            </p>
            <h2 className="mb-[14px] mt-3 text-[38px] font-extrabold leading-tight tracking-[-0.02em] text-[#16233d] max-[640px]:text-[28px]">
              Our Services
            </h2>
            <p className="mx-auto max-w-[760px] text-[16px] leading-[1.65] text-[#5b6a86] max-[640px]:text-[14px]">
              TruckGuru handles full truckload intercity goods transport across
              110+ cities in India. Pick your truck type, get the rate upfront,
              and book in minutes — online, through the app, or by phone.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-5 gap-5 max-[900px]:grid-cols-3 max-[580px]:grid-cols-2 max-[360px]:grid-cols-1">
            {[
              {
                img: "https://truckguru.co.in/new_assets/img/solution/01.png",
                title: "FTL Truck Booking",
                desc: "Your goods, your truck — direct pickup to delivery, no consolidation stops.",
              },
              {
                img: "https://truckguru.co.in/new_assets/img/solution/02.png",
                title: "Freight Rate Calculator",
                desc: "Check the transport cost online before booking. Rates from Rs.26/km.",
              },
              {
                img: "https://truckguru.co.in/new_assets/img/solution/04.png",
                title: "Multi-City Routes",
                desc: "Multiple pickup or drop points planned and priced before dispatch.",
              },
              {
                img: "https://truckguru.co.in/new_assets/img/solution/05.png",
                title: "Fleet Selection",
                desc: "Tata Ace to 32 FT container — 250 kg to 16 ton categories.",
              },
              {
                img: "https://truckguru.co.in/new_assets/img/solution/06.png",
                title: "Credit Facility",
                desc: "Regular shippers can move on agreed credit terms with digital invoicing.",
              },
            ].map(({ img, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-[#e4e9f2] bg-[#f8fafc] p-[28px_22px] text-center transition-all duration-[250ms] hover:-translate-y-[6px] hover:border-[#f38634] hover:bg-white hover:shadow-[0_14px_30px_rgba(13,27,52,0.10)]"
              >
                <Image
                  src={img}
                  alt={title}
                  width={56}
                  height={56}
                  className="mx-auto mb-4 block h-14 w-auto"
                />
                <h3 className="mb-2 text-[16px] font-extrabold text-[#16233d]">
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[#5b6a86]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Find Us ── */}
      <section className="bg-[#f5f7fa] px-10 py-20.5 max-[640px]:px-5 max-[640px]:py-14">
        <div className="mx-auto max-w-285">
          {/* Heading */}
          <div className="mb-11 text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
              Office Locations
            </p>
            <h2 className="mb-3 mt-3 text-[38px] font-extrabold leading-tight tracking-[-0.02em] text-[#16233d] max-[640px]:text-[28px]">
              Find Us
            </h2>
            <p className="text-[16px] text-[#5b6a86] max-[640px]:text-[14px]">
              Visit our office or call +91 72020 45678 for instant freight
              quotes
            </p>
          </div>

          {/* Maps grid */}
          <div className="grid grid-cols-2 gap-7 max-[768px]:grid-cols-1">
            {[
              {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.5!2d73.2262!3d22.3184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc567eae75419%3A0xa6b695aa3f2b26f8!2sTruckGuru!5e0!3m2!1sen!2sin!4v1720780000000",
                title: "TruckGuru Vadodara office map",
                heading: "Vadodara (Head Office)",
                address:
                  "507, Krishna Platina, New VIP Road,\nOpp. Earth Icon, Vadodara, Gujarat 390018",
                directions:
                  "https://www.google.com/maps/place/?q=place_id:ChIJGVTn6mfFXzkR-CYrP6qVtqY",
              },
              {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6973!3d12.9516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d8b0c2f08d%3A0x8c7b2cbb0c27e549!2sEmbassy+Golf+Links+Business+Park!5e0!3m2!1sen!2sin!4v1720780000000",
                title: "TruckGuru Bangalore office map",
                heading: "Bangalore",
                address:
                  "Cinnabar Hills, Embassy Golf Links Business Park,\nChallaghatta, Bengaluru, Karnataka 560071",
                directions:
                  "https://www.google.com/maps/search/Embassy+Golf+Links+Business+Park+Challaghatta+Bengaluru",
              },
            ].map(({ src, title, heading, address, directions }) => (
              <div
                key={heading}
                className="overflow-hidden rounded-[18px] border border-[#e4e9f2] bg-white"
              >
                <iframe
                  src={src}
                  title={title}
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  allowFullScreen
                />
                <div className="px-6.5 pb-6.5 pt-6">
                  <h3 className="mb-2.5 text-[19px] font-extrabold text-[#16233d]">
                    {heading}
                  </h3>
                  <p className="mb-3.5 whitespace-pre-line text-[14.5px] leading-[1.65] text-[#5b6a86]">
                    {address}
                  </p>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-extrabold text-[#f38634] hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTATalkSection />
    </>
  );
}
