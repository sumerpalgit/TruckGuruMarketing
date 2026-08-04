"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import OurServicesCard from "@/components/OurServicesCard";
import CTATalkSection from "@/components/CTATalkSection";
import { submitContactInquiry } from "@/lib/contact";

export const BulkInquiry = () => {
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    email: "",
    companyName: "",
    goodsType: "",
    city: "",
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
      companyName: form.companyName || undefined,
      goodsType: form.goodsType || undefined,
      city: form.city || undefined,
      message: form.message || undefined,
      type: "BULK_INQUIRY",
    });
    setSubmitting(false);
    if (result.success) {
      setSent(true);
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <PageHero
        badge="Bulk Inquiry"
        title="Bulk Truck Booking for Your Business"
        description="Send us your bulk freight requirements and we'll get back to you with competitive rates for regular high-volume shipments."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Bulk Inquiry" }]}
      />

      {/* ── Bulk Inquiry Form + Services ── */}
      <section className="bg-[#f5f7fa] px-10 py-19 max-[640px]:px-5 max-[640px]:py-14">
        <div className="mx-auto grid max-w-285 grid-cols-[1.55fr_1fr] items-start gap-8 max-[900px]:grid-cols-1">

          {/* ── Left: Form ── */}
          <div className="rounded-[18px] border border-[#e4e9f2] bg-white p-[38px_34px] max-[426px]:p-6">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
              Bulk Enquiry
            </p>
            <h2 className="mb-1.5 text-[26px] font-extrabold leading-tight tracking-[-0.01em] text-[#16233d]">
              Please fill out the form below
            </h2>
            <p className="mb-6.5 text-[15px] leading-[1.6] text-[#5b6a86]">
              We will get back to you shortly with competitive bulk freight rates.
            </p>

            <div className="grid grid-cols-2 gap-4 max-[500px]:grid-cols-1">
              {[
                {
                  id: "name",
                  label: "Name",
                  placeholder: "Your name",
                  type: "text",
                },
                {
                  id: "contactNumber",
                  label: "Mobile No",
                  placeholder: "+91",
                  type: "tel",
                },
                {
                  id: "email",
                  label: "Your email",
                  placeholder: "you@company.com",
                  type: "email",
                },
                {
                  id: "companyName",
                  label: "Company Name",
                  placeholder: "Company name",
                  type: "text",
                },
                {
                  id: "goodsType",
                  label: "Goods Type",
                  placeholder: "Type of goods",
                  type: "text",
                },
                {
                  id: "city",
                  label: "Location",
                  placeholder: "Your city",
                  type: "text",
                },
              ].map(({ id, label, placeholder, type }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="mb-1.75 block text-[12px] font-bold text-[#3c4a66]"
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
                    className="w-full rounded-[10px] border border-[#dbe2ee] bg-[#fbfcfe] px-3.5 py-3.25 text-[14px] text-[#16233d] outline-none focus:border-[#f38634] focus:ring-1 focus:ring-[#f38634]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-[7px] block text-[12px] font-bold text-[#3c4a66]"
              >
                Write message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Describe your bulk shipping requirements, routes, frequency, or any special cargo needs..."
                value={form.message}
                onChange={handleChange}
                className="w-full resize-y rounded-[10px] border border-[#dbe2ee] bg-[#fbfcfe] px-3.5 py-3.25 text-[14px] text-[#16233d] outline-none focus:border-[#f38634] focus:ring-1 focus:ring-[#f38634]"
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
                <p className="text-[13px] font-semibold text-red-600">{error}</p>
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
                  Your bulk inquiry has been submitted! Our team will contact you
                  shortly with rates.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || sent}
              className="mt-5.5 w-full rounded-[10px] bg-[#f38634] py-4 text-[15px] font-extrabold tracking-[0.03em] text-white transition-all hover:bg-[#e0752a] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sent
                ? "SUBMITTED ✓"
                : submitting
                  ? "SUBMITTING..."
                  : "Submit"}
            </button>
          </div>

          {/* ── Right: Our Services Card ── */}
          <div className="sticky top-24">
            <OurServicesCard />
          </div>
        </div>
      </section>

      <CTATalkSection />
    </>
  );
};
