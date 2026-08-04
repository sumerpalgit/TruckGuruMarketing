import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 px-4 text-center">
      <p className="text-8xl font-bold text-gray-100 select-none">404</p>
      <h1 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h1>
      <p className="mt-2 text-gray-500 max-w-sm">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-(--color-primary) rounded-lg hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  );
}
