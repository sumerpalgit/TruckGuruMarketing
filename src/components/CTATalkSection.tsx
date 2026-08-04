import Link from "next/link";

interface DownloadItem {
  label: string;
  href: string;
}

interface Props {
  theme?: "light" | "dark";
  badge?: string;
  title?: string;
  description?: string;
  phone?: string;
  phoneHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  downloads?: DownloadItem[];
}

export default function CTATalkSection({
  theme = "light",
  badge = "Let's Talk",
  title = "NEED A TRUCK? GET YOUR RATE NOW",
  description = "Call us for instant quotes. The rate confirmed at booking is the rate on the invoice — nothing added at loading, nothing revised at the gate.",
  phone = "72020 45678",
  phoneHref = "tel:+917202045678",
  ctaLabel = "CONTACT US",
  ctaHref = "/contact",
  downloads = [
    { label: "DOWNLOAD PDF", href: "https://truckguru.co.in/profile.pdf" },
    {
      label: "DOWNLOAD DOC",
      href: "https://truckguru.co.in/TruckGuru-2026.pdf",
    },
  ],
}: Props) {
  const isDark = theme === "dark";

  return (
    <section
      className={`px-10 py-19 max-[640px]:px-5 max-[640px]:py-12 ${isDark ? "bg-[linear-gradient(140deg,#062A63,#0D1B2A)]" : "bg-white"}`}
    >
      <div
        className="mx-auto grid max-w-285 grid-cols-[1.35fr_1fr] items-center gap-11 rounded-[22px] px-[52px] py-12 max-[900px]:grid-cols-1 max-[640px]:px-6 max-[640px]:py-8"
        style={{
          background: isDark ? "rgba(255,255,255,0.05)" : "#0d1b34",
          border: isDark ? "1px solid rgba(255,255,255,0.10)" : "none",
        }}
      >
        {/* Left — copy */}
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
            {badge}
          </p>
          <h2
            className="mb-3 mt-[14px] text-[36px] font-extrabold leading-[1.15] text-white max-[640px]:text-[26px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
          <p
            className="mb-[26px] max-w-[520px] text-[15.5px] leading-[1.65] max-[640px]:text-[14px]"
            style={{ color: isDark ? "rgba(255,255,255,0.65)" : "#a9b8d2" }}
          >
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={phoneHref}
              className="rounded-xl bg-[#f38634] px-7 py-[15px] text-[20px] font-extrabold text-white transition-opacity hover:opacity-90 max-[426px]:text-[17px]"
            >
              {phone}
            </Link>
            <Link
              href={ctaHref}
              className="rounded-xl px-7 py-4 text-[14px] font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.28)" }}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        {/* Right — download brochure */}
        <div
          className="rounded-2xl p-7"
          style={{
            background: isDark
              ? "rgba(255,255,255,0.04)"
              : "rgba(255,255,255,0.05)",
            border: isDark
              ? "1px solid rgba(255,255,255,0.10)"
              : "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f38634]">
            Download Brochure
          </p>
          <div className="flex flex-col gap-3">
            {downloads.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[10px] bg-white px-5 py-[15px] text-[14px] font-extrabold text-[#16233d] transition-opacity hover:opacity-80"
              >
                {label}
                <span className="text-[#f38634]">↓</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
