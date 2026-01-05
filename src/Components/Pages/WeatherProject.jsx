import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from '../Router';

const WeatherProject = () => {
  const project = {
    title: 'Weather Forecast Application',
    description: 'A Python-based desktop weather application with automatic location detection and real-time weather data. Features a modern UI with theme toggle and temperature unit conversion.',
    fullDescription: `A comprehensive desktop weather application built with Python and CustomTkinter that delivers accurate, real-time weather information with an emphasis on user experience and modern design.
    
    The application automatically detects your location using the IPInfo API and converts coordinates into city names via Geopy's Nominatim API. It integrates with WeatherAPI to fetch current weather conditions and displays them in a clean, intuitive interface.
    
    Key features include:
    - Automatic location detection using IP address
    - Search functionality for any city worldwide
    - Real-time weather updates with temperature, humidity, wind speed, and UV index
    - Toggle between Celsius and Fahrenheit
    - Dark mode and light mode theme support
    - Responsive UI that never freezes during data loading
    - Background threading for smooth performance`,
    tech: ['Python', 'CustomTkinter', 'WeatherAPI', 'IPInfo API', 'Geopy', 'Threading', 'Requests'],
    github: 'https://github.com/Sreeshanth25503/Weather-Forecast.git',
    features: [
      'Auto location detection using IP address',
      'Search any city worldwide',
      'Real-time weather data updates',
      'Temperature unit conversion (°C/°F)',
      'Dark mode and light mode themes',
      'Current temperature and feels-like temperature',
      'Humidity percentage tracking',
      'Wind speed monitoring',
      'UV index display',
      'Clean, modern UI with CustomTkinter'
    ],
    challenges: [
      'Implementing smooth threading to prevent UI freezing',
      'Accurate IP-based location detection',
      'Converting coordinates to readable city names',
      'Managing API calls efficiently',
      'Creating a responsive CustomTkinter interface',
      'Handling network errors gracefully'
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to All Projects
      </Link>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
        {project.title}
      </h1>

      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
        >
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">About This Project</h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {project.fullDescription}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Key Features</h3>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-900 mr-2">•</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Technical Challenges</h3>
          <ul className="space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-900 mr-2">•</span>
                <span className="text-gray-700">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Technology Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.tech.map(tech => (
            <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherProject;
