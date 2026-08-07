import { getBlogList } from "@/lib/api";
import BlogContent from "./BlogContent";
import type { Metadata } from "next";

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
  // When searching, always start from page 1 and fetch more results to show all matches
  const page = search ? 1 : Math.max(1, parseInt(pageStr ?? "1", 10) || 1);
  const perPage = search ? 100 : 12; // Fetch up to 100 results when searching to show all matches

  const [{ blogs, pagination }, { blogs: recentPosts }] = await Promise.all([
    getBlogList(page, perPage, search),
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
