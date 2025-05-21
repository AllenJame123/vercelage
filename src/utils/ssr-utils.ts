interface DocumentProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

/**
 * Extracts head elements from document properties for SEO
 */
export function extractHeadElements(documentProps: DocumentProps): string {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl
  } = documentProps;

  let headElements = '';

  if (title) {
    headElements += `<title>${title}</title>\n`;
  }

  if (description) {
    headElements += `<meta name="description" content="${description}" />\n`;
  }

  if (keywords) {
    headElements += `<meta name="keywords" content="${keywords}" />\n`;
  }

  // Open Graph tags
  if (ogTitle || title) {
    headElements += `<meta property="og:title" content="${ogTitle || title}" />\n`;
  }

  if (ogDescription || description) {
    headElements += `<meta property="og:description" content="${ogDescription || description}" />\n`;
  }

  if (ogImage) {
    headElements += `<meta property="og:image" content="${ogImage}" />\n`;
  }

  if (ogUrl) {
    headElements += `<meta property="og:url" content="${ogUrl}" />\n`;
  }

  headElements += `<meta property="og:type" content="website" />\n`;

  // Twitter tags
  if (twitterCard) {
    headElements += `<meta name="twitter:card" content="${twitterCard}" />\n`;
  } else {
    headElements += `<meta name="twitter:card" content="summary_large_image" />\n`;
  }

  if (twitterTitle || ogTitle || title) {
    headElements += `<meta name="twitter:title" content="${twitterTitle || ogTitle || title}" />\n`;
  }

  if (twitterDescription || ogDescription || description) {
    headElements += `<meta name="twitter:description" content="${twitterDescription || ogDescription || description}" />\n`;
  }

  if (twitterImage || ogImage) {
    headElements += `<meta name="twitter:image" content="${twitterImage || ogImage}" />\n`;
  }

  // Canonical URL
  if (canonicalUrl) {
    headElements += `<link rel="canonical" href="${canonicalUrl}" />\n`;
  }

  return headElements;
}

/**
 * Generates the full HTML response with the rendered app and head elements
 */
export function generateHtmlResponse(appHtml: string, headElements: string): string {
  // Create the full HTML document
  return `<!DOCTYPE html>
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
      </body>
    </html>`;
}
