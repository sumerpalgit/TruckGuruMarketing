'use client';

export interface TipItem {
  body: string;
}

const DEFAULT_TIPS: TipItem[] = [
  {
    body: 'Start with the weight and dimensions of your goods, not the truck size. A 2-ton textile shipment from Surat to Mumbai fits comfortably in an Eicher 14FT (3.5T capacity, Rs.31-35/km). Picking the wrong truck size is the most common reason shippers overpay on freight.',
  },
  {
    body: 'Get your rate confirmed before the truck is dispatched. On TruckGuru, the price you see at booking is the price you pay. The split is simple: 5% at booking, 90% at loading, 5% before unloading. If a platform or broker revises the rate at the loading dock, that is a red flag.',
  },
  {
    body: 'Check whether the transporter provides live GPS tracking and digital documentation including LR, invoice, and POD. Chasing a driver by phone for location updates wastes hours every trip. On busy corridors like Ahmedabad-Mumbai or Delhi-Jaipur, a single delayed update can throw off your warehouse unloading schedule.',
  },
  {
    body: 'Book 2-3 days ahead when possible. Same-day availability is common on most routes, but during October-December peak season, trucks on high-demand corridors fill up fast. Advance booking also gives you better vehicle options for goods that need closed-body or containerised transport.',
  },
];

interface Props {
  theme?: 'dark' | 'light';
  heading?: string;
  tips?: TipItem[];
  ctaLabel?: string;
  ctaHref?: string;
  illustrationSrc?: string;
}

export default function BookingTipsSection({
  theme = 'light',
  heading = 'Tips for Booking a Truck',
  tips = DEFAULT_TIPS,
  ctaLabel = 'CONTACT NOW',
  ctaHref = '#',
  illustrationSrc = 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323786/truckImg_paw6x0.png',
}: Props) {
  return (
    <section data-theme={theme} className={`py-[70px] max-[640px]:py-[50px] ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-285 px-4">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-[50px] max-[980px]:grid-cols-1 max-[980px]:gap-10">

          {/* Left — text */}
          <div>
            <h2 className="mb-5 text-[35px] font-extrabold text-[#062A63] dark-theme:text-white max-[640px]:text-[28px] max-[426px]:text-[22px]">
              {heading}
            </h2>

            <div className="flex flex-col gap-4">
              {tips.map((tip, i) => (
                <p
                  key={i}
                  className="font-[Inter,sans-serif] text-base leading-[1.7] text-[#44506A] dark-theme:text-[rgba(255,255,255,0.72)]"
                >
                  {tip.body}
                </p>
              ))}
            </div>

            <a
              href={ctaHref}
              className="mt-5 inline-block rounded-full bg-[#062A63] px-[30px] py-[15px] text-[0.9rem] font-bold uppercase tracking-[0.04em] text-white
                transition-all hover:-translate-y-[2px] hover:bg-[#0b3d8a] hover:shadow-[0_8px_20px_rgba(6,42,99,0.3)]
                dark-theme:bg-[#f2751a] dark-theme:hover:bg-[#e06210]"
            >
              {ctaLabel}
            </a>
          </div>

          {/* Right — illustration */}
          <div className="flex min-h-[300px] items-center justify-center rounded-[20px] bg-white p-6
            shadow-[0_2px_6px_rgba(13,27,42,.07),0_14px_34px_rgba(13,27,42,.10)]
            dark-theme:bg-[rgba(255,255,255,0.05)] dark-theme:shadow-none
            max-[980px]:max-w-[480px] max-[980px]:mx-auto max-[980px]:w-full">
            <img
              src={illustrationSrc}
              alt={heading}
              className="block h-auto w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
