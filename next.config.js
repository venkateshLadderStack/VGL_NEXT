const path = require("path");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = {
  reactStrictMode: true,
};

module.exports = withSass({
  cssModules: true,
});

module.exports = {
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withImages();
module.exports = {
  images: {
    domains: ["media.verygoodlight.com", "cms.verygoodlight.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 999999999,
  },
};
