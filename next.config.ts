import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: Turbopack has issues with @tailwindcss/oxide native bindings on this Node.js version.
  // Build uses Webpack (default in Next.js 16 when --webpack flag is passed or TURBOPACK=0).
};

export default nextConfig;
