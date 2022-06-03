/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
