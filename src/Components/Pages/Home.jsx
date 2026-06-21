import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8
      bg-gradient-to-br from-white via-gray-50 to-gray-100
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 relative"
  >
    <div className="max-w-4xl w-full text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold
        text-gray-900 dark:text-white mb-6 animate-fade-in leading-tight">
        Hi, I am<br />
        Sreeshanth P
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400
        max-w-2xl mx-auto leading-relaxed mb-10">
        Focused on building real software through hands-on projects.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="#projects"
          className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white
            text-white dark:text-gray-900 rounded-lg
            hover:bg-gray-800 dark:hover:bg-gray-100
            transition-all hover:scale-105 shadow-lg text-lg font-medium"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-transparent
            text-gray-900 dark:text-white
            border-2 border-gray-300 dark:border-gray-600
            hover:border-gray-900 dark:hover:border-white
            hover:bg-gray-50 dark:hover:bg-gray-800/50
            rounded-lg transition-all hover:scale-105 text-lg font-medium"
        >
          Get In Touch
        </a>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
        Python • Web • AI
      </p>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a
        href="#about"
        className="flex flex-col items-center text-gray-400 dark:text-gray-600
          hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
      >
        <span className="text-xs mb-1">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </div>
  </section>
);

export default Home;
