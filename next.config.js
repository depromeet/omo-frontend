/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    API_ENDPOINT: process.env.IP_ADDRESS,
  },
  reactStrictMode: true,
  images: {
    domains: ['server.woowa.link'],
  },
};
