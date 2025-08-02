/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Trailing slash for better static hosting
  trailingSlash: true,

  // Disable server-side features for static export

  // Optimize for production
  swcMinify: true,

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://portfolio.abejaoui.com',
    SITE_NAME: 'Ahmed Khalil Bejaoui - Portfolio',
    SITE_DESCRIPTION: 'Tech Lead & Software Engineer specializing in modern web technologies',
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }

    return config
  },

  // Redirects (handled by Netlify)
  async redirects() {
    return []
  },

  // Rewrites (handled by Netlify)
  async rewrites() {
    return []
  },
}

module.exports = nextConfig
