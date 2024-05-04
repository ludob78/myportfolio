/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // i18n,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
