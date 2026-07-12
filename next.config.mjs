/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "methodic-brand.vercel.app" },
    ],
  },
};

export default nextConfig;
