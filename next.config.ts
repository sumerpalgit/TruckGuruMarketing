import type { NextConfig } from 'next';

const BACKEND_URL = process.env.API_URL ?? 'https://truck-guru-api.testdevurl.com';

const nextConfig: NextConfig = {
   output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'truckguru.co.in' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'truck-guru-api.testdevurl.com' },
      {  protocol: 'http', hostname: '192.168.1.41'},
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
