// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import { getCmsPage, getCmsPageSlugs } from '@/lib/api';
// // import HeroSpacerInjector from '@/components/HeroSpacerInjector';

// export const revalidate = 60;
// export const dynamicParams = true;

// export async function generateStaticParams() {
//   const slugs = await getCmsPageSlugs();
//   return slugs.map(({ slug }) => ({ slug: slug.split('/') }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string[] }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const page = await getCmsPage(slug.join('/'));
//   if (!page) return {};
//   return {
//     title: page.metaTitle || page.title,
//     description: page.metaDescription || page.excerpt || '',
//     keywords: page.metaKeywords || '',
//   };
// }

// export default async function CmsPage({
//   params,
// }: {
//   params: Promise<{ slug: string[] }>;
// }) {
//   const { slug } = await params;
//   const page = await getCmsPage(slug.join('/'));
//   if (!page) notFound();

//   return (
//     <>
//     <div
//       className="cms-content"
//       dangerouslySetInnerHTML={{ __html: page.content }}
//       // <HeroSpacerInjector />
//     />
//     </>
//   );
// }


import { notFound } from "next/navigation"; 

import type { Metadata } from "next";
import parse, { DOMNode } from "html-react-parser";
import { getCmsPage, getCmsPageSlugs } from "@/lib/api";
import HeroDemoBadge from "@/components/HeroDemoBadge";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getCmsPageSlugs();
  return slugs.map(({ slug }) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getCmsPage(slug.join("/"));
  if (!page) return {};
  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.excerpt || "",
    keywords: page.metaKeywords || "",
  };
}

function replacePlaceholders(domNode: DOMNode) {
  if (domNode.type === "text" && "data" in domNode) {
    if (domNode.data.trim() === "{{HERO_DEMO}}") {
      return <HeroDemoBadge />;
    }
  }
}

export default async function CmsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = await getCmsPage(slug.join("/"));
  if (!page) notFound();

  const content = parse(page.content, { replace: replacePlaceholders });

  return <div className="cms-content">{content}</div>;
}
