import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
// Import both routers for SSR and client-side rendering
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import Index from "./pages/Index";
import Difference from "./pages/Difference";
import DateCalculator from "./pages/DateCalculator";
import BirthdayCountdown from "./pages/BirthdayCountdown";
import PregnancyCalculator from "./pages/PregnancyCalculator";
import LeapYearCalculator from "./pages/LeapYearCalculator";
import Retirement from "./pages/Retirement";
import GenerationFinder from "./pages/GenerationFinder";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable retries for SSR to avoid hanging
      retry: false,
      // Don't refetch on window focus for SSR
      refetchOnWindowFocus: false,
    },
  },
});

// Determine if we're running on the server or client
const isServer = typeof window === 'undefined';

interface AppProps {
  url?: string; // URL for StaticRouter when rendering on server
}

const App = ({ url }: AppProps) => {
  // Router component based on environment
  const RouterComponent = isServer ? StaticRouter : BrowserRouter;
  const routerProps = isServer ? { location: url } : {};

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isServer ? (
          <StaticRouter location={url || '/'}>
            <Routes>
              <Route path="/" element={<Index pageContext={{ exports: {} }} />} />
              <Route path="/difference" element={<Difference />} />
              <Route path="/date-calculator" element={<DateCalculator />} />
              <Route path="/birthday-countdown" element={<BirthdayCountdown />} />
              <Route path="/pregnancy-calculator" element={<PregnancyCalculator />} />
              <Route path="/leap-year-calculator" element={<LeapYearCalculator />} />
              <Route path="/retirement" element={<Retirement />} />
              <Route path="/what-generation-am-i" element={<GenerationFinder />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </StaticRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index pageContext={{ exports: {} }} />} />
              <Route path="/difference" element={<Difference />} />
              <Route path="/date-calculator" element={<DateCalculator />} />
              <Route path="/birthday-countdown" element={<BirthdayCountdown />} />
              <Route path="/pregnancy-calculator" element={<PregnancyCalculator />} />
              <Route path="/leap-year-calculator" element={<LeapYearCalculator />} />
              <Route path="/retirement" element={<Retirement />} />
              <Route path="/what-generation-am-i" element={<GenerationFinder />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
