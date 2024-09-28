/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.ramify.fr',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
