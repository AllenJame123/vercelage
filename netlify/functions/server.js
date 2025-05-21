const fs = require('fs');
const path = require('path');

// Import our custom server-side renderer
const { render } = require('../../dist/server/entry-server.cjs');

// Helper function to determine if a path is a static asset
function isStaticAsset(path) {
  const staticExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.css', '.js', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
  const ext = path.substring(path.lastIndexOf('.'));
  return staticExtensions.includes(ext) || path.startsWith('/assets/');
}

// Export the Netlify function handler
exports.handler = async (event, context) => {
  // For health checks
  if (event.httpMethod === 'GET' && event.path === '/.netlify/functions/server') {
    return {
      statusCode: 200,
      body: 'Server is running'
    };
  }

  // Get the path from the event
  const { path: reqPath } = event;
  
  // If this is a static asset, let Netlify handle it via redirects
  if (isStaticAsset(reqPath)) {
    return {
      statusCode: 200,
      body: 'Static asset - handled by Netlify redirects'
    };
  }

  // Add custom headers for SEO and security
  const customHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Cache-Control': 'public, max-age=0, must-revalidate'
  };

  try {
    // Create a simple page context with the URL
    const pageContext = {
      url: reqPath,
      exports: {
        documentProps: {
          title: 'Age Calculator App - Free Online Age Calculators & Tools',
          description: 'Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more.'
        }
      }
    };
    
    // Use our custom renderer to generate the HTML
    const html = render(reqPath, pageContext);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        ...customHeaders
      },
      body: html
    };
  } catch (error) {
    console.error('SSR Error:', error);
    
    // Return a 500 error page
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html',
        ...customHeaders
      },
      body: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Server Error</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: sans-serif; padding: 2rem; max-width: 600px; margin: 0 auto; }
              h1 { color: #e53e3e; }
            </style>
          </head>
          <body>
            <h1>Server Error</h1>
            <p>Sorry, something went wrong on our server. Please try again later.</p>
            <p><a href="/">Go back to homepage</a></p>
          </body>
        </html>
      `
    };
  }
};
