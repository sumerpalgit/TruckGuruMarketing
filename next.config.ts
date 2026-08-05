import type { NextConfig } from 'next';

const BACKEND_URL = process.env.API_URL ?? 'http://localhost:3000';

const nextConfig: NextConfig = {
   output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'truckguru.co.in' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${BACKEND_URL}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
