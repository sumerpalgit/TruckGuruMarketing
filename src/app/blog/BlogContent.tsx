"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost, BlogPagination } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://truck-guru-api.testdevurl.com";

function BlogCard({ blog }: { blog: BlogPost }) {
  const date = new Date(blog.publishedDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${blog.slug}`} className="group h-full font-manrope">
      <div className="bg-white border border-[#e9edf4] rounded-[18px] overflow-hidden h-full flex flex-col transition-shadow hover:shadow-md">
        {/* Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <Image
            src={blog.imageUrl ? `${API_URL}${blog.imageUrl}` : "/images/default-blog.png"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-3 left-3">
            <span className="bg-[rgba(13,27,52,0.72)] text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              {date}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h2 className="text-[18px] font-extrabold leading-snug text-[#16233d] mb-2 group-hover:text-[#f38634] transition-colors line-clamp-2 font-monrope">
            {blog.title}
          </h2>
          <div className="flex items-center justify-between pt-3 border-t border-[#e9edf4] mt-auto font-monrope">
            <span className="text-sm font-semibold text-[#5b6a86] font-monrope">{blog.authorName}</span>
            <span className="text-sm font-bold text-[#f38634] font-monrope">Read more →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    )
      pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {pages.map((p, i) =>
        p === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-10 w-8 items-center justify-center text-sm text-[#5b6a86]"
          >
            …
          </span>
        ) : (
          <Link
            key={p}
            href={`/blog?page=${p}`}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
              p === currentPage
                ? "bg-[#f38634] text-white shadow"
                : "border border-[#e9edf4] bg-white text-[#16233d] hover:bg-orange-50"
            }`}
          >
            {p}
          </Link>
        )
      )}
      <Link
        href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : "#"}
        aria-disabled={currentPage === totalPages}
        className={`flex h-10 items-center gap-1.5 rounded-lg px-4 text-sm font-bold transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none bg-[#0d1b34]/30 text-white/40"
            : "bg-[#0d1b34] text-white hover:bg-[#162944]"
        }`}
      >
        NEXT <span className="text-[#f38634]">→</span>
      </Link>
    </div>
  );
}

interface Props {
  blogs: BlogPost[];
  pagination: BlogPagination;
  recentPosts: BlogPost[];
  currentPage: number;
}

export default function BlogContent({ blogs, pagination, recentPosts, currentPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") ?? "";

  const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const searchTerm = formData.get("search")?.toString().trim() || "";
    if (searchTerm) {
      router.push(`/blog?search=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push("/blog");
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative text-center py-[74px] px-4 overflow-hidden bg-[#0d1b34]"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 12%, rgba(243,134,52,0.18) 0%, transparent 46%), radial-gradient(circle at 12% 88%, rgba(30,64,175,0.22) 0%, transparent 46%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span
            className="inline-block mb-5 px-4 py-1 rounded-full text-[#f8a86a] text-sm font-bold tracking-[0.14em]"
            style={{
              background: "rgba(243,134,52,0.14)",
              border: "1px solid rgba(243,134,52,0.36)",
            }}
          >
            BLOG
          </span>
          <h1 className="text-[42px] md:text-[52px] font-extrabold text-white leading-tight mb-4">
            TruckGuru Blog
          </h1>
          <p className="text-[#a9b8d2] text-[17px] mb-8 max-w-lg mx-auto">
            Truck Booking Tips, Transport Guides & Logistics Insights
          </p>
          <form
            className="flex gap-[10px] mt-[30px] mx-auto max-w-[520px]"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
              defaultValue={search}
              className="flex-1 bg-white/[0.07] border border-white/[0.18] rounded-xl px-[18px] py-[14px] text-[15px] text-white outline-none"
            />
            <button
              type="submit"
              className="bg-[#f38634] text-white text-[13px] font-extrabold tracking-[0.08em] px-[26px] rounded-xl cursor-pointer border-none"
            >
              SEARCH
            </button>
          </form>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-[#f5f7fb] py-14 px-4">
        <div className="mx-auto max-w-285">
          {blogs.length === 0 ? (
            <p className="text-center text-[#5b6a86] py-16 text-lg">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}

          {!search && (
            <BlogPagination currentPage={currentPage} totalPages={pagination.totalPage} />
          )}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-white py-12 px-4">
        <div className="mx-auto max-w-285">
          <h2 className="text-[11px] font-extrabold tracking-[0.16em] text-[#f38634] mb-[26px] font-manrope">RECENT POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ fontFamily: '"Manrope", sans-serif' }}
                className="block text-[14px] font-semibold text-[#16233d] leading-[1.55] py-[13px] border-b border-[#f0f3f8] hover:text-[#f38634] transition-colors"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
