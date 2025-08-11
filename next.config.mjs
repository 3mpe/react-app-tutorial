/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.tatilsepeti.com',
        port: '',
        pathname: '/Files/Images/Tesis/**',
      },
    ],
  },
}

export default nextConfig;
