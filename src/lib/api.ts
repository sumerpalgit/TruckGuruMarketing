import type { ApiResponse, CmsPage, CmsPageSlug, CmsHeader, BlogPost, BlogDetail, BlogPagination, BlogListApiResponse, BlogDetailApiResponse } from './types';

const API_BASE =
  typeof window === 'undefined'
    ? (process.env.API_URL ?? 'https://truck-guru-api.testdevurl.com') + '/api/v1'
    : '/api/v1';

const PUBLIC = `${API_BASE}/public`;

async function apiFetch<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[API] Failed to fetch ${url}:`, error instanceof Error ? error.message : String(error));
    }
    return null;
  }
}

export async function getCmsPageSlugs(): Promise<CmsPageSlug[]> {
  const res = await apiFetch<ApiResponse<CmsPageSlug[]>>(
    `${PUBLIC}/cms-page/slugs`,
    { next: { tags: ['cms-slugs'] } },
  );
  return res?.data ?? [];
}

export async function getCmsPage(slug: string): Promise<CmsPage | null> {
  const res = await apiFetch<ApiResponse<CmsPage>>(
    `${PUBLIC}/cms-page/${slug}`,
    { next: { tags: [`${slug}`] } },
  );
  if (!res || res.statusCode === 404) return null;
  return res.data ?? null;
}

export async function getCmsHeaders(): Promise<CmsHeader[]> {
  const res = await apiFetch<ApiResponse<CmsHeader[]>>(
    `${PUBLIC}/cms-header/list`,
    { next: {  tags: ['cms-headers'] } },
  );
  return res?.data ?? [];
}

export async function getBlogList(page = 1, perPage = 12, search?: string): Promise<{ blogs: BlogPost[]; pagination: BlogPagination }> {
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
  const res = await apiFetch<BlogListApiResponse>(
    `${PUBLIC}/blog/list?page=${page}&perPage=${perPage}${searchParam}`,
    { next: { tags: ['blogs'] } },
  );
  return {
    blogs: res?.data ?? [],
    pagination: res?._metadata?.pagination ?? { page: 1, perPage: 12, total: 0, totalPage: 1 },
  };
}

export async function getBlogBySlug(slug: string): Promise<BlogDetail | null> {
  const res = await apiFetch<BlogDetailApiResponse>(
    `${PUBLIC}/blog/${slug}`,
    { next: { tags: ['blog'] } },
  );
  if (!res || res.statusCode === 404) return null;
  return res.data ?? null;
}
