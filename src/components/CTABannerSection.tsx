'use client';

interface Props {
  theme?: 'dark' | 'light';
  heading?: string;
  quoteLabel?: string;
  quoteHref?: string;
  phone?: string;
  phoneHref?: string;
}

export default function CTABannerSection({
  theme = 'light',
  heading = 'Moving Goods Is Simple with TruckGuru',
  quoteLabel = 'GET A QUOTE',
  quoteHref = '#',
  phone = '72020 45678',
  phoneHref = 'tel:7202045678',
}: Props) {
  return (
    <section data-theme={theme} className={`pb-[90px] pt-[30px] ${theme === 'dark' ? 'bg-[linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-[#f5f5f5]'}`}>
      <div className="mx-auto w-full max-w-285 px-4">

        {/* Banner card */}
        <div
          className={`flex items-center justify-around gap-6 rounded-3xl px-[clamp(30px,4vw,52px)] py-[clamp(28px,4vw,48px)]
            max-[640px]:flex-col max-[640px]:text-center
            ${theme === 'dark'
              ? 'border border-[rgba(255,255,255,0.12)] shadow-[0_0_0_1px_rgba(0,184,217,0.15),0_20px_50px_rgba(0,0,0,0.4)]'
              : 'shadow-[0_20px_50px_rgba(11,36,82,0.20)]'
            }`}
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(560px 260px at 90% 0%, rgba(0,184,217,0.25), transparent 60%), linear-gradient(130deg, #112244, #0e3170)'
              : 'radial-gradient(560px 260px at 90% 0%, rgba(0,184,217,0.2), transparent 60%), linear-gradient(130deg, #0D1B2A, #062A63)',
          }}
        >
          <h3 className="text-[30px] font-extrabold leading-[1.3] text-white max-[640px]:text-[24px] max-[426px]:text-[20px]">
            {heading.split('TruckGuru').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <br className="max-[640px]:hidden" />
                  TruckGuru
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h3>

          <div className="flex shrink-0 items-center gap-3 max-[426px]:flex-col max-[426px]:w-full">
            {/* Quote button */}
            <a
              href={quoteHref}
              className="flex items-center gap-2 rounded-[30px] px-[25px] py-3 text-[14.5px] font-bold text-white
                shadow-[0_10px_24px_rgba(244,124,32,0.4)] transition-all hover:-translate-y-[2px] hover:shadow-[0_14px_28px_rgba(244,124,32,0.5)]
                max-[426px]:w-full max-[426px]:justify-center"
              style={{ background: 'linear-gradient(120deg, #F47C20, #DD6A10)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512" fill="white" aria-hidden="true">
                <path d="M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8C91.826 21.35 112.369 0 135.652 0zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" />
              </svg>
              {quoteLabel}
            </a>

            {/* Phone button */}
            <a
              href={phoneHref}
              className="flex items-center gap-2 rounded-[30px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-7 py-3 text-[13.5px] font-bold text-white
                transition-all hover:-translate-y-[2px] hover:bg-[rgba(255,255,255,0.14)]
                max-[426px]:w-full max-[426px]:justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 640 640" fill="white" aria-hidden="true">
                <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
              </svg>
              {phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
