import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // e.g. "/blog"
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
      <Link
        href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : "#"}
        aria-disabled={currentPage === 1}
        className={`flex h-10 items-center gap-1 rounded-lg border px-4 text-sm font-semibold transition-colors ${
          currentPage === 1
            ? "pointer-events-none border-slate-100 bg-slate-50 text-slate-300"
            : "border-slate-200 bg-white text-[#062A63] hover:bg-orange-50"
        }`}
      >
        ‹ PREV
      </Link>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="flex h-10 w-8 items-center justify-center text-sm text-slate-400">
            ...
          </span>
        ) : (
          <Link
            key={p}
            href={`${basePath}?page=${p}`}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
              p === currentPage
                ? "bg-[#062A63] text-white shadow"
                : "border border-slate-200 bg-white text-[#062A63] hover:bg-orange-50"
            }`}
          >
            {p}
          </Link>
        )
      )}

      <Link
        href={currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : "#"}
        aria-disabled={currentPage === totalPages}
        className={`flex h-10 items-center gap-1 rounded-lg border px-4 text-sm font-semibold transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none border-slate-100 bg-slate-50 text-slate-300"
            : "border-slate-200 bg-white text-[#062A63] hover:bg-orange-50"
        }`}
      >
        NEXT ›
      </Link>
    </div>
  );
}
