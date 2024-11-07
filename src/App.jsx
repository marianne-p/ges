import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navItems } from "./nav-items";
import ErrorBoundary from "@/components/ErrorBoundary";

// Configure query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Loading fallback
const LoadingSpinner = () => <div>Loading...</div>;

const App = () => (
  <>
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@300;400;500;600&display=swap"
      as="style"
      crossOrigin="anonymous"
    />
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {navItems.map(({ to, page }) => (
                  <Route key={to} path={to} element={page} />
                ))}
                {/* Catch all route for 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </>
);

export default App;
