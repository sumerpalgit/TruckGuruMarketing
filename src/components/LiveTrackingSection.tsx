'use client';

export interface TrackingStatusItem {
  tag: string;
  label: string;
  color?: 'transit' | 'loaded' | 'delivered';
}

export interface TrackingTooltip {
  vehicleId: string;
  vehicleType: string;
  location: string;
  eta: string;
}

const DEFAULT_STATUSES: TrackingStatusItem[] = [
  { tag: 'In Transit', label: 'Chennai to Mumbai', color: 'transit' },
  { tag: 'Loaded', label: 'Digital LR Issued', color: 'loaded' },
  { tag: 'Delivered', label: 'POD generated', color: 'delivered' },
];

const DEFAULT_TOOLTIP: TrackingTooltip = {
  vehicleId: 'KA-53 AB 7824',
  vehicleType: 'Eicher 19 FT',
  location: 'Bengaluru Outer Ring Road crossed',
  eta: 'ETA 03:15 PM',
};

interface Props {
  theme?: 'dark' | 'light';
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  statuses?: TrackingStatusItem[];
  tooltip?: TrackingTooltip;
}

export default function LiveTrackingSection({
  theme = 'dark',
  eyebrow = 'Live Tracking',
  heading = 'See Every Truck. Skip Every Follow-up Call.',
  subtext = 'Once your shipment moves, its position updates live on the map. Share the tracking link with your buyer or warehouse so unloading is planned before the truck arrives.',
  statuses = DEFAULT_STATUSES,
  tooltip = DEFAULT_TOOLTIP,
}: Props) {
  return (
    <section
      data-theme={theme}
      className={`py-20 ${theme === 'dark' ? '[background:radial-gradient(800px_400px_at_88%_10%,rgba(244,124,32,0.12),transparent_55%),linear-gradient(155deg,#0D1B2A,#0a2140_70%,#062A63)]' : 'bg-[#f5f5f5]'}`}
    >
      <div className="mx-auto w-full max-w-285 px-4">
        <div className="grid grid-cols-[1.6fr_2fr] items-center gap-10 max-[980px]:grid-cols-1 max-[980px]:gap-12">

          {/* Left — copy + statuses */}
          <div>
            {/* Eyebrow — dark default, light override */}
            <span className="mb-3 inline-block rounded-full border px-3.5 py-[5px] text-[12px] font-bold uppercase tracking-[2px]
              border-[rgba(79,209,232,0.35)] bg-[rgba(79,209,232,0.08)] text-[#4fd1e8]
              light-theme:border-[rgba(242,117,26,0.35)] light-theme:bg-[rgba(242,117,26,0.08)] light-theme:text-[#f2751a]">
              {eyebrow}
            </span>

            {/* Heading */}
            <h2 className="mb-3.5 text-[35px] font-extrabold leading-[1.25] text-white max-[640px]:text-[28px] max-[426px]:text-[22px]
              light-theme:text-[#062A63]">
              {heading}
            </h2>

            {/* Body */}
            <p className="mb-[26px] max-w-[430px] text-base leading-[1.65] font-[Inter,sans-serif] text-[rgba(255,255,255,0.76)]
              light-theme:text-[#44506A]">
              {subtext}
            </p>

            {/* Status rows */}
            <div className="flex flex-col gap-2.5">
              {statuses.map((s) => (
                <div
                  key={s.tag}
                  className="flex max-w-[400px] items-center gap-3 rounded-xl px-4 py-[11px] text-[13px]
                    border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.07)]
                    light-theme:border-[rgba(6,42,99,0.12)] light-theme:bg-white light-theme:shadow-[0_1px_4px_rgba(13,27,42,.06)]"
                >
                  <span className="rounded-[7px] px-[9px] py-[5px] text-[10.5px] font-extrabold uppercase tracking-[0.06em] whitespace-nowrap
                    text-[#4fd1e8] bg-[rgba(0,184,217,0.14)]
                    light-theme:text-[#f2751a] light-theme:bg-[rgba(242,117,26,0.10)]">
                    {s.tag}
                  </span>
                  <span className="font-semibold text-white light-theme:text-[#062A63]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — laptop mockup */}
          <div
            className="relative rounded-[18px_18px_8px_8px] p-3 pb-0
              border border-[rgba(255,255,255,0.06)] bg-[#1a2a40] shadow-[0_2px_6px_rgba(13,27,42,.07),0_14px_34px_rgba(13,27,42,.18)]
              light-theme:border-[rgba(6,42,99,0.12)] light-theme:bg-[#dde6f0] light-theme:shadow-[0_2px_6px_rgba(13,27,42,.10),0_14px_34px_rgba(13,27,42,.12)]"
          >
            {/* Camera dot */}
            <span className="absolute left-1/2 top-[5px] h-[5px] w-[5px] -translate-x-1/2 rounded-full
              bg-[rgba(255,255,255,0.25)] light-theme:bg-[rgba(6,42,99,0.25)]" />

            {/* Screen */}
            <div className="relative h-70 overflow-hidden rounded-lg
              border border-[rgba(255,255,255,0.08)] light-theme:border-[rgba(6,42,99,0.08)]">

              {/* Background grid — dark default */}
              <div className="absolute inset-0
                bg-[#0b1a35] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[40px_40px]
                light-theme:bg-[#e8f0fa] light-theme:bg-[linear-gradient(rgba(6,42,99,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,42,99,0.05)_1px,transparent_1px)]" />

              {/* Route SVG */}
              <svg viewBox="0 0 300 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                <path d="M20,170 Q100,150 140,110 T260,30" stroke="#4fd1e8" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <circle cx="20" cy="170" r="5" fill="#22c55e" />
                <circle cx="140" cy="110" r="5" fill="#4fd1e8" />
                <circle cx="260" cy="30" r="6" fill="#f2751a" />
              </svg>

              {/* Tooltip card */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg px-3 py-2 shadow-lg backdrop-blur-sm
                border border-[rgba(255,255,255,0.12)] bg-[rgba(11,26,53,0.95)] text-white
                light-theme:border-[rgba(6,42,99,0.12)] light-theme:bg-white/95 light-theme:text-[#062A63]">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#22c55e]" />
                <div className="text-[11px] leading-[1.4]">
                  <strong className="block">{tooltip.vehicleId} · {tooltip.vehicleType}</strong>
                  <span className="text-[rgba(255,255,255,0.65)] light-theme:text-[#44506A]">
                    {tooltip.location} · {tooltip.eta}
                  </span>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="mx-auto h-[12px] w-3/5 rounded-b-[8px]
              bg-[linear-gradient(180deg,#16305e,#0b2044)] light-theme:bg-[#c5d0de]" />
            <div className="mx-auto h-[6px] w-4/5 rounded-b-[4px]
              bg-[#0a1c3a] light-theme:bg-[#b0bccb]" />
          </div>

        </div>
      </div>
    </section>
  );
}
