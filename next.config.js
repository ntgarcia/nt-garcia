/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: ['placehold.co'],
  },
  webpack: (config, { dev, isServer }) => {
    // Disable source maps in development to fix the URL error
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig; 