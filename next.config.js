/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

module.exports = withVideos({
  basePath: "/public",

  webpack(config, options) {
    return config;
  },
});

// const nextConfig = {}

// module.exports = nextConfig
