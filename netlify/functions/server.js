import { createRequestHandler } from '@remix-run/netlify';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ES modules
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Ensure we're using the correct build path for Netlify Functions
const BUILD_PATH = join(process.cwd(), 'build');

// Log the build path for debugging
console.log('Build path:', BUILD_PATH);

// Add error handling for build path
if (!BUILD_PATH) {
  throw new Error('Build path is not defined');
}

export const handler = createRequestHandler({
  build: BUILD_PATH,
  mode: process.env.NODE_ENV,
  // Add error handling for route loading
  onError: (error) => {
    console.error('Remix request handler error:', error);
    throw error;
  }
});
