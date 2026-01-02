import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => (
  <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative">
    <div className="max-w-4xl w-full text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
        Hi, I am<br />
        Sreeshanth P
      </h1>
      
      {/* Tightened tagline - more concrete */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
        Focused on building real software through hands-on projects.
      </p>
      
      {/* Clear primary/secondary button hierarchy */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Primary button - solid, guides to work */}
        <a 
          href="#projects" 
          className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg text-lg font-medium"
        >
          View My Work
        </a>
        
        {/* Secondary button - outline, less prominent */}
        <a 
          href="#contact" 
          className="inline-flex items-center px-8 py-4 bg-transparent text-gray-900 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all hover:scale-105 text-lg font-medium"
        >
          Get In Touch
        </a>
      </div>
      
      {/* Credibility hint - subtle skills indicator */}
      <p className="text-sm text-gray-500 font-medium">
        Python • Web • AI
      </p>
    </div>
    
    {/* Scroll indicator - animated down arrow */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
        <span className="text-xs mb-1">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </div>
  </section>
);

export default Home;
