export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  _metadata: { pagination: Pagination | null };
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface CmsPage {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  status: 'PUBLISHED' | 'DRAFT';
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  createdAt: string;
  updatedAt: string;
  components?: string[];
}

export interface CmsPageSlug {
  slug: string;
  updatedAt: string;
}

export type InquiryType = 'INQUIRY' | 'BULK_INQUIRY';

export interface ContactInquiryPayload {
  name: string;
  email: string;
  contactNumber: string;
  companyName?: string;
  goodsType?: string;
  city?: string;
  message?: string;
  type?: InquiryType;
}

export interface ContactInquiryResponse {
  statusCode: number;
  message: string;
  data: Record<string, unknown> | null;
  errors?: string[];
}

export interface ContactInquiryResult {
  success: boolean;
  message: string;
  errors?: string[];
}

export interface Place {
  id: string;
  name: string;
  city: {
    id: string;
    name: string;
    state: { name: string };
  };
}

export interface CmsHeaderChild {
  name: string;
  url: string;
}

export interface CmsHeader {
  id: string;
  name: string;
  url: string;
  sortOrder: number;
  status: 'ACTIVE' | 'INACTIVE';
  children?: CmsHeaderChild[];
  createdAt: string;
  updatedAt: string;
}

export interface BlogPagination {
  page: number;
  perPage: number;
  total: number;
  totalPage: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  authorName: string;
  authorPhoto: string | null;
  authorPhotoUrl: string | null;
  image: string | null;
  imageUrl: string | null;
  publishedDate: string;
  createdAt: string;
  description?: string;
}

export interface BlogDetail extends BlogPost {
  description: string;
  updatedAt: string;
}

export interface BlogListApiResponse {
  statusCode: number;
  data: BlogPost[];
  _metadata: { pagination: BlogPagination };
}

export interface BlogDetailApiResponse {
  statusCode: number;
  data: BlogDetail;
}
