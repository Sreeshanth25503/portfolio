import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from '../Router';

const WeatherProject = () => {
  const project = {
    title: 'Weather Forecast Application',
    description: 'A responsive web application providing real-time weather information and forecasts. Features include location-based weather data, 7-day forecasts, interactive maps, and severe weather alerts with a clean, intuitive interface.',
    fullDescription: `A comprehensive weather application that delivers accurate, real-time weather information with an emphasis on user experience and data visualization.
    
    The application integrates with the OpenWeather API to fetch current weather conditions, hourly forecasts, and extended 7-day predictions. Users can search for any location worldwide or use automatic geolocation to get local weather data instantly.
    
    Key features include:
    - Real-time weather updates with automatic refresh
    - Interactive weather maps with multiple layers
    - Detailed 7-day forecast with hourly breakdowns
    - Severe weather alerts and notifications
    - Historical weather data and trends
    - Beautiful data visualizations using Chart.js`,
    tech: ['Python', 'Django', 'OpenWeather API', 'JavaScript', 'Chart.js', 'HTML/CSS', 'PostgreSQL'],
    github: 'https://github.com/Sreeshanth25503/Weather-Forecast.git',
    features: [
      'Real-time weather data for any location',
      '7-day extended forecast with hourly details',
      'Interactive weather maps',
      'Severe weather alerts and warnings',
      'Temperature, humidity, wind speed tracking',
      'UV index and air quality information',
      'Sunrise/sunset times',
      'Weather data visualization with charts'
    ],
    challenges: [
      'Handling API rate limits efficiently',
      'Implementing accurate geolocation',
      'Creating responsive data visualizations',
      'Managing real-time data updates',
      'Optimizing performance for mobile devices'
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
