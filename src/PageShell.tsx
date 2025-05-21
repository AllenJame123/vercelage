import React, { createContext, useContext } from 'react'
import type { PageContext } from './types'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Create a context for the page context
const PageContextContext = createContext<PageContext | null>(null)

// Hook to access the page context
export function usePageContext() {
  const pageContext = useContext(PageContextContext)
  if (!pageContext) {
    throw new Error('usePageContext() must be used within a PageContextProvider')
  }
  return pageContext
}

export function PageShell({ 
  children, 
  pageContext 
}: { 
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextContext.Provider value={pageContext}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div id="page-root">
            {/* Add a loading indicator that will be hidden after hydration */}
            <div id="page-loading" style={{ 
              display: 'none', // Initially hidden, shown via CSS if needed
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 9999,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div>Loading...</div>
            </div>
            {children}
          </div>
        </TooltipProvider>
      </PageContextContext.Provider>
    </React.StrictMode>
  )
}
