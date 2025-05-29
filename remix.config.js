/** @type {import('@remix-run/dev').AppConfig} */
const isNetlify = process.env.NETLIFY === "true";

export default {
  ignoredRouteFiles: ["**/.*"],
  ...(isNetlify && {
    serverBuildTarget: "netlify",
    server: "./netlify/functions/server.js",
    serverModuleFormat: "esm",
    future: {
      v2_dev: true,
      v2_errorBoundary: true,
      v2_headers: true,
      v2_meta: true,
      v2_normalizeFormMethod: true,
      v2_routeConvention: true,
    },
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
}; 