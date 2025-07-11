import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  experimental: {
    ppr: true,
    authInterrupts: true,
    inlineCss: true,
    reactCompiler: true,
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
};

export default withPayload(nextConfig);
