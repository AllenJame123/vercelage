import { createRequestHandler } from '@remix-run/netlify';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const serverDir = dirname(fileURLToPath(import.meta.url));

// Trivial change to force Netlify to use the latest version
export const handler = createRequestHandler({
  build: join(serverDir, '../../build'),
  mode: process.env.NODE_ENV
});
