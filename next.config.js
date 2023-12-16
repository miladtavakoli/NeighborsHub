/** @type {import('next').NextConfig} */

const productionMode = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath : productionMode ? '/NeighborsHub' : '',
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
