import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'text-to-video',
      title: 'Text-to-Video Generator',
      description: 'An AI-powered application that converts textual descriptions into video content using advanced machine learning models. The system processes natural language input and generates relevant video sequences with appropriate visuals and transitions.',
      tech: ['Python', 'TensorFlow', 'OpenAI', 'Flask', 'FFmpeg'],
      github: 'https://github.com/Sreeshanth25503/Text---Video-Generator.git'
    },
    {
      id: 'weather',
      title: 'Weather Forecast Application',
      description: 'A responsive web application providing real-time weather information and forecasts. Features include location-based weather data, 7-day forecasts, interactive maps, and severe weather alerts with a clean, intuitive interface.',
      tech: ['Python', 'Django', 'OpenWeather API', 'JavaScript', 'Chart.js'],
      github: 'https://github.com/Sreeshanth25503/Weather-Forecast.git'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-12">
          Projects
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              id={project.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all hover:scale-[1.02] group"
            >
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors font-semibold group-hover:underline"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
