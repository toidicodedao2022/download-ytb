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
  }
}

module.exports = nextConfig
