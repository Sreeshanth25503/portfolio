import React from 'react';

const Home = () => (
  <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <div className="max-w-4xl w-full text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
        Hello, World.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
        I'm Sreeshanth P, an MCA student and Python developer passionate about building intelligent solutions and exploring the intersection of AI and web development.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a 
          href="#projects" 
          className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg text-lg font-medium"
        >
          View My Work
        </a>
        <a 
          href="#contact" 
          className="inline-flex items-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all hover:scale-105 shadow-lg text-lg font-medium"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default Home;
