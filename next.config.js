const path = require("path");
const withSass = require("@zeit/next-sass")({
  cssModules: true,
});
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const { withGoogleFonts } = require("nextjs-google-fonts");

// const mySass = withSass({
//   cssModules: true,
// });

const nextConfig = {
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap",
    ],
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "cms.verygoodlight.com",
      "s.w.org",
      "media.verygoodlight.com",
      "secure.gravatar.com",
    ],
    minimumCacheTTL: 604800,
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
            value:
              "public, max-age=604800, s-maxage=604800, stale-while-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
