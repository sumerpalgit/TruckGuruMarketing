import { getBlogBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const revalidate = false;
export const dynamicParams = true;

const API_URL = process.env.API_URL ?? "https://truck-guru-api.testdevurl.com";

function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | TruckGuru Blog`,
    description: blog.title,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const date = new Date(blog.publishedDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const readTime = estimateReadTime(blog.description);

  const imageUrl = blog.imageUrl
    ? `${API_URL}${blog.imageUrl}`
    : "/images/default-blog.png";

  const authorImageUrl = blog.authorPhotoUrl
    ? `${API_URL}${blog.authorPhotoUrl}`
    : "/images/default-author.png";

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden px-4"
        style={{
          background: "#0d1b34",
          paddingTop: "60px",
          paddingBottom: "150px",
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        {/* Radial gradient overlays */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 12%, rgba(243,134,52,0.18) 0%, transparent 46%), radial-gradient(circle at 12% 88%, rgba(30,64,175,0.22) 0%, transparent 46%)",
          }}
        />
        {/* Grid pattern overlay */}
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

        <div className="relative z-10 max-w-215 mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-[#a9b8d2]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-50">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </nav>

          {/* Category badge */}
          <div className="mb-5">
            <span
              className="inline-block px-4 py-1 rounded-full text-[#f8a86a] text-sm font-bold tracking-[0.12em]"
              style={{
                background: "rgba(243,134,52,0.14)",
                border: "1px solid rgba(243,134,52,0.36)",
              }}
            >
              BLOG
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-white leading-tight mb-8">
            {blog.title}
          </h1>

          {/* Author row */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image
                src={authorImageUrl}
                alt={blog.authorName}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <span className="text-white font-semibold text-sm">{blog.authorName}</span>
            <span className="text-[#a9b8d2] text-sm">{date}</span>
            <span className="text-[#a9b8d2] text-sm opacity-50">·</span>
            <span className="text-[#a9b8d2] text-sm">{readTime} minute read</span>
          </div>
        </div>
      </section>

      {/* ── Feature image — pulled up over hero bottom ── */}
      <div
        className="relative z-10 mx-auto px-5 md:px-10"
        style={{ maxWidth: "1000px", marginTop: "-110px" }}
      >
        <div
          className="relative w-full overflow-hidden rounded-[20px]"
          style={{ boxShadow: "0 26px 60px rgba(13,27,52,0.24)" }}
        >
          <Image
            src={imageUrl}
            alt={blog.title}
            width={960}
            height={480}
            className="w-full h-auto object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 960px"
          />
        </div>
      </div>

      {/* ── Article content ── */}
      <section className="bg-white pt-14 pb-20 px-5 md:px-10">
        <div className="mx-auto max-w-215">
          <article
            className="section-head"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      </section>
    </>
  );
}
