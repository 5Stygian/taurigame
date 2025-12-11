import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const internalHost = process.env.TAURI_DEV_HOST || 'localhost';

const nextConfig: NextConfig = {
  reactCompiler: true,

  /* tauri configs */
  output: 'export',
  assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;