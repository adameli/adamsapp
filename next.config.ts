import type { NextConfig } from "next";
// import "./src/env"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adam.a.capacedev.se',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: '',
      },
    ],
  },
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
