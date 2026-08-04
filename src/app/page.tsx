import Link from 'next/link';
import { getCmsPageSlugs } from '@/lib/api';

export const revalidate = 60;

export default async function HomePage() {
  const slugs = await getCmsPageSlugs();

  if (!slugs.length) {
    return (
      <div className="flex items-center justify-center min-h-96 text-gray-400">
        <p>No pages published yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Pages</h1>
      <ul className="space-y-3">
        {slugs.map(({ slug }) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              className="text-violet-600 hover:underline capitalize"
            >
              {slug.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
