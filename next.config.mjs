/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/**',
      },
    ],
  },
};

export default nextConfig;
