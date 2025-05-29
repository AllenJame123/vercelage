import { createRequestHandler } from '@remix-run/netlify';
import { join } from 'path';

// Use process.cwd() instead of import.meta.url for Netlify Functions environment
export const handler = createRequestHandler({
  build: join(process.cwd(), 'build'),
  mode: process.env.NODE_ENV
});
