import type { PageContextBuiltIn } from 'vite-plugin-ssr'

export type PageContext = PageContextBuiltIn & {
  pageProps: Record<string, unknown>;
  url?: string;
  exports?: {
    documentProps?: {
      title?: string;
      description?: string;
      keywords?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: string;
      ogUrl?: string;
      twitterCard?: string;
      twitterTitle?: string;
      twitterDescription?: string;
      twitterImage?: string;
      canonicalUrl?: string;
    }
  }
}

export interface PageContextServer extends PageContext {
  // Server-specific context properties
  req?: {
    url: string;
    headers: Record<string, string>;
  };
  res?: {
    statusCode: number;
    setHeader: (name: string, value: string) => void;
  };
}

export interface PageContextClient extends PageContext {
  // Client-specific context properties
  isHydration: boolean;
  isBackNavigation: boolean;
  isForwardNavigation: boolean;
}
