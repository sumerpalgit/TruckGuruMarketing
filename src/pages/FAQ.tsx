"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import OurServicesCard from "@/components/OurServicesCard";
import CTATalkSection from "@/components/CTATalkSection";

interface FaqItem {
  n: number;
  cat: string;
  q: string;
  a: string;
  linkLabel?: string;
  linkHref?: string;
}

const FAQS: FaqItem[] = [
  {
    n: 1,
    cat: "booking",
    q: "How do I request a booking?",
    a: "You can place a booking request on our website, through the TruckGuru app, or by calling our customer care number 72020 45678. Once we receive your request, our team verifies the details and assigns the nearest available truck to your pickup location.",
  },
  {
    n: 2,
    cat: "pricing",
    q: "How would I know my fare charges and bill amount?",
    a: "Once your booking request is received, you will be notified of the approximate distance your goods will travel. Your bill is calculated based on that distance and the truck type selected. You can also use our online fare calculator to get an instant estimate.",
    linkLabel: "Freight calculator",
    linkHref: "https://truckguru.co.in/freight-calculator",
  },
  {
    n: 3,
    cat: "pricing",
    q: "Why do I need to pay a token amount for booking confirmation?",
    a: "The token amount confirms that your goods will be loaded once the truck reaches your pickup location. Without it, drivers risk arriving at the site and returning empty, which increases costs for everyone involved.",
  },
  {
    n: 4,
    cat: "pricing",
    q: "What are the different modes of payment accepted?",
    a: "We accept NEFT, IMPS, UPI, Paytm, and all major debit and credit cards. For the token amount specifically, NEFT, IMPS, UPI, or Paytm are preferred since the confirmation needs to reflect quickly in our system.",
  },
  {
    n: 5,
    cat: "pricing",
    q: "How will I receive my invoice?",
    a: "An auto-generated invoice is sent to your registered email ID once the consignment has been delivered. If you need a proforma invoice before dispatch, let our executive know at the time of booking.",
  },
  {
    n: 6,
    cat: "booking",
    q: "Can I place a booking with multi-point pickup and drop?",
    a: "Yes. Extra charges apply for each additional pickup or drop point because of the added distance and time. Our team will share the additional cost at the time of booking so there are no surprises later.",
  },
  {
    n: 7,
    cat: "booking",
    q: "How can I cancel my booking? Will I be charged a cancellation fee?",
    a: "To cancel, call our customer care number listed on the website. Cancellation is processed as per our terms and conditions. If the truck has already reached your pickup location, a cancellation fee will apply to cover the driver's fuel and time.",
  },
  {
    n: 8,
    cat: "booking",
    q: "Is there a possibility of the truck being a no-show after booking confirmation?",
    a: "We work to honour every confirmed booking. In rare cases where unforeseen circumstances prevent it — our team will notify you well before the scheduled pickup time and arrange a replacement vehicle.",
  },
  {
    n: 9,
    cat: "booking",
    q: "Can I change the vehicle type after it has reached the pickup point?",
    a: "You can, but it involves extra cost. The original truck's trip will be treated as a cancellation, and charges will apply as per our terms. To avoid this, confirm your material weight and dimensions with our executive before the truck is dispatched.",
  },
  {
    n: 10,
    cat: "trucks",
    q: "Do you provide loading, unloading, and packing services?",
    a: "Our service covers transportation of goods only. If you need labour for loading, unloading, or packing, we can help arrange it at an additional cost. However, we do not guarantee the availability or quality of third-party labour services.",
  },
  {
    n: 11,
    cat: "booking",
    q: "How far in advance do I need to book?",
    a: "We accept bookings with as little as one hour's notice before your desired pickup time. That said, booking 4 to 24 hours ahead gives us a better chance of matching the exact truck type you need, especially for 32ft containers or during peak season months like October–December.",
  },
  {
    n: 12,
    cat: "pricing",
    q: "What are the payment terms?",
    a: "For advance bookings, a token amount is required via NEFT, IMPS, UPI, or Paytm. Once the truck arrives at the pickup location, 90% of the fare is payable at the time of loading. The remaining balance is due at the destination before unloading begins.",
  },
  {
    n: 13,
    cat: "docs",
    q: "Who will generate the e-Way Bill?",
    a: "The consignor or consignee must generate Part A and Part B of the e-Way Bill before the goods move. This is mandatory under GST rules for consignments valued above Rs.50,000. Note that e-Way Bills are not required for household goods.",
  },
  {
    n: 14,
    cat: "pricing",
    q: "Is the estimate fare shown on the website the final fare?",
    a: "No. The website and app show an estimated cost based on standard distance calculations. The final fare is confirmed by our executive after verifying your exact pickup and drop location, material weight, and goods type. The final rate usually stays close to the estimate, but can vary for locations that are off-highway or require detours.",
  },
  {
    n: 15,
    cat: "pricing",
    q: "What are the waiting charges?",
    a: "If the truck reaches your location and loading is delayed, waiting charges range from Rs.1,000 to Rs.5,000 per day depending on the vehicle type. A Tata Ace waiting charge is lower than a 32ft container, for obvious reasons. If the vehicle is not loaded at all and returns empty, the customer is liable for driver fuel charges plus the waiting charge.",
  },
  {
    n: 16,
    cat: "booking",
    q: "Who will contact me after I place a booking or a callback request?",
    a: "One of our in-house executives will call you back to verify your details. TruckGuru LLP does not share client data with any outside agencies. After confirmation, the booking amount must be deposited only into the TruckGuru LLP account for final vehicle placement. For queries, email us at booking@truckguru.co.in or call 7202045678.",
  },
  {
    n: 17,
    cat: "trucks",
    q: "Do you provide parcel, bike, courier, or car transport service?",
    a: "No. TruckGuru provides full truckload (FTL) intercity goods transport only. We do not handle parcels, courier shipments, bike transport, car transport, or any automobile movement.",
  },
  {
    n: 18,
    cat: "pricing",
    q: "What are the GST charges on the fare amount?",
    a: "GST on goods transport is payable under the Reverse Charge Mechanism (RCM) at 5%. This means the recipient of the service (the shipper) is responsible for paying and filing the GST, not TruckGuru.",
  },
  {
    n: 19,
    cat: "pricing",
    q: "Do you provide credit facility on payments?",
    a: "Yes, we offer credit facility for regular shippers. To apply, reach out to our team or write to cs@truckguru.co.in. A contract needs to be signed, and the facility is activated after approval from our finance team. Typically, businesses shipping 4-5 loads per month or more qualify.",
  },
  {
    n: 20,
    cat: "trucks",
    q: "What truck sizes does TruckGuru offer?",
    a: "Our fleet covers a wide range: Tata Ace (1,250 kg), Bada Dost (1.5 ton), Mahindra Pickup (up to 1.5 ton), 14ft Eicher (3.5 ton), 17ft Eicher (5 ton), 19ft Eicher (7 ton), 20ft Container (6.5 ton), and 32ft Containers in three variants — SXL (7-8 ton), MXL (16 ton), and MXL (18 ton).",
    linkLabel: "Truck size guide",
    linkHref: "https://truckguru.co.in/truck-size",
  },
  {
    n: 21,
    cat: "trucks",
    q: "How do I choose the right truck size for my goods?",
    a: "Share the weight and approximate volume of your goods with our executive. A common mistake shippers make is choosing a truck based on weight alone — bulky but light items like furniture or packaging material often need a larger truck even though the weight is low. Our team will recommend the right fit based on both weight and dimensions.",
  },
  {
    n: 22,
    cat: "trucks",
    q: "What types of goods can I transport through TruckGuru?",
    a: "We transport commercial and industrial goods — machinery, raw materials, FMCG products, textiles, auto parts, building materials, electronics, agriculture produce, chemicals (non-hazardous), and similar cargo. We do not transport household shifting items, personal belongings for relocation, or hazardous materials that require special permits.",
  },
  {
    n: 23,
    cat: "booking",
    q: "Can I track my shipment after dispatch?",
    a: "Yes. Once the truck is loaded and dispatched, our team shares regular updates on the shipment status. You can also call our customer care number at any point to get the truck's current location and expected arrival time.",
  },
  {
    n: 24,
    cat: "trucks",
    q: "What happens if my goods are damaged during transit?",
    a: "Report any damage immediately upon delivery to our customer care team with photographs. We investigate each claim on a case-by-case basis. We strongly recommend that shippers arrange their own transit insurance for high-value consignments, as TruckGuru's liability is limited to the terms agreed at the time of booking.",
  },
  {
    n: 25,
    cat: "booking",
    q: "Do you operate on Sundays and public holidays?",
    a: "Trucks on the road continue running on Sundays and holidays. However, loading and unloading at certain industrial estates or warehouses may be restricted on holidays depending on local rules. Our customer support is available seven days a week to handle bookings and queries.",
  },
  {
    n: 26,
    cat: "docs",
    q: "What documents do I need to keep ready before the truck arrives?",
    a: "Keep your GST invoice, e-Way Bill (for consignments over Rs.50,000), and a packing list ready before the truck arrives. Missing paperwork is one of the most common reasons for loading delays, which can trigger waiting charges. If your shipment requires a Ship-To GSTIN on the e-Way Bill, make sure that is updated before dispatch.",
  },
  {
    n: 27,
    cat: "routes",
    q: "Which cities does TruckGuru operate in?",
    a: "We cover all major intercity routes across India. Our strongest network is across Ahmedabad, Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Surat, Vadodara, Jaipur, Nagpur, Indore, Lucknow, Kanpur, and Kochi. For routes between smaller cities, call us — we can usually arrange a truck within 24-48 hours.",
    linkLabel: "Transportation services",
    linkHref: "https://truckguru.co.in/transportation-services",
  },
  {
    n: 28,
    cat: "routes",
    q: "What is the typical transit time between major cities?",
    a: "Transit time depends on the route distance and road conditions. As a rough guide: Ahmedabad to Mumbai (about 530 km) takes 10-14 hours, Delhi to Mumbai (about 1,400 km) takes 24-30 hours, and Bangalore to Chennai (about 350 km) takes 6-8 hours. These are road times — actual delivery depends on loading and unloading schedules at both ends.",
  },
  {
    n: 29,
    cat: "routes",
    q: "Is there a minimum distance requirement for booking?",
    a: "TruckGuru is an intercity transport platform. We do not handle within-city or local deliveries. There is no fixed minimum kilometre requirement, but the pickup and drop locations must be in different cities. For routes under 100 km, the cost structure may differ slightly — our executive will confirm the exact fare.",
  },
  {
    n: 30,
    cat: "docs",
    q: "How do I get a TruckGuru receipt for my company's accounts?",
    a: "Every completed shipment generates a GST-compliant invoice sent to your registered email. If your accounts team needs a specific format, a copy of the LR (Lorry Receipt), or a consolidated monthly statement for multiple shipments, write to cs@truckguru.co.in and we will arrange it within 1-2 working days.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const allOpen = FAQS.length > 0 && FAQS.every((f) => open[f.n]);

  const toggleAll = () => {
    if (allOpen) {
      setOpen({});
    } else {
      const all: Record<number, boolean> = {};
      FAQS.forEach((f) => {
        all[f.n] = true;
      });
      setOpen(all);
    }
  };

  const toggle = (n: number) => {
    setOpen((prev) => ({ ...prev, [n]: !prev[n] }));
  };

  return (
    <>
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Booking, rates, payment terms, e-Way Bills and truck sizes — 30 answers about TruckGuru's FTL transport service. If you do not find your answer here, contact our customer care team who will be happy to help."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      {/* ── FAQ Accordion + Sidebar ── */}
      <section className="bg-[#f5f7fa] px-10 py-19 max-[640px]:px-5 max-[640px]:py-14">
        <div className="mx-auto max-w-285">
          <div className="grid grid-cols-[1.6fr_0.62fr] items-start gap-[34px] max-[900px]:grid-cols-1">
            {/* Left: Accordion list */}
            <div>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[13.5px] font-semibold text-[#5b6a86]">
                  30 questions about booking, rates and documentation
                </p>
                <button
                  type="button"
                  onClick={toggleAll}
                  className="cursor-pointer border-none bg-transparent text-[13px] font-extrabold tracking-[0.04em] text-[#f38634]"
                >
                  {allOpen ? "COLLAPSE ALL" : "EXPAND ALL"}
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {FAQS.map(({ n, q, a, linkLabel, linkHref }) => {
                  const isOpen = !!open[n];
                  return (
                    <div
                      key={n}
                      className="overflow-hidden rounded-[14px] border bg-white transition-all duration-200"
                      style={{
                        borderColor: isOpen ? "#f8c99f" : "#e9edf4",
                        boxShadow: isOpen
                          ? "0 10px 26px rgba(13,27,52,0.07)"
                          : "none",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(n)}
                        className="flex w-full cursor-pointer items-center gap-[14px] border-none bg-transparent px-[22px] py-5 text-left"
                      >
                        <span className="min-w-[28px] shrink-0 text-[14px] font-extrabold text-[#f38634]">
                          {n}.
                        </span>
                        <span className="flex-1 text-[15.5px] font-bold leading-[1.5] text-[#16233d]">
                          {q}
                        </span>
                        <span
                          className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-[18px] font-bold transition-all duration-[250ms]"
                          style={{
                            background: isOpen ? "#f38634" : "#f3f5f9",
                            color: isOpen ? "#ffffff" : "#7c8aa5",
                          }}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-[22px] pb-[22px] pl-[64px]">
                          <div className="border-t border-[#eef1f6] pt-4">
                            <p className="m-0 text-[15px] leading-[1.8] text-[#5b6a86]">
                              {a}
                            </p>
                            {linkLabel && linkHref && (
                              <a
                                href={linkHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3.5 inline-block text-[14px] font-extrabold text-[#f38634] hover:underline"
                              >
                                {linkLabel} →
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Sticky sidebar */}
            <div className="sticky top-[104px] flex flex-col gap-[22px] max-[900px]:static">
              <OurServicesCard />
            </div>
          </div>
        </div>
      </section>

      <CTATalkSection />
    </>
  );
}
