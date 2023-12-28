const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ytimg.com",
      "youlearn-assets.s3.us-east-2.amazonaws.com",
      "info.arxiv.org",
      "logowik.com",
    ],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
