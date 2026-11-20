import type { NextConfig } from "next";
import nextra from 'nextra'

const withNextra = nextra({
  // ... Add Nextra-specific options here
})


const nextConfig: NextConfig = withNextra({
  async redirects() {
    return [
      {
        source: '/downloads',
        destination: '/download',
        permanent: true,
      },
      {
        source: '/book/introduction',
        destination: '/read/before-it-was-too-late',
        permanent: true,
      },
      {
        source: '/read/introduction',
        destination: '/read/before-it-was-too-late',
        permanent: true,
      },
      {
        source: '/book/forward',
        destination: '/read/foreword',
        permanent: true,
      },
      {
        source: '/read/forward',
        destination: '/read/foreword',
        permanent: true,
      },
      {
        source: '/book',
        destination: '/read',
        permanent: true,
      },
      {
        source: '/book/:path*',
        destination: '/read/:path*',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
