import type { ApiResponse, CmsPage, CmsPageSlug, CmsHeader } from './types';

const API_BASE =
  typeof window === 'undefined'
    ? (process.env.API_URL ?? 'http://localhost:3000') + '/api/v1'
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
    { next: { revalidate: 300, tags: ['cms-slugs'] } },
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
