import React, { useState } from 'react';
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
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'headshots':
        return <Headshots />;
      case 'portraits':
        return <Portraits />;
      case 'pricing':
        return <Pricing />;
      case 'about':
        return <AboutPage />;
      case 'inquire':
        return <Inquire />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Portfolio />
            <About />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-white/20 selection:text-white flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;