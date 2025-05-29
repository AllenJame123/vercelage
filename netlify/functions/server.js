import { createRequestHandler } from '@remix-run/netlify';
import { join } from 'path';
import { existsSync } from 'fs';

// Ensure we're using the correct build path for Netlify Functions
const BUILD_PATH = join(process.cwd(), 'build');

// Log the build path for debugging
console.log('Build path:', BUILD_PATH);

// Verify build directory exists
if (!existsSync(BUILD_PATH)) {
  console.error('Build directory not found at:', BUILD_PATH);
  console.error('Current working directory:', process.cwd());
  console.error('Directory contents:', require('fs').readdirSync(process.cwd()));
  throw new Error(`Build directory not found at: ${BUILD_PATH}`);
}

// Verify build files exist
const buildFiles = [
  'index.js',
  'manifest.js',
  'routes'
];

for (const file of buildFiles) {
  const filePath = join(BUILD_PATH, file);
  if (!existsSync(filePath)) {
    throw new Error(`Required build file not found: ${filePath}`);
  }
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
    console.error('Build directory contents:', require('fs').readdirSync(BUILD_PATH));
    throw error;
  }
});

// Export the handler
export { handler };
