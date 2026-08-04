import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  badge,
  title,
  description,
  breadcrumbs = [],
}: Props) {
  return (
    <section
      className="relative overflow-hidden px-10 pb-20.5 pt-18.5 text-center max-[640px]:px-5 max-[640px]:pb-14 max-[640px]:pt-14"
      style={{
        backgroundColor: "#0d1b34",
        backgroundImage: [
          "radial-gradient(900px 420px at 78% 12%, rgba(243,134,52,0.20) 0%, rgba(243,134,52,0) 62%)",
          "radial-gradient(700px 400px at 12% 88%, rgba(56,110,214,0.22) 0%, rgba(56,110,214,0) 60%)",
          "linear-gradient(rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 1px)",
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 1px)",
          "linear-gradient(180deg, #0d1b34 0%, #122548 100%)",
        ].join(", "),
        backgroundSize: "auto, auto, 54px 54px, 54px 54px, auto",
      }}
    >
      <div className="mx-auto max-w-300">
        {/* Badge */}
        {badge && (
          <div
            className="mb-5 inline-flex items-center rounded-full px-4 py-1.75 text-[11px] font-extrabold uppercase tracking-[0.16em]"
            style={{
              background: "rgba(243,134,52,0.14)",
              border: "1px solid rgba(243,134,52,0.36)",
              color: "#f8a86a",
            }}
          >
            {badge}
          </div>
        )}

        {/* Title */}
        <h1
          className="mx-auto mb-3.5 mt-0 max-w-7xl text-[52px] font-extrabold leading-[1.1] text-white max-[768px]:text-[38px] max-[426px]:text-[28px]"
          style={{ letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className="mx-auto mt-0 max-w-170 text-[17px] leading-[1.6] max-[640px]:text-[15px]"
            style={{ color: "#a9b8d2" }}
          >
            {description}
          </p>
        )}

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-6.5 flex items-center justify-center gap-2.5 text-[13px] font-semibold"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2.5">
                {i > 0 && <span style={{ color: "#4c5f80" }}>/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                    style={{ color: "#93a2bd" }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "#f38634" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
