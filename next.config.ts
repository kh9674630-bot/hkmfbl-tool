import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Ensure static assets are served directly without _next/static prefix issues
  images: {
    unoptimized: true,
  },
};

export default nextConfig;