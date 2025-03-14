/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.goodreads.com',
      },
      {
        protocol: 'https',
        hostname: 'bookshop.org',
      },
    ],
  },
}

module.exports = nextConfig