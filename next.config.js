const path = require("path");
const withSass = require("@zeit/next-sass")({
  cssModules: true,
});
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

// const mySass = withSass({
//   cssModules: true,
// });

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["media.verygoodlight.com", "cms.verygoodlight.com", "s.w.org"],
    minimumCacheTTL: 1000000000000,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|woff|woff2)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
