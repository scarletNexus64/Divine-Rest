import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

// Lazy loading des pages pour optimiser les performances
const Home = lazy(() => import('./pages/Home'));
const NotreEquipe = lazy(() => import('./pages/NotreEquipe'));
const Services = lazy(() => import('./pages/Services'));
const Catalogue = lazy(() => import('./pages/Catalogue'));
const Accompagnement = lazy(() => import('./pages/Accompagnement'));
const Tarifs = lazy(() => import('./pages/Tarifs'));
const Contact = lazy(() => import('./pages/Contact'));
const EspaceMemoire = lazy(() => import('./pages/EspaceMemoire'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const Devis = lazy(() => import('./pages/Devis'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notre-equipe" element={<NotreEquipe />} />
                <Route path="/services" element={<Services />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/accompagnement" element={<Accompagnement />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/espace-memoire" element={<EspaceMemoire />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/devis" element={<Devis />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'dark:bg-gray-800 dark:text-white',
              duration: 4000,
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
