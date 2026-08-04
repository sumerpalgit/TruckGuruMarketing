'use client';

export interface TestimonialItem {
  quote: string;
  logoSrc: string;
  logoAlt: string;
  logoAlign?: 'left' | 'right';
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      '"TruckGuru\'s commitment to seamless load handling and rapid response time truly stood out to me. Their dedication to ensuring on-time deliveries was evident throughout the process. I wholeheartedly endorse and highly recommend their services."',
    logoSrc: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323786/unacademy_qfsqy2.png',
    logoAlt: 'Unacademy',
    logoAlign: 'right',
  },
  {
    quote:
      '"TruckGuru impresses us with its promptness, responsiveness, and excellent organization. They are safe and keep our logistics on time, to a Pan India location with so much ease! The team truly pulled it together".',
    logoSrc: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323785/timexgroup_n3ncsf.png',
    logoAlt: 'Timex Group',
    logoAlign: 'right',
  },
];

function QuoteIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 64 64" fill="#FFA500">
      <path d="M50.6 26.2c-.1-1.4 0-5.2 3.6-10.4.3-.4.2-.9-.1-1.3L51 11.7c-.8-.9-1.2-1.3-1.8-1.8-.4-.3-.9-.3-1.3 0C41.6 15.4 34.6 26.8 35.6 40.7c.6 8.2 6.6 14.1 14.2 14.1 7.8 0 14.2-6.4 14.2-14.2 0-7.4-5.9-13.6-13.4-14.4zm-.8 26.4c-6.5 0-11.7-5.2-12.2-12.3-1.1-15.7 8.2-25.8 11-28.5.3.3.6.6 1 1.1.6.6 1.3 1.3 2.5 2.5-4.4 6.8-3.6 11.6-3.2 12.3.2.3.5.6.9.6 6.7 0 12.2 5.5 12.2 12.2 0 6.7-5.5 12.1-12.2 12.1zM15.1 26.2c-.1-1.4 0-5.2 3.6-10.4.3-.4.2-.9-.1-1.3-1.5-1.5-2.4-2.4-3-3-.8-.9-1.2-1.3-1.8-1.8-.4-.3-.9-.3-1.3 0C6.2 15.4-.8 26.8.2 40.7v.001c.6 8.2 6.6 14.1 14.2 14.1 7.8 0 14.2-6.4 14.2-14.2-.1-7.4-6-13.6-13.5-14.4zm-.8 26.4c-6.5 0-11.7-5.2-12.2-12.3-1.1-15.7 8.2-25.9 11-28.5.3.3.6.6 1.1 1.1.6.6 1.3 1.3 2.5 2.5-4.4 6.8-3.6 11.6-3.2 12.3.2.3.5.6.9.6 6.7 0 12.2 5.5 12.2 12.2 0 6.7-5.5 12.1-12.3 12.1z" />
    </svg>
  );
}

interface Props {
  theme?: 'dark' | 'light';
  eyebrow?: string;
  heading?: string;
  testimonials?: TestimonialItem[];
}

export default function TestimonialsSection({
  theme = 'light',
  eyebrow = 'Testimonial',
  heading = 'We Are Loved By Users And Clients',
  testimonials = DEFAULT_TESTIMONIALS,
}: Props) {
  return (
    <section data-theme={theme} className={`py-23 text-center max-[640px]:py-[70px] ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-[#f5f5f5]'}`}>
      <div className="mx-auto w-full max-w-285 px-4">

        {/* Head */}
        <span className="mb-3.5 inline-block rounded-full border px-3.5 py-[5px] text-[12px] font-bold uppercase tracking-[2px]
          text-[#f2751a] bg-[rgba(242,117,26,0.08)] border-[rgba(242,117,26,0.25)]
          dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.08)] dark-theme:border-[rgba(79,209,232,0.3)]">
          {eyebrow}
        </span>
        <h2 className="mb-[50px] text-[2.15rem] font-extrabold text-[#062A63] dark-theme:text-white max-[640px]:text-[27px] max-[426px]:text-[22px]">
          {heading}
        </h2>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1050px] grid-cols-2 gap-[30px] pt-[25px] max-[640px]:grid-cols-1">
          {testimonials.map((t) => (
            <div
              key={t.logoAlt}
              className="rounded-[18px] border border-[rgba(6,42,99,0.10)] bg-white p-[26px_24px] text-left
                shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)]
                transition-all duration-300 hover:-translate-y-[5px]
                hover:shadow-[0_2px_6px_rgba(13,27,42,.07),0_14px_34px_rgba(13,27,42,.10)]
                dark-theme:bg-[rgba(255,255,255,0.05)] dark-theme:border-[rgba(255,255,255,0.12)] dark-theme:shadow-none"
            >
              <div className="mb-1.5">
                <QuoteIcon />
              </div>
              <p className="mb-4 font-[Inter,sans-serif] text-[0.98rem] leading-[1.65] text-[#44506A] dark-theme:text-[rgba(255,255,255,0.72)]">
                {t.quote}
              </p>
              <div className={`flex items-center ${t.logoAlign === 'right' ? 'justify-end' : 'justify-start'}`}>
                <div className="rounded-lg bg-white px-3 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                  <img
                    src={t.logoSrc}
                    alt={t.logoAlt}
                    className="block h-9 max-w-30 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
