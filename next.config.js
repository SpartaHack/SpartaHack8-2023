const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.youtube.com",
      "image.thum.io",
      "lh3.googleusercontent.com",
      "i.ytimg.com",
      "info.arxiv.org",
    ],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
