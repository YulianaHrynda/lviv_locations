/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'commons.wikimedia.org',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
