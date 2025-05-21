const express = require('express');
const path = require('path');
const fs = require('fs');

// Import our server-side renderer
const { render } = require('./dist/server/entry-server.cjs');

const app = express();
const PORT = 3000;

// Serve static assets from the client build
app.use(express.static(path.join(__dirname, 'dist/client')));

// Handle all routes with SSR
app.get('*', (req, res) => {
  try {
    // Create a simple page context with the URL
    const pageContext = {
      url: req.url,
      exports: {
        documentProps: {
          title: 'Age Calculator App - Free Online Age Calculators & Tools',
          description: 'Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more.'
        }
      }
    };
    
    // Use our custom renderer to generate the HTML
    const html = render(req.url, pageContext);
    
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`SSR Preview server running at http://localhost:${PORT}`);
});
