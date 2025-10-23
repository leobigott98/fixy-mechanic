import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://placehold.co/150x150/0d6efd/ffffff?text=T"), new URL("https://placehold.co/400x150/f0fdf4/1e3b0b?text=Factura+Digital")],
  },
};

export default nextConfig;
