/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '**', // Add the leading slash here
        search: '',
      },
    ],
  },
};

export default nextConfig;
