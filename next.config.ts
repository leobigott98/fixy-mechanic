import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://placehold.co/150x150/0d6efd/ffffff?text=T")],
  },
};

export default nextConfig;
