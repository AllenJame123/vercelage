/** @type {import('@remix-run/dev').AppConfig} */
const isNetlify = process.env.NETLIFY === "true";

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  ...(isNetlify && {
    serverBuildTarget: "netlify",
    server: "./netlify/functions/server.js",
  }),
  tailwind: true,
  // Remove obsolete future flags if you see warnings
}; 