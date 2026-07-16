import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // static export — the site needs no server runtime
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
