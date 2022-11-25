/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites(){
    return [
      {
        source:'/ladipage',
        destination:'/src/ladipage'
      },
      {
        source:'/download',
        destination:'/src/download'
      }
    ]
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com'
      }
    ]
  }
}

module.exports = nextConfig
