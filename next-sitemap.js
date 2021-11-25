let policy = {
  userAgent: "*",
};

policy.disallow = "/";

module.exports = {
  siteUrl: process.env.URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [policy],
  },
  outDir: "./out",
};
