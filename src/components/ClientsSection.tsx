'use client';

const LOGOS = [
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323247/company_logo_1_xddqwd.png', alt: 'Client 1' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323247/company_logo_2_xc5b37.png', alt: 'Client 2' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323246/company_logo_3_qxisx9.png', alt: 'Client 3' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323246/company_logo_4_zki9r5.png', alt: 'Client 4' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323210/company_logo_5_fyanml.png', alt: 'Client 5' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323210/company_logo_6_hpgnmd.png', alt: 'Client 6' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323210/company_logo_7_fwu0w1.png', alt: 'Client 7' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323210/company_logo_8_hnivr8.png', alt: 'Client 8' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323210/company_logo_9_hkj3ng.png', alt: 'Client 9' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323210/company_logo_10_gsrw4l.png', alt: 'Client 10' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323209/company_logo_11_ep4kac.png', alt: 'Client 11' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323210/company_logo_12_zdm3dq.png', alt: 'Client 12' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323209/company_logo_13_kipetr.png', alt: 'Client 13' },
  { src: 'https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323209/company_logo_14_idd1fd.png', alt: 'Client 14' },
];

interface Props {
  theme?: 'dark' | 'light';
}

export default function ClientsSection({ theme = 'light' }: Props) {
  return (
    <>
      <style>{`
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .clients-track {
          animation: clients-scroll 24s linear infinite;
        }
        .clients-marquee:hover .clients-track {
          animation-play-state: paused;
        }
      `}</style>

      <section data-theme={theme} className={`py-23 text-center max-[980px]:py-17.5 max-[426px]:py-12.5 ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-[#f5f5f5]'}`}>

        {/* Eyebrow */}
        <div className="mx-auto mb-4 max-w-285 px-4">
          <span className="inline-block rounded-full border px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[2px]
            text-[#f2751a] bg-[rgba(242,117,26,0.08)] border-[rgba(242,117,26,0.25)]
            dark-theme:text-[#4fd1e8] dark-theme:bg-[rgba(79,209,232,0.08)] dark-theme:border-[rgba(79,209,232,0.3)]">
            Our Clients
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-285 px-4">
          <h2 className="text-[2.15rem] font-extrabold leading-[1.18] tracking-tight text-[#062A63] dark-theme:text-white max-[640px]:text-[27px] max-[426px]:text-[22px]">
            Trusted by 5000+ Businesses Across India
          </h2>
          <p className="mx-auto mt-4 max-w-262.5 text-base font-normal leading-7 text-[#44506A] dark-theme:text-[rgba(255,255,255,0.72)] max-[426px]:text-sm">
            Serving leading enterprises, government organizations, manufacturers, retailers, and
            industrial businesses with reliable truck transportation services across India.
          </p>
        </div>

        {/* Marquee */}
        <div className="mx-auto mt-8 max-w-285">
          <div
            className="clients-marquee relative overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
              maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            }}
          >
            <div className="clients-track flex w-max items-center gap-3.5 px-2.5 py-2.5">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={i}
                  className="flex h-23 w-42 shrink-0 items-center justify-center rounded-[10px] px-7 py-6 transition-transform duration-200 hover:-translate-y-1
                    bg-white border border-[#e7ebf3]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="block h-17 w-35 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
