'use client';

export interface FtlLinkItem {
  label: string;
  href?: string;
}

const DEFAULT_FTL_LINKS: FtlLinkItem[] = [
  { label: 'Truck Rental Services' },
  { label: 'Book Truck Online' },
  { label: 'Logistics Support Services' },
  { label: 'Freight Transport Services' },
  { label: 'Chota Hathi on Rent' },
  { label: 'Tata Ace on Rent' },
  { label: 'Tata 407 on Rent' },
  { label: 'Tempo Transport Service' },
];

function ArrowIcon() {
  return (
    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[rgba(242,117,26,0.10)]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-full w-full">
        <path fill="#F47A20" d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576z" />
        <path fill="#FFFFFF" d="M361 417C351.6 426.4 336.4 426.4 327.1 417C317.8 407.6 317.7 392.4 327.1 383.1L366.1 344.1L216 344.1C202.7 344.1 192 333.4 192 320.1C192 306.8 202.7 296.1 216 296.1L366.1 296.1L327.1 257.1C317.7 247.7 317.7 232.5 327.1 223.2C336.5 213.9 351.7 213.8 361 223.2L441 303.2C450.4 312.6 450.4 327.8 441 337.1L361 417.1z" />
      </svg>
    </span>
  );
}

interface Props {
  eyebrow?: string;
  heading?: string;
  links?: FtlLinkItem[];
}

export default function FTLLinksSection({
  eyebrow = 'Serving Businesses Across India',
  heading = 'Reliable Full Truck Load (FTL) Transport Solutions',
  links = DEFAULT_FTL_LINKS,
}: Props) {
  return (
    <section className="py-20 bg-[#f5f5f5] dark-theme:bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]">
      <div className="mx-auto w-full max-w-285 px-4">

        {/* Section head */}
        <div className="mb-[26px] text-center">
          <span className="mb-3.5 inline-block rounded-full border px-3.5 py-[5px] text-[12px] font-bold uppercase tracking-[2px]
            text-[#f2751a] bg-[rgba(242,117,26,0.08)] border-[rgba(242,117,26,0.25)]
            dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.08)] dark-theme:border-[rgba(79,209,232,0.3)]">
            {eyebrow}
          </span>
          <h2 className="mx-auto max-w-[700px] text-[2.15rem] font-extrabold leading-[1.18] tracking-tight text-[#062A63] dark-theme:text-white max-[640px]:text-[27px] max-[426px]:text-[22px]">
            {heading}
          </h2>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-4 gap-x-[30px] gap-y-5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1 max-[426px]:gap-2.5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href ?? '#'}
              className="flex items-center justify-between rounded-[18px] border border-[rgba(6,42,99,0.10)] bg-white px-5 py-[18px]
                text-base font-bold text-[#062A63]
                shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)]
                transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(244,124,32,0.4)]
                hover:shadow-[0_2px_6px_rgba(13,27,42,.07),0_14px_34px_rgba(13,27,42,.10)]
                dark-theme:bg-[rgba(255,255,255,0.05)] dark-theme:border-[rgba(255,255,255,0.12)]
                dark-theme:text-white dark-theme:shadow-none
                dark-theme:hover:border-[rgba(244,124,32,0.4)]
                max-[426px]:px-3.5 max-[426px]:py-3.5 max-[426px]:text-[12.5px]"
            >
              {link.label}
              <ArrowIcon />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
