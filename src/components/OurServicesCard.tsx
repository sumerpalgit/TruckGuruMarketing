import Link from "next/link";

interface ServiceItem {
  label: string;
  href?: string;
}

interface Props {
  title?: string;
  services?: ServiceItem[];
}

const DEFAULT_SERVICES: ServiceItem[] = [
  { label: "Online Truck Booking", href: "/" },
  { label: "Logistics Services", href: "/contact" },
  { label: "Transportation Services", href: "/contact" },
  { label: "Express Cargo Services", href: "/contact" },
  { label: "Truck Rental Services", href: "/contact" },
];

export default function OurServicesCard({
  title = "OUR SERVICES",
  services = DEFAULT_SERVICES,
}: Props) {
  return (
    <div className="rounded-[18px] border border-[#e4e9f2] bg-[#f8fafc] p-8 max-[426px]:p-6">
      <h3
        className="mb-2 text-[22px] font-extrabold tracking-tight text-[#16233d]"
      >
        {title}
      </h3>

      {/* Decorative underline */}
      <div className="mb-6 flex items-center gap-1.5">
        <span className="h-[3px] w-8 rounded-full bg-[#f38634]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#c9d2e0]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#c9d2e0]" />
      </div>

      <div className="flex flex-col gap-3">
        {services.map(({ label, href }) => (
          <Link
            key={label}
            href={href ?? "#"}
            className="group flex items-center justify-between rounded-[10px] bg-[#eaecf3] px-5 py-[15px] text-[15px] font-semibold text-[#16233d] transition-all duration-200 hover:bg-[#f38634] hover:text-white hover:shadow-[0_6px_18px_rgba(243,134,52,0.28)]"
          >
            {label}
            <span className="text-[18px] transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
