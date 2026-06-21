import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from '../Router';

const Projects = () => {
  const projects = [
    {
      id: 'text-to-video',
      route: '/projects/text-to-video',
      title: 'Text-to-Video Generator',
      description:
        'An AI-powered application that converts textual descriptions into video content using advanced machine learning models. The system processes natural language input and generates relevant video sequences with appropriate visuals and transitions.',
      tech: ['Python', 'TensorFlow', 'OpenAI', 'Flask', 'FFmpeg'],
      github: 'https://github.com/Sreeshanth25503/Text---Video-Generator.git',
    },
    {
      id: 'weather',
      route: '/projects/weather',
      title: 'Weather Forecast Application',
      description:
        'A Python-based desktop weather application with auto location detection using IPInfo API. Features real-time weather data, temperature unit conversion, dark/light theme toggle, and a modern UI built with CustomTkinter.',
      tech: ['Python', 'CustomTkinter', 'WeatherAPI', 'IPInfo API', 'Threading', 'Requests'],
      github: 'https://github.com/Sreeshanth25503/Weather-Forecast.git',
    },
    {
      id: 'portfolio',
      route: '/projects/portfolio',
      title: 'Personal Portfolio Website',
      description:
        'A modern, fully responsive personal portfolio website built with React and Tailwind CSS. Features custom hash-based routing, a scroll-spy navbar, individual project detail pages, and is deployed on Vercel with automatic CI/CD from GitHub.',
      tech: ['React 18', 'Tailwind CSS', 'Lucide React', 'Hash Routing', 'Vercel', 'GitHub'],
      github: 'https://github.com/Sreeshanth25503/portfolio.git',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100
        dark:from-gray-900 dark:to-gray-950 py-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
          Click on any project card to explore it in detail.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              id={project.id}
              className="bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl p-8
                hover:shadow-2xl transition-all hover:scale-[1.02] group flex flex-col"
            >
              <Link to={project.route} className="block flex-grow cursor-pointer">
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4
                  group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3">
                    Tech Stack:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-br from-gray-50 to-gray-100
                          dark:from-gray-700 dark:to-gray-600
                          text-gray-700 dark:text-gray-300
                          rounded-lg text-sm font-medium
                          border border-gray-200 dark:border-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center text-gray-600 dark:text-gray-400
                    hover:text-gray-900 dark:hover:text-white transition-colors font-medium text-sm"
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <Link
                  to={project.route}
                  className="inline-flex items-center text-gray-900 dark:text-white
                    font-semibold text-sm hover:underline"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
