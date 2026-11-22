import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Components
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Preloader } from './components/Preloader/Preloader';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransition } from './components/PageTransition/PageTransition';

// Lazy Loaded Pages for Optimal Performance
const Home = lazy(() => import('./pages/Home/Home').then(m => ({ default: m.Home })));
const Residence = lazy(() => import('./pages/Residence/Residence').then(m => ({ default: m.Residence })));
const SuiteDetail = lazy(() => import('./pages/Residence/SuiteDetail').then(m => ({ default: m.SuiteDetail })));
const Experiences = lazy(() => import('./pages/Experiences/Experiences').then(m => ({ default: m.Experiences })));
const Architecture = lazy(() => import('./pages/Architecture/Architecture').then(m => ({ default: m.Architecture })));
const Gallery = lazy(() => import('./pages/Gallery/Gallery').then(m => ({ default: m.Gallery })));
const Reservations = lazy(() => import('./pages/Reservations/Reservations').then(m => ({ default: m.Reservations })));
const Contact = lazy(() => import('./pages/Contact/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Legal/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const FallbackLoader: React.FC = () => (
  <div className="w-full min-h-screen bg-[#10100F] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border border-[#292825] border-t-[#C5AE8B] rounded-full animate-spin" />
      <span className="text-[10px] uppercase font-mono tracking-widest text-[#77736A]">
        Decrypting Subterranean Sector...
      </span>
    </div>
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<FallbackLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/residence"
            element={
              <PageTransition>
                <Residence />
              </PageTransition>
            }
          />
          <Route
            path="/residence/:id"
            element={
              <PageTransition>
                <SuiteDetail />
              </PageTransition>
            }
          />
          <Route
            path="/experiences"
            element={
              <PageTransition>
                <Experiences />
              </PageTransition>
            }
          />
          <Route
            path="/architecture"
            element={
              <PageTransition>
                <Architecture />
              </PageTransition>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            }
          />
          <Route
            path="/reservations"
            element={
              <PageTransition>
                <Reservations />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PageTransition>
                <PrivacyPolicy />
              </PageTransition>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <PageTransition>
                <Terms />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#10100F] text-[#EAE4D9] selection:bg-[#C5AE8B]/30 selection:text-white font-sans overflow-x-hidden">
        {/* Subtle Luxury Noise / Texture */}
        <div className="fixed inset-0 pointer-events-none noise-overlay z-0 opacity-40" />

        {/* Global UX Components */}
        <CustomCursor />
        <ScrollToTop />
        <Preloader />

        {/* Navigation */}
        <Navbar />

        {/* Main Routed Content */}
        <main className="relative z-10 w-full min-h-screen">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
