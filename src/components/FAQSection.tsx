"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs?: FAQItem[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs = [
    {
      question: "What is TruckGuru?",
      answer:
        "TruckGuru is a B2B full truckload (FTL) intercity truck booking platform headquartered in Vadodara, Gujarat. Businesses can book trucks from Tata Ace (1,250 kg) to 32FT containers across 110+ cities in India at rates starting from Rs.26/km. The platform shows confirmed pricing before booking, provides live GPS tracking on every shipment, and generates digital LR, invoice, and POD automatically.",
    },
    {
      question: "How does TruckGuru benefit my business?",
      answer:
        "TruckGuru offers transparent pricing with no hidden charges, real-time tracking, instant booking confirmation, and automated documentation. Save time on logistics coordination and reduce transportation costs with our competitive rates across India.",
    },
    {
      question: "How can I book a truck through TruckGuru?",
      answer:
        "It takes about two minutes:\n\n1. Open the TruckGuru app (Play Store or App Store) or visit truckguru.co.in.\n\n2. Register or log in to your account.\n\n3. Enter pickup city, delivery city, and the type of goods you are shipping.\n\n4. Pick the truck size that fits your load: Tata Ace for smaller consignments, Eicher 14FT/17FT for mid-size, or a 32FT container for bulk.\n\n5. Review the fare shown on screen. No hidden charges get added later.\n\n6. Confirm the booking. You can track the truck live from that point until delivery.\n\nIf you get stuck at any step, call us at +91-7202045678 and we will complete the booking for you.",
    },
    {
      question: "How can I check my transportation cost?",
      answer:
        "Enter your pickup city, delivery city, and approximate load weight on our freight calculator. You will see a rate range instantly, Once you confirm the booking, we share the final rate before any truck is dispatched.",
    },
    {
      question: "What types of trucks are available on TruckGuru?",
      answer:
        "We cover the full range of FTL intercity loads:\n\n• Tata Ace / Bada Dost / Mahindra Pickup, up to 1.5 ton, Rs.26-29/km\n\n• Eicher 14FT, 3.5 ton capacity, Rs.31-35/km\n\n• Eicher 17FT, 5 ton capacity, Rs.34-37/km\n\n• Eicher 19FT, 7 ton capacity, Rs.37-41/km\n\n• 20FT Container, 6.5 ton, Rs.41-45/km\n\n• 32FT Container, 7 ton to 18 ton variants, Rs.55-91/km depending on load capacity\n\nNot sure which one fits? Tell us the weight and type of goods, our team will recommend the right truck.",
    },
    {
      question: "What is Full Truckload (FTL) service?",
      answer:
        "FTL means the entire truck carries only your goods. It picks up from your location and goes directly to the destination, no stops to consolidate other shipments, no detours. This is the right choice when you have enough volume to fill, or mostly fill, a truck, or when transit time matters.",
    },
    {
      question: "Can I track my truck in real time?",
      answer:
        "Yes. Every truck on our platform carries GPS. Once your shipment moves, you can see its exact location from the app, no need to call the driver every few hours. You can also share the tracking link with your buyer or warehouse team so they know when to expect the delivery and can plan unloading accordingly.",
    },
    {
      question: "Can I book a truck in advance?",
      answer:
        "Yes. Select your dispatch date when placing the booking and we will arrange the truck for that day. Advance booking helps during peak seasons, October through December, when festival demand and year-end dispatches tighten truck availability.",
    },
    {
      question: "Can I place a booking with multiple pickup or drop points?",
      answer:
        "Yes. If you need to collect goods from more than one location or deliver to multiple destinations in a single trip, mention the stops when placing your booking. Our team will plan the route and confirm the fare covering all points before dispatch.",
    },
    {
      question: "Can I cancel my booking? Is there a cancellation charge?",
      answer:
        "You can cancel before vehicle and driver details are shared, no charge applies. Once we assign a truck and share the details, the booking amount is non-refundable because the driver has already committed time and fuel.",
    },
    {
      question: "Do you provide loading, unloading, or packing services?",
      answer:
        "Our truck fare covers transportation only. Loading, unloading, and packing are arranged separately at your end. If you need help finding labour at a specific location, reach out to our team, we can usually connect you with someone in the area who handles it regularly.",
    },
  ],
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-285">
        {/* Heading */}
        <h2 className="mb-12 text-center lg:text-4xl text-2xl font-extrabold text-[#062A63] max-[640px]:text-2xl">
          {title}
        </h2>

        {/* FAQ Items */}
        <div className="mx-auto space-y-3">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all bg-white border border-[rgba(6,42,99,0.10)]"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full lg:px-6 lg:py-6 px-4 py-3 flex items-center justify-between text-left transition-colors  ${
                  openIndex === index
                    ? "bg-[rgba(244,124,32,0.08)]"
                    : "hover:bg-[rgba(244,124,32,0.08)]"
                }`}
              >
                <span className="text-[16px] font-semibold text-[#062A63] font-manrope">
                  {faq.question}
                </span>
                <span
                  className={`text-lg text-[#062A63] transition-transform duration-300 shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492 492"
                    width="14"
                    height="14"
                    fill="currentColor"
                  >
                    <path d="M484.132 124.986l-16.116-16.228a26.9 26.9 0 0 0-19.032-7.86 26.9 26.9 0 0 0-19.036 7.86L246.108 292.606 62.056 108.554a26.9 26.9 0 0 0-19.028-7.856 26.9 26.9 0 0 0-19.036 7.856L7.872 124.682c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224.004-7.212-2.788-14.068-7.86-19.128z" />
                  </svg>
                </span>
              </button>

              {/* Answer - Collapsible */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-auto" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-center">
                  <div className="text-[15px] leading-relaxed text-[#44506A] font-inter whitespace-pre-wrap">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
