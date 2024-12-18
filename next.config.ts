import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: false,
  // images: {
  //   loader: 'custom',
  //   loaderFile: './loader/image.js',
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**'
  //     }
  //   ]
  // },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/zh',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
