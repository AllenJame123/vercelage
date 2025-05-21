/// <reference types="vite/client" />
/// <reference types="vite-plugin-ssr" />

declare module 'vite-plugin-ssr' {
  export interface PageContextBuiltIn {
    Page: React.ComponentType
    pageProps: Record<string, unknown>
    exports: {
      documentProps?: {
        title?: string
        description?: string
      }
    }
  }
}

declare module 'vite-plugin-ssr/server' {
  export function renderToHtml(component: React.ReactElement): Promise<string>
}
/// <reference types="vite-plugin-ssr" />

declare module '@netlify/vite-plugin' {
  import { Plugin } from 'vite';
  export default function netlify(options: {
    functions?: string;
    edge_functions?: string;
  }): Plugin;
}
