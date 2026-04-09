import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  distDir: '.next',

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('validator');
    }
    return config;
  },
  /* config options here */
};

export default nextConfig;