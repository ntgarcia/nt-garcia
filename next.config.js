/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: ['placehold.co'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    formats: ['image/avif', 'image/webp'],
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