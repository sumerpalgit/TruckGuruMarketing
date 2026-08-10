import { getBlogList } from "@/lib/api";
import BlogContent from "./BlogContent";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Blog | TruckGuru",
  description: "Read the latest articles about truck transportation and logistics in India.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const { page: pageStr, search } = await searchParams;
  const page = Math.max(1, parseInt(pageStr ?? "1", 10) || 1);

  const [{ blogs, pagination }, { blogs: recentPosts }] = await Promise.all([
    getBlogList(page, 12, search),
    getBlogList(1, 12),
  ]);

  return (
    <BlogContent
      blogs={blogs}
      pagination={pagination}
      recentPosts={recentPosts}
      currentPage={page}
    />
  );
}
