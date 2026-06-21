import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Router from './Components/Router';
import { Route } from './Components/Router';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Research from './Components/Pages/Research';
import ResearchDetail from './Components/Pages/ResearchDetail';
import TextToVideoProject from './Components/Pages/TextToVideoProject';
import WeatherProject from './Components/Pages/WeatherProject';
import PortfolioProject from './Components/Pages/PortfolioProject';
import Resume from './Components/Pages/Resume';
import Contact from './Components/Pages/Contact';

// Determine what kind of page the current hash represents
const getPageType = (hash) => {
  if (hash.startsWith('#/projects/')) return 'project-detail';
  if (hash.startsWith('#/research/')) return 'research-detail';
  if (hash === '#/research') return 'research-listing';
  return 'home-scroll';
};

const App = () => {
  const [pageType, setPageType] = useState(() => getPageType(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const type = getPageType(window.location.hash);
      setPageType(type);
      if (type !== 'home-scroll') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Scroll to top on initial load for detail/listing pages
    if (pageType !== 'home-scroll') {
      window.scrollTo(0, 0);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pageType]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {pageType === 'project-detail' && (
        <main className="flex-grow pt-16">
          <Router>
            <Route path="/projects/text-to-video">
              <TextToVideoProject />
            </Route>
            <Route path="/projects/weather">
              <WeatherProject />
            </Route>
            <Route path="/projects/portfolio">
              <PortfolioProject />
            </Route>
          </Router>
        </main>
      )}

      {pageType === 'research-detail' && (
        <main className="flex-grow pt-16">
          <ResearchDetail />
        </main>
      )}

      {pageType === 'research-listing' && (
        <main className="flex-grow pt-16">
          <Research homepageMode={false} />
        </main>
      )}

      {pageType === 'home-scroll' && (
        <main className="flex-grow">
          <Home />
          <About />
          <Projects />
          <Research homepageMode={true} />
          <Resume />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  );
};

export default App;