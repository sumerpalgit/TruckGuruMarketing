'use client';

export interface FleetItem {
  name: string;
  desc: string;
  rate: string;
  bookLabel: string;
  href?: string;
}

const DEFAULT_FLEET: FleetItem[] = [
  {
    name: 'Tata Ace',
    desc: 'Up to 1.5 ton · Small B2B consignments, last-leg intercity loads',
    rate: 'Rs.26-29/km',
    bookLabel: 'Book Tata Ace',
  },
  {
    name: 'Ashok Leyland Bada Dost',
    desc: 'Up to 1.5 ton · FMCG, retail cartons, light industrial goods',
    rate: 'Rs.26-29/km',
    bookLabel: 'Book Bada Dost',
  },
  {
    name: 'Eicher 14 FT',
    desc: '3.5 ton · Mid-size dispatches, textiles, packaged goods',
    rate: 'Rs.31-33/km',
    bookLabel: 'Book Eicher 14FT',
  },
  {
    name: 'Eicher 17 FT',
    desc: '5 ton · Engineering goods, distributor stock movement',
    rate: 'Rs.34-37/km',
    bookLabel: 'Book Eicher 17FT',
  },
  {
    name: '20 FT Container',
    desc: '6.5 ton · Closed-body bulk freight, weather-sensitive cargo',
    rate: 'Rs.41-45/km',
    bookLabel: 'Book 20FT Container',
  },
  {
    name: '32 FT Container',
    desc: '7 to 18 ton variants · Full corridor loads, plant-to-warehouse',
    rate: 'Rs.55-91/km',
    bookLabel: 'Book 32FT Container',
  },
];

function TruckIcon() {
  return (
    <svg width="170" height="85" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="50" height="22" rx="3" fill="none" stroke="#123B72" strokeWidth="2" />
      <line x1="68" y1="34" x2="76" y2="34" stroke="#123B72" strokeWidth="2" />
      <rect x="76" y="24" width="18" height="16" rx="2" fill="none" stroke="#F47A20" strokeWidth="2" />
      <circle cx="35" cy="44" r="5" fill="#fff" stroke="#1F2E4D" strokeWidth="2" />
      <circle cx="84" cy="44" r="5" fill="#fff" stroke="#1F2E4D" strokeWidth="2" />
    </svg>
  );
}

interface Props {
  theme?: 'dark' | 'light';
  items?: FleetItem[];
}

export default function FleetSection({ theme = 'light', items = DEFAULT_FLEET }: Props) {
  return (
    <section data-theme={theme} className={`py-10 ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-285 px-4">

        {/* Section head */}
        <div className="mb-10 text-center">
          <span className="mb-3.5 inline-block rounded-full border px-3.5 py-[5px] text-[12px] font-bold uppercase tracking-[2px]
            text-[#f2751a] bg-[rgba(242,117,26,0.08)] border-[rgba(242,117,26,0.25)]
            dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.08)] dark-theme:border-[rgba(79,209,232,0.3)]">
            Fleet and Rates
          </span>
          <h2 className="text-[2.15rem] font-extrabold leading-[1.18] tracking-tight text-[#062A63] dark-theme:text-white max-[640px]:text-[27px] max-[426px]:text-[22px]">
            Pick the Right Truck for Your Load
          </h2>
          <p className="mx-auto mt-2.5 max-w-[620px] text-base text-[#44506A] dark-theme:text-[rgba(255,255,255,0.72)] font-[Inter,sans-serif]">
            Per-km rates shown upfront. Not sure which size fits? Share the weight and our team will recommend one.
          </p>
        </div>

        {/* Fleet grid */}
        <div className="grid grid-cols-3 gap-x-[22px] gap-y-5 pt-2.5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {items.map((truck) => (
            <div
              key={truck.name}
              className="group/card overflow-hidden rounded-[18px] transition-all duration-200
                border border-[rgba(6,42,99,0.10)] bg-white shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)]
                hover:-translate-y-1 hover:border-[rgba(244,124,32,0.5)] hover:shadow-[0_12px_30px_rgba(13,27,42,0.12),0_0_0_2px_rgba(233,127,6,0.15)]
                dark-theme:bg-[rgba(255,255,255,0.05)] dark-theme:border-[rgba(255,255,255,0.12)] dark-theme:shadow-none
                dark-theme:hover:-translate-y-1 dark-theme:hover:bg-[rgba(255,255,255,0.10)] dark-theme:hover:border-[rgba(244,124,32,0.5)] dark-theme:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25),0_0_0_2px_rgba(233,127,6,0.20)]"
            >
              {/* Truck illustration */}
              <div
                className="mx-[30px] mt-[30px] flex h-[120px] items-center justify-center rounded-xl
                  bg-[linear-gradient(135deg,#e9f1fb,#f3f7fd)]
                  group-hover/card:bg-[linear-gradient(135deg,rgba(244,124,32,0.10),rgba(0,184,217,0.10))]
                  dark-theme:bg-[rgba(255,255,255,0.07)]
                  dark-theme:group-hover/card:bg-[linear-gradient(135deg,rgba(244,124,32,0.14),rgba(0,184,217,0.14))]
                  transition-colors duration-200"
              >
                <TruckIcon />
              </div>

              {/* Card body */}
              <div className="px-[30px] pb-[22px] pt-[18px]">
                <h4 className="mb-1.5 text-[1.05rem] font-bold text-[#062A63] dark-theme:text-white">
                  {truck.name}
                </h4>
                <p className="mb-3 min-h-[34px] text-[0.92rem] leading-snug text-[#44506A] font-[Inter,sans-serif] dark-theme:text-[rgba(255,255,255,0.65)]">
                  {truck.desc}
                </p>
                <div className="mb-2.5 text-[0.92rem] font-extrabold text-[#062A63] dark-theme:text-[#4fd1e8]">
                  {truck.rate}
                </div>
                <a
                  href={truck.href ?? '#'}
                  className="text-[0.9rem] font-bold text-[#062A63] font-[Inter,sans-serif] transition-colors hover:text-[#f2751a]
                    dark-theme:text-[rgba(255,255,255,0.80)] dark-theme:hover:text-[#f2751a]"
                >
                  {truck.bookLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
