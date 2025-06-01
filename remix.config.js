/** @type {import('@remix-run/dev').AppConfig} */
const isNetlify = process.env.NETLIFY === "true";
const isVercel = !!process.env.VERCEL;

export default {
  ignoredRouteFiles: ["**/.*"],
  ...(isNetlify && {
    serverBuildTarget: "netlify",
    server: "./netlify/functions/server.js",
    serverModuleFormat: "esm"
  }),
  ...(isVercel && {
    serverBuildTarget: "vercel",
    server: "./server.js",
    serverModuleFormat: "esm"
  }),
  tailwind: true,
  // Ensure routes are properly compiled
  routes: (defineRoutes) => {
    return defineRoutes((route) => {
      // Root route
      route("/", "routes/_index.tsx", { index: true });
      
      // Calculator routes
      route("/difference", "routes/difference.tsx");
      route("/date-calculator", "routes/date-calculator.tsx");
      route("/birthday-countdown", "routes/birthday-countdown.tsx");
      route("/pregnancy-calculator", "routes/pregnancy-calculator.tsx");
      route("/leap-year-calculator", "routes/leap-year-calculator.tsx");
      route("/retirement-calculator", "routes/retirement-calculator.tsx");
      route("/generation-finder", "routes/generation-finder.tsx");
    });
  },
  // Add build configuration
  build: {
    // Ensure proper module resolution
    moduleResolution: "node",
    // Add source maps for better debugging
    sourcemap: true,
  },
  // Add server build configuration
  serverBuildPath: "build/index.js",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  // Add development configuration
  devServerPort: 3000,
  watchPaths: ["./app/**/*"],
  // Add caching configuration
  cacheDirectory: "./node_modules/.cache/remix",
  // Add manifest configuration
  manifest: {
    name: "age-o-matic",
    short_name: "age-o-matic",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
  },
}; 