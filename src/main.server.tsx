import { renderToString } from 'react-dom/server'
import { PageShell } from './PageShell'
import type { PageContextServer } from './types'
import { extractHeadElements } from './utils/ssr-utils'

export { render }

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  
  // Get document props from the page component
  const documentProps = pageContext.exports?.documentProps || {
    title: 'Age Calculator App - Free Online Age Calculators & Tools',
    description: 'Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more.'
  }
  
  // Render the app to HTML
  const appHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  
  // Generate head elements for SEO
  const headElements = extractHeadElements(documentProps)
  
  // Create the full HTML document
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/calculator.svg" />
        <link rel="shortcut icon" type="image/svg+xml" href="/calculator.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
        ${headElements}
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
      </body>
    </html>`
  
  return {
    html,
    pageContext: {
      // We can add custom pageContext properties here
      // This pageContext will be available client-side
      documentProps
    }
  }
}
