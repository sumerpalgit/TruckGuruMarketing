"use client";

export interface CityItem {
  name: string;
  icon: string;
}

const DEFAULT_CITIES: CityItem[] = [
  {
    name: "Mumbai",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323246/place_1_rpyypf.png",
  },
  {
    name: "Pune",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323245/place_2_zh6j14.png",
  },
  {
    name: "Bangalore",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323245/place_3_h0vehr.png",
  },
  {
    name: "Chennai",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323245/place_4_havvng.png",
  },
  {
    name: "Ahmedabad",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323245/place_5_ki1rgn.png",
  },
  {
    name: "Kolkata",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323245/place_6_t2q8py.png",
  },
  {
    name: "Hyderabad",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323245/place_7_pbduhc.png",
  },
  {
    name: "Delhi NCR",
    icon: "https://res.cloudinary.com/dn9tlvamj/image/upload/v1785323245/place_8_nbfv5j.png",
  },
];

interface Props {
  theme?: 'dark' | 'light';
  cities?: CityItem[];
  heading?: string;
}

export default function CitiesSection({
  theme = 'light',
  cities = DEFAULT_CITIES,
  heading = "Online Truck Booking Across Major Cities India",
}: Props) {
  return (
    <section data-theme={theme} className={`py-[70px] pb-[85px] text-center max-[426px]:py-[50px] ${theme === 'dark' ? 'bg-[radial-gradient(900px_360px_at_12%_0%,rgba(0,184,217,0.14),transparent_60%),linear-gradient(140deg,#062A63,#0D1B2A)]' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-285 px-4">
        <h2 className="mb-12 text-[35px] font-extrabold text-[#0b2452] dark-theme:text-white max-[640px]:text-[27px] max-[426px]:text-[20px]">
          {heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-[18px] max-[640px]:gap-2.5 max-[426px]:gap-2">
          {cities.map((city) => (
            <div
              key={city.name}
              className="w-[132px] cursor-pointer rounded-[18px] border border-[rgba(6,42,99,0.10)] bg-white px-3 py-[18px]
                text-[13px] font-bold text-[#0b2452]
                shadow-[0_1px_2px_rgba(13,27,42,.06),0_4px_14px_rgba(13,27,42,.06)]
                transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(0,184,217,0.5)]
                hover:shadow-[0_2px_6px_rgba(13,27,42,.07),0_14px_34px_rgba(13,27,42,.10)]
                dark-theme:bg-[rgba(255,255,255,0.06)] dark-theme:border-[rgba(255,255,255,0.14)]
                dark-theme:text-white dark-theme:shadow-none
                max-[640px]:w-[100px] max-[426px]:w-[84px] max-[426px]:py-3 max-[426px]:text-[11px]"
            >
              <img
                src={city.icon}
                alt={city.name}
                className="mx-auto mb-3 block h-14 w-14 object-contain max-[640px]:h-11 max-[640px]:w-11 max-[426px]:h-9 max-[426px]:w-9"
              />
              {city.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
