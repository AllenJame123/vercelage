import { createRequestHandler } from '@remix-run/netlify';
import { join } from 'path';

// Ensure we're using the correct build path for Netlify Functions
const BUILD_PATH = join(process.cwd(), 'build');

// Log the build path for debugging
console.log('Build path:', BUILD_PATH);

// Add error handling for build path
if (!BUILD_PATH) {
  throw new Error('Build path is not defined');
}

// Create the request handler with explicit route configuration
const handler = createRequestHandler({
  build: BUILD_PATH,
  mode: process.env.NODE_ENV,
  // Add detailed error handling
  onError: (error) => {
    console.error('Remix request handler error:', error);
    console.error('Error stack:', error.stack);
    console.error('Build path:', BUILD_PATH);
    console.error('NODE_ENV:', process.env.NODE_ENV);
    throw error;
  }
});

// Export the handler
export { handler };
