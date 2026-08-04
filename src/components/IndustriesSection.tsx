'use client';

import { ReactNode } from 'react';

export interface IndustryItem {
  label: string;
  icon: ReactNode;
}

const DEFAULT_INDUSTRIES: IndustryItem[] = [
  {
    label: 'Manufacturing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3h2a2 2 0 0 1 2 2v2H4V5a2 2 0 0 1 2-2h2" />
        <path d="M12 3v4M8 11v4M12 11v4M16 11v4" />
      </svg>
    ),
  },
  {
    label: 'Retail',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: 'Auto Components',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    label: 'FMCG',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    label: 'Chemical',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M9 3h6v6l3 9H6l3-9z" />
        <path d="M7.5 13h9" />
      </svg>
    ),
  },
  {
    label: 'Textile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M2 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" />
        <path d="M14 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" />
        <path d="M8 6V3M8 21v-3" />
      </svg>
    ),
  },
  {
    label: 'Pharma',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M18.5 2.5a5 5 0 0 1 0 7l-10 10a5 5 0 0 1-7-7l10-10a5 5 0 0 1 7 0z" />
        <line x1="8" y1="8" x2="16" y2="16" />
      </svg>
    ),
  },
  {
    label: 'Engineering',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

interface Props {
  eyebrow?: string;
  heading?: string;
  industries?: IndustryItem[];
}

export default function IndustriesSection({
  eyebrow = 'Industries We Serve',
  heading = 'Commercial Cargo Across Sectors',
  industries = DEFAULT_INDUSTRIES,
}: Props) {
  return (
    <section className="py-20 bg-[#f5f5f5] dark-theme:bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]">
      <div className="mx-auto w-full max-w-285 px-4">

        {/* Section head */}
        <div className="mb-10 text-center">
          <span className="mb-3.5 inline-block rounded-full border px-3.5 py-[5px] text-[12px] font-bold uppercase tracking-[2px]
            text-[#f2751a] bg-[rgba(242,117,26,0.08)] border-[rgba(242,117,26,0.25)]
            dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.08)] dark-theme:border-[rgba(79,209,232,0.3)]">
            {eyebrow}
          </span>
          <h2 className="text-[2.15rem] font-extrabold leading-[1.18] tracking-tight text-[#062A63] dark-theme:text-white max-[640px]:text-[27px] max-[426px]:text-[22px]">
            {heading}
          </h2>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-4 gap-5 pt-2.5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-2 max-[426px]:grid-cols-1 max-[426px]:gap-3">
          {industries.map((item) => (
            <div
              key={item.label}
              className="flex cursor-pointer items-center gap-3.5 rounded-[18px] border border-[rgba(6,42,99,0.10)] bg-white px-5 py-[18px]
                text-[15.5px] font-semibold text-[#122036]
                shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)]
                transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,184,217,0.5)]
                hover:shadow-[0_2px_6px_rgba(13,27,42,.07),0_14px_34px_rgba(13,27,42,.10)]
                dark-theme:bg-[rgba(255,255,255,0.05)] dark-theme:border-[rgba(255,255,255,0.12)]
                dark-theme:text-white dark-theme:shadow-none
                dark-theme:hover:border-[rgba(0,184,217,0.5)]
                max-[426px]:rounded-xl max-[426px]:px-4 max-[426px]:py-3.5 max-[426px]:text-[14px]"
            >
              {/* Icon badge */}
              <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-xl text-[#0e2f66]
                bg-[linear-gradient(135deg,rgba(6,42,99,0.08),rgba(0,184,217,0.12))]
                dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.10)]">
                {item.icon}
              </span>
              {item.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
