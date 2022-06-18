const withSvgr = require('next-svgr');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withSvgr], {
  reactStrictMode: true,
  images: {
    deviceSizes: [],
    domains: [],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }
    return config;
  },
  future: {
    webpack5: true,
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    child_process: false,
  },
});
