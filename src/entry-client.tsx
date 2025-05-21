import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PageContextClient } from './types';
import './index.css';

export function render(pageContext: PageContextClient) {
  const { url } = pageContext;
  const root = document.getElementById('root');
  
  if (!root) {
    throw new Error('Root element not found');
  }
  
  // Use hydrateRoot for SSR hydration
  if (pageContext.isHydration) {
    ReactDOM.hydrateRoot(
      root,
      <App url={url} />
    );
  } else {
    // For client-side navigation, use createRoot
    const rootInstance = ReactDOM.createRoot(root);
    rootInstance.render(<App url={url} />);
  }
}

// This function is called when the page is loaded in the browser
export function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive');
  
  // Remove any loading indicators or splash screens
  const loadingIndicator = document.getElementById('page-loading');
  if (loadingIndicator) {
    loadingIndicator.style.display = 'none';
  }
}

// This function is called when navigating to a new page
export function onPageTransitionStart() {
  console.log('Page transition start');
  // Show a loading indicator
  document.body.classList.add('page-transition');
}

// This function is called when a new page has been loaded
export function onPageTransitionEnd() {
  console.log('Page transition end');
  // Hide the loading indicator
  document.body.classList.remove('page-transition');
}
