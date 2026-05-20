import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: ["http://192.168.1.12:3000", '192.168.1.12'],
  reactCompiler: true,
};

export default nextConfig;
