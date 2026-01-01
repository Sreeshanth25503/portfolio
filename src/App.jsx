import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Router from './Components/Router';
import { Route } from './Components/Router';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import TextToVideoProject from './Components/Pages/TextToVideoProject';
import WeatherProject from './Components/Pages/WeatherProject';
import Resume from './Components/Pages/Resume';
import Contact from './Components/Pages/Contact';

const App = () => {
  // Check if we're on a project detail page
  const isProjectDetailPage = window.location.hash.includes('/projects/');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {isProjectDetailPage ? (
        // Show router for project detail pages
        <main className="flex-grow pt-16">
          <Router>
            <Route path="/projects/text-to-video">
              <TextToVideoProject />
            </Route>
            <Route path="/projects/weather">
              <WeatherProject />
            </Route>
          </Router>
        </main>
      ) : (
        // Show single-page scroll layout for main sections
        <main className="flex-grow">
          <Home />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
      )}
      
      <Footer />
    </div>
  );
};

export default App;