import type { NextConfig } from "next";
import nextra from 'nextra'

const withNextra = nextra({
  // ... Add Nextra-specific options here
})


const nextConfig: NextConfig = withNextra({
  async redirects() {
    return [
      {
        source: '/book/introduction',
        destination: '/book/before-it-was-too-late',
        permanent: true,
      },
      {
        source: '/book/forward',
        destination: '/book/foreword',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
