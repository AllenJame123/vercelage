import { createRequestHandler } from '@remix-run/netlify';
import { join } from 'path';

// Ensure we're using the correct build path for Netlify Functions
const BUILD_PATH = join(process.cwd(), 'build');

// Log the build path for debugging
console.log('Build path:', BUILD_PATH);

export const handler = createRequestHandler({
  build: BUILD_PATH,
  mode: process.env.NODE_ENV,
  // Add error handling for route loading
  onError: (error) => {
    console.error('Remix request handler error:', error);
    throw error;
  }
});
