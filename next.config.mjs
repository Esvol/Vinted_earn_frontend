/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'vinted-earn-images.s3.eu-north-1.amazonaws.com',
          port: '',
          pathname: '/img/**',
        },
      ],
    },
  };

export default nextConfig;
