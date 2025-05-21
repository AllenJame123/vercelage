import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isSsr = process.env.SSR === 'true';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    build: {
      outDir: isSsr ? 'dist/server' : 'dist/client',
      rollupOptions: {
        input: isSsr ? 'src/entry-server.tsx' : 'index.html',
        output: {
          format: isSsr ? 'cjs' : 'es'
        }
      },
      ssr: isSsr ? 'src/entry-server.tsx' : undefined,
      sourcemap: true
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
