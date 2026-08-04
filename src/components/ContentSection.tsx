'use client';

const WHY_ITEMS = [
  {
    title: 'Simplified Truck Booking Process',
    body: 'Enter pickup city, delivery city, and cargo weight. Select your truck. Get a confirmed rate. The entire booking takes under 5 minutes online or on the app — no calls, no negotiation after loading.',
  },
  {
    title: 'Diverse Truck Options',
    body: 'Vehicle categories covering 250 kg to 16 ton, TruckTypes - Tata Ace, Mahindra Pickup, Bada Dost, 14FT - 17FT Eicher, 20ft Closed/Open truck, and 32ft container. Every category available for Intercity FTL bookings across India.',
  },
  {
    title: 'Nationwide Coverage',
    body: 'TruckGuru connects major commercial and industrial cities across India. Metro corridors, Tier-2 industrial cities, and port-linked freight origins — all available for booking through the same platform.',
  },
  {
    title: 'Dedicated Customer Service',
    body: 'A support team that knows freight, not just the booking system. Queries on e-way bills, transit delays, or documentation handled by people who understand the full shipment cycle.',
  },
];

interface Props {
  theme?: 'dark' | 'light';
}

export default function ContentSection({ theme = 'light' }: Props) {
  return (
    <section data-theme={theme} className={`py-23 max-[980px]:py-[70px] max-[426px]:py-10 ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-285 px-4">

        {/* Card */}
        <div
          className="mx-auto max-w-[880px] rounded-[18px] px-12 pb-12 pt-20
            border border-[rgba(6,42,99,0.10)] bg-white shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)]
            dark-theme:bg-[rgba(255,255,255,0.04)] dark-theme:border-[rgba(255,255,255,0.10)] dark-theme:shadow-none
            max-[640px]:px-[22px] max-[426px]:rounded-xl max-[426px]:px-4 max-[426px]:pt-[22px] max-[426px]:pb-[22px]"
        >
          {/* Main heading */}
          <h2
            className="mb-[50px] border-b-2 border-[#F38634] pb-1.5 text-center text-2xl font-bold text-[#064b76] dark-theme:text-white
              max-[426px]:text-[17px]"
          >
            Online Truck Transport Services India for Businesses
          </h2>

          {/* Intro paragraphs */}
          <p className="mb-5 font-[Arial,sans-serif] text-[15px] font-medium leading-[1.8] text-[#444444] dark-theme:text-[rgba(255,255,255,0.76)]">
            TruckGuru is a provider of{' '}
            <a href="#" className="text-[#0563c1] underline dark-theme:text-[#4fd1e8]">
              online truck booking in India
            </a>{' '}
            for businesses. Confirmed rates before dispatch, GPS tracking through delivery, and digital
            documentation — these are the basics every B2B shipper should expect. TruckGuru delivers them.
          </p>
          <p className="mb-5 font-[Arial,sans-serif] text-[15px] font-medium leading-[1.8] text-[#444444] dark-theme:text-[rgba(255,255,255,0.76)]">
            Our online booking platform simplifies the entire{' '}
            <a href="#" className="text-[#0563c1] underline dark-theme:text-[#4fd1e8]">
              truck booking process
            </a>
            . With a few clicks, shippers can view available truck options, select the right vehicle for
            their consignment, and get a confirmed price for their route before committing.
          </p>

          {/* Section: Verified Trucks */}
          <h3 className="mb-3 mt-[65px] border-b-2 border-[#F38634] pb-2 font-[Arial,sans-serif] text-[17px] font-extrabold text-[#064b76] dark-theme:text-white max-[426px]:text-[14px]">
            Verified Trucks
          </h3>
          <p className="mb-5 font-[Arial,sans-serif] text-[15px] font-medium leading-[1.8] text-[#444444] dark-theme:text-[rgba(255,255,255,0.76)]">
            TruckGuru operates one of India&apos;s established freight transport networks, backed by over
            5,000 verified trucks and handling more than 1,000 booking requests every day.
          </p>

          {/* Section: Zero Hidden Charges */}
          <h3 className="mb-3 mt-[65px] border-b-2 border-[#F38634] pb-2 font-[Arial,sans-serif] text-[17px] font-extrabold text-[#064b76] dark-theme:text-white max-[426px]:text-[14px]">
            Zero Hidden Charges and Transparent Pricing
          </h3>
          <p className="mb-5 font-[Arial,sans-serif] text-[15px] font-medium leading-[1.8] text-[#444444] dark-theme:text-[rgba(255,255,255,0.76)]">
            TruckGuru charges no commissions or hidden costs. Whether you are booking a small truck for a
            light consignment or a 32ft container for a full truckload, the rate shown at booking is the
            rate on the invoice — nothing added at loading, nothing revised at the gate.
          </p>

          {/* Section: Secure Payment */}
          <h3 className="mb-3 mt-[65px] border-b-2 border-[#F38634] pb-2 font-[Arial,sans-serif] text-[17px] font-extrabold text-[#064b76] dark-theme:text-white max-[426px]:text-[14px]">
            Secure Payment Gateway
          </h3>
          <p className="mb-5 font-[Arial,sans-serif] text-[15px] font-medium leading-[1.8] text-[#444444] dark-theme:text-[rgba(255,255,255,0.76)]">
            TruckGuru&apos;s payment gateway is approved by the Reserve Bank of India. Pay by bank
            transfer, UPI, or card. Each transaction is processed through a secured gateway with a
            complete digital record.
          </p>

          {/* Section: 24/7 Support */}
          <h3 className="mb-3 mt-[65px] border-b-2 border-[#F38634] pb-2 font-[Arial,sans-serif] text-[17px] font-extrabold text-[#064b76] dark-theme:text-white max-[426px]:text-[14px]">
            24/7 Dedicated Customer Support
          </h3>
          <p className="mb-5 font-[Arial,sans-serif] text-[15px] font-medium leading-[1.8] text-[#444444] dark-theme:text-[rgba(255,255,255,0.76)]">
            TruckGuru&apos;s support team is available round-the-clock for booking queries, shipment
            tracking, and issue resolution. One number, any hour: +91-7202045678.
          </p>

          {/* Why section */}
          <h3 className="mb-3 mt-[65px] border-b-2 border-[#F38634] pb-2 font-[Arial,sans-serif] text-[17px] font-extrabold text-[#064b76] dark-theme:text-white max-[426px]:text-[14px]">
            Why Use TruckGuru Transport Services for Your Business?
          </h3>

          <div className="mt-[50px] space-y-[18px]">
            {WHY_ITEMS.map(({ title, body }) => (
              <div key={title}>
                <h5 className="mb-3 inline-block border-l-[3px] border-l-[#F38634] pl-2.5 font-[Arial,sans-serif] text-base font-bold leading-[1.2] text-[#064b76] dark-theme:text-white">
                  {title}
                </h5>
                <p className="font-[Arial,sans-serif] text-[15px] font-medium leading-[1.8] text-[#444444] dark-theme:text-[rgba(255,255,255,0.76)]">
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
