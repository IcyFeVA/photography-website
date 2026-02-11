import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Pages
import Headshots from './components/pages/Headshots';
import Portraits from './components/pages/Portraits';
import Pricing from './components/pages/Pricing';
import AboutPage from './components/pages/AboutPage';
import Inquire from './components/pages/Inquire';
import RhysMadison from './components/pages/RhysMadison';
import JessicaWong from './components/pages/JessicaWong';
import SEO from './components/SEO';
import Schema from './components/Schema';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent browser from checking scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Blur any focused element (like the footer link) to prevent browser from
    // fighting the scroll to keep it in view
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Force scroll to top immediately, overriding smooth scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-white/20 selection:text-white flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <SEO
                title="Pascal Zirn Photography | Vancouver Headshots & Portraits"
                description="Professional headshot and portrait photographer in Vancouver, BC. Specializing in actor headshots, corporate profiles, and artistic portraits."
              />
              <Schema />
              <Hero />
              <Portfolio />
              <About />
              <Testimonials />
            </>
          } />
          <Route path="/headshots" element={<Headshots />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/rhys-madison" element={<RhysMadison />} />
          <Route path="/jessica-wong" element={<JessicaWong />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;