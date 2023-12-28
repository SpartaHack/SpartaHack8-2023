const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ytimg.com",
      "youlearn-assets.s3.us-east-2.amazonaws.com",
      "lh3.googleusercontent.com"
    ],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
