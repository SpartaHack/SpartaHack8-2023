const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  images: {
    // domains: [
    //   "i.ytimg.com",
    //   "youlearn-assets.s3.us-east-2.amazonaws.com",
    //   "lh3.googleusercontent.com",
    //   "info.arxiv.org",
    //   "static1.makeuseofimages.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "youlearn-assets.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "info.arxiv.org",
      },
      {
        protocol: "https",
        hostname: "static1.makeuseofimages.com",
      },
      {
        protocol: "https",
        hostname: "*.kaltura.com",
      },
    ],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
