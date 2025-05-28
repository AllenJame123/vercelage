/** @type {import('@remix-run/dev').AppConfig} */
const isNetlify = process.env.NETLIFY === "true";

export default {
  ignoredRouteFiles: ["**/.*"],
  ...(isNetlify && {
    serverBuildTarget: "netlify",
    server: "./netlify/functions/server.js",
  }),
  tailwind: true,
}; 