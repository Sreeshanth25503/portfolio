import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

const PortfolioProject = () => {
  const project = {
    title: 'Personal Portfolio Website',
    description:
      'A modern, fully responsive personal portfolio website built with React and Tailwind CSS. Features smooth scroll-spy navigation, hash-based client-side routing, and detailed project showcase pages.',
    fullDescription: `This portfolio website is a full-featured single-page application (SPA) built from scratch to showcase my skills, projects, and experience as a developer.

    The site uses a custom hash-based routing system (no external router library) to deliver a seamless multi-page experience without page reloads. A custom scroll-spy hook tracks the active section in real time and highlights the corresponding nav item.

    Key design decisions:
    - Clean serif + sans-serif typography for a professional, editorial look
    - Tailwind CSS utility-first styling for rapid, consistent UI development
    - Component-based architecture for maintainability and scalability
    - Fully responsive layout optimised for mobile, tablet, and desktop
    - Deployed on Vercel with automatic CI/CD triggered on every GitHub push`,
    tech: ['React 18', 'Tailwind CSS', 'Lucide React', 'Hash Routing', 'Vercel', 'GitHub'],
    github: 'https://github.com/Sreeshanth25503/portfolio.git',
    live: null,
    features: [
      'Fully responsive design — mobile, tablet, desktop',
      'Custom hash-based client-side routing (no React Router)',
      'Scroll-spy navbar that highlights the active section',
      'Projects dropdown menu with individual detail pages',
      'Clickable project cards that navigate to detail pages',
      'Resume viewer with Google Drive link',
      'Contact section with social links',
      'Deployed on Vercel with automatic CI/CD from GitHub',
    ],
    challenges: [
      'Building a custom router without external dependencies',
      'Implementing scroll-spy that works alongside hash routing',
      'Making project cards navigable while keeping the GitHub link separate',
      'Ensuring smooth scroll behaviour when navigating between sections and detail pages',
      'Maintaining a consistent design system across all pages',
    ],
  };

  const goBackToProjects = () => {
    window.location.hash = '';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const cardClass =
    'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6';
  const bulletClass = 'text-gray-900 dark:text-gray-300 mr-2';
  const itemClass = 'text-gray-700 dark:text-gray-300';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <button
        onClick={goBackToProjects}
        className="inline-flex items-center text-gray-600 dark:text-gray-400
          hover:text-gray-900 dark:hover:text-white mb-8 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to All Projects
      </button>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
        {project.title}
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3
            bg-gray-900 dark:bg-white text-white dark:text-gray-900
            rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
        >
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3
              border-2 border-gray-900 dark:border-gray-400
              text-gray-900 dark:text-white
              hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white
              rounded-md transition-colors font-medium"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        )}
      </div>

      <div className={`${cardClass} mb-8`}>
        <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          About This Project
        </h2>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {project.fullDescription}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className={cardClass}>
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Key Features
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className={bulletClass}>•</span>
                <span className={itemClass}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Technical Challenges
          </h3>
          <ul className="space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className={bulletClass}>•</span>
                <span className={itemClass}>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cardClass}>
        <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Technology Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700
                text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
