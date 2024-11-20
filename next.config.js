/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['picsum.photos'],  // 添加允许的图片域名
    },
    webpack: (config) => {
      config.watchOptions = {
        poll: 1000,   // 检查文件变化的频率
        aggregateTimeout: 300,   // 防抖时间
      }
      return config
    },
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000, // 每秒检查一次变动
        aggregateTimeout: 300, // 防抖时间
        ignored: /node_modules/  // 忽略 node_modules
      }
      return config
    },
  }
  
  module.exports = nextConfig