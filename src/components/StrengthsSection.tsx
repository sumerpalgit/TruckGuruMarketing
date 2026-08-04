'use client';

export interface StrengthItem {
  title: string;
  body: string;
}

const DEFAULT_LEFT: StrengthItem[] = [
  {
    title: 'Full Load Services',
    body: 'We offer full truck load transport with different types of trucks, making it easy to choose with the click of a button.',
  },
  {
    title: 'Transparent Pricing',
    body: 'Our pricing is clear and upfront. You can check the transport cost online before booking.',
  },
];

const DEFAULT_RIGHT: StrengthItem[] = [
  {
    title: 'Quick & Easy Portal',
    body: 'Booking a truck is simple and hassle-free. Our online portal is designed to save your time and reduce paperwork.',
  },
  {
    title: 'Advance Booking',
    body: 'You can plan ahead with advance bookings and be assured that vehicles will be available when you need them.',
  },
];

interface Props {
  theme?: 'dark' | 'light';
  heading?: string;
  subtext?: string;
  leftItems?: StrengthItem[];
  rightItems?: StrengthItem[];
  phoneImage?: string;
}

export default function StrengthsSection({
  theme = 'light',
  heading = 'Our Strengths and Advantages',
  subtext = 'We care deeply about the work we do. Our focus has always been on helping businesses move their goods safely, smoothly, and without unnecessary stress. When you choose us, you get a reliable transport partner that supports your daily operations while you focus on running your business.',
  leftItems = DEFAULT_LEFT,
  rightItems = DEFAULT_RIGHT,
  phoneImage = 'https://truckguru.co.in/web/public/Frontend/assets/images/truckguru-llp.png',
}: Props) {
  return (
    <section data-theme={theme} className={`py-23 max-[980px]:py-[50px] ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-[#f5f5f5]'}`}>
      <div className="mx-auto w-full max-w-285 px-4">

        {/* Heading */}
        <h2 className="mb-3 text-center text-[35px] font-extrabold text-[#062A63] dark-theme:text-white max-[640px]:text-[28px] max-[426px]:text-[22px]">
          {heading}
        </h2>
        <p className="mx-auto mb-[50px] max-w-[750px] text-center text-[15px] text-[#44506A] leading-[1.6] font-[Inter,sans-serif] dark-theme:text-[rgba(255,255,255,0.72)]">
          {subtext}
        </p>

        {/* 3-column layout */}
        <div className="mx-auto grid max-w-[900px] grid-cols-[1fr_260px_1fr] items-center gap-[30px] max-[980px]:grid-cols-[1fr_200px] max-[450px]:grid-cols-1">

          {/* Left column */}
          <div className="flex flex-col gap-[165px] pb-20 max-[1300px]:gap-20 max-[980px]:gap-6 max-[980px]:pb-0 max-[450px]:items-center max-[450px]:text-center">
            {leftItems.map((item) => (
              <div key={item.title}>
                <h4 className="mb-2 text-base font-bold text-[#062A63] dark-theme:text-white">
                  {item.title}
                </h4>
                <p className="max-w-[290px] text-[15px] leading-[1.55] text-[#44506A] font-[Inter,sans-serif] dark-theme:text-[rgba(255,255,255,0.72)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Center — phone mockup (hidden on single-column layout) */}
          <div className="max-[980px]:col-start-2 max-[980px]:row-span-2 max-[980px]:self-center max-[450px]:hidden">
            <img
              src={phoneImage}
              alt="TruckGuru app"
              className="block h-auto w-full rounded-[22px]"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col items-end gap-[165px] pb-20 text-right max-[1300px]:gap-20 max-[980px]:col-start-1 max-[980px]:row-start-2 max-[980px]:items-start max-[980px]:gap-6 max-[980px]:pb-0 max-[980px]:text-left max-[450px]:items-center max-[450px]:text-center">
            {rightItems.map((item) => (
              <div key={item.title}>
                <h4 className="mb-2 text-base font-bold text-[#062A63] dark-theme:text-white">
                  {item.title}
                </h4>
                <p className="ml-auto max-w-[290px] text-[15px] leading-[1.55] text-[#44506A] font-[Inter,sans-serif] dark-theme:text-[rgba(255,255,255,0.72)] max-[980px]:ml-0">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
