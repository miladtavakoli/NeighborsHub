/** @type {import('next').NextConfig} */

const productionMode = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: productionMode ? "/NeighborsHub" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
