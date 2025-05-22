/** @type {import('@remix-run/dev').AppConfig} */
const isNetlify = process.env.NETLIFY === "true";
const isVercel = !!process.env.VERCEL;

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  serverBuildTarget: isNetlify ? "netlify" : isVercel ? "vercel" : undefined,
  server: isNetlify
    ? "./netlify/functions/server.js"
    : isVercel
    ? "./server.js"
    : undefined,
  tailwind: true,
  // Remove obsolete future flags if you see warnings
}; 