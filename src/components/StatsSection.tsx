'use client';

interface Props {
  theme?: 'dark' | 'light';
}

const STATS = [
  { num: '110+', label: 'Cities' },
  { num: '10000+', label: 'Trucks' },
  { num: '5000+', label: 'Happy Customers & Counting' },
  { num: '1.25 lakh+', label: 'Trips Completed' },
  { num: '24x7', label: 'Booking & Support' },
  { num: '4.5★', label: 'Rated by Businesses' },
];

export default function StatsSection({ theme = 'dark' }: Props) {
  return (
    <section
      data-theme={theme}
      className={`py-20 ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-white'}`}
    >
      <div className="mx-auto w-full max-w-285 px-4">
        <h2 className="mb-6 text-center text-[34px] font-extrabold leading-tight text-[#062A63] dark-theme:text-white max-[426px]:text-[22px]">
          A Rapidly Growing Truck Booking Network India
        </h2>

        <div className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {STATS.map(({ num, label }) => (
            <div
              key={label}
              className="cursor-default rounded-2xl px-3.5 py-5.25 text-center transition-all duration-300
                border border-[rgba(6,42,99,0.10)] bg-[#f8fafc] shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)]
                hover:-translate-y-1 hover:border-[rgba(244,124,32,0.5)] hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.10),0_0_0_2px_rgba(233,127,6,0.15)]
                dark-theme:bg-[rgba(255,255,255,0.06)] dark-theme:border-[rgba(255,255,255,0.14)] dark-theme:shadow-none dark-theme:backdrop-blur-sm
                dark-theme:hover:-translate-y-1 dark-theme:hover:bg-[rgba(255,255,255,0.10)] dark-theme:hover:border-[rgba(244,124,32,0.5)] dark-theme:hover:shadow-[0_12px_30px_rgba(0,0,0,0.12),0_0_0_2px_rgba(233,127,6,0.15)]"
            >
              <div
                className="text-[38px] font-extrabold text-[#062A63] max-[426px]:text-[22px]
                  dark-theme:text-transparent dark-theme:bg-clip-text dark-theme:bg-linear-to-r dark-theme:from-white dark-theme:to-[#00B8D9]"
              >
                {num}
              </div>
              <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#44506A] dark-theme:text-[rgba(255,255,255,0.72)]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
