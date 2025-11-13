/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { 
    unoptimized: true 
  },
  webpack: (config, { isServer }) => {
    // Fix for Windows path case sensitivity in webpack cache
    config.cache = {
      ...config.cache,
      buildDependencies: {
        ...config.cache?.buildDependencies,
      },
      // Disable case sensitivity warnings
      managedPaths: [],
    };
    return config;
  },
};

export default nextConfig;
