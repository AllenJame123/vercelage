import fs from 'fs';
import path from 'path';
import { createRequestHandler } from '@remix-run/netlify';

// Create the request handler
const handler = createRequestHandler({
  build: require.resolve('../../build'),
  mode: process.env.NODE_ENV
});

// Export the Netlify function handler
export const handler = async (event, context) => {
  return handler(event, context);
};
