/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Allow production builds to complete even if there are type errors
    ignoreBuildErrors: true
  }
};

export default nextConfig;
