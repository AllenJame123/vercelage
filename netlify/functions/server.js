import fs from 'fs';
import path from 'path';
import { createRequestHandler } from '@remix-run/netlify';

// Trivial change to force Netlify to use the latest version
export const handler = createRequestHandler({
  build: require.resolve('../../build'),
  mode: process.env.NODE_ENV
});
