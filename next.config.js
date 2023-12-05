/** @type {import('next').NextConfig} */

const productionMode = process.env.NODE_ENV === 'production'
console.log(process.env.NODE_ENV)
const nextConfig = {
  basePath : productionMode ? '/NeighborsHub' : '',
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
