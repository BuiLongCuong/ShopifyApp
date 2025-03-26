import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zotek-facebook-pixel',
        permanent: true, // true nếu muốn redirect vĩnh viễn (301), false nếu tạm thời (307)
      },
    ];
  },
};

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  experimental: {
    https: true,
  },
};

export default nextConfig;
