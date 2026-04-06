import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // turbopack: {
  //   root: path.resolve(__dirname),
  // },
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
