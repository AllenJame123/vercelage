const express = require('express');
const path = require('path');
const fs = require('fs');

// Import our server-side renderer
const { render } = require('./dist/server/entry-server.cjs');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/client')));

app.get('*', async (req, res) => {
  const url = req.url;
  const html = await render(url);
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Preview server running at http://localhost:${port}`);
});
