/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['react-bootstrap'],
    typedRoutes: true,
  },
};

module.exports = nextConfig;
