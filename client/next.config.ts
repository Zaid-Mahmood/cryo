import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: ["http://192.168.18.46:3000", '192.168.18.46'],
  reactCompiler: true,
};

export default nextConfig;
