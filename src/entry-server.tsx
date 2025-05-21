import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { PageContext } from './types';
import { extractHeadElements, generateHtmlResponse } from '@/utils/ssr-utils';

export function render(url: string, context: PageContext) {
  // Pass the URL to the App component for StaticRouter
  const appHtml = ReactDOMServer.renderToString(<App url={url} />);
  
  // Get the current route to determine which page component to use
  const route = url === '/' ? '/' : url.split('/')[1];
  
  // Import the page component dynamically based on the route
  let documentProps;
  try {
    // Try to get the document props from the page component
    const pageModule = require(`./pages/${route === '/' ? 'Index' : route}.tsx`);
    if (pageModule.getDocumentProps) {
      documentProps = pageModule.getDocumentProps();
    } else {
      documentProps = context.exports?.documentProps || {
        title: 'Age Calculator App - Free Online Age Calculators & Tools',
        description: 'Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more.'
      };
    }
  } catch (error) {
    // Fallback to default document props
    documentProps = context.exports?.documentProps || {
      title: 'Age Calculator App - Free Online Age Calculators & Tools',
      description: 'Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more.'
    };
  }
  
  // Generate head elements for SEO
  const headElements = extractHeadElements(documentProps);
  
  // Generate the full HTML response
  return generateHtmlResponse(appHtml, headElements);
}

export function onBeforeRender(pageContext: PageContext) {
  // This function is called before rendering the page
  // You can fetch data here and add it to pageContext.pageProps
  
  return {
    pageContext: {
      pageProps: {
        // Add any data needed by the page
      }
    }
  };
}

export function passToClient(pageContext: PageContext) {
  // This function specifies which parts of pageContext should be passed to the client
  return {
    pageProps: pageContext.pageProps,
    documentProps: pageContext.exports?.documentProps,
    url: pageContext.url
  };
}
