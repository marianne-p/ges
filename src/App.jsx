import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import ErrorBoundary from './components/ErrorBoundary';
import navItems from './nav-items.jsx';
import queryClient from './queryClient'; // Import the queryClient instance

const Comparison = lazy(() => import('./pages/Comparison'));

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router basename="/ges/">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/comparison" element={<Comparison />} />
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
              {/* Catch all route for 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
