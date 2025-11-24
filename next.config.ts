import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/'
      },
    ]
  }
};

export default nextConfig;
