import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

const TextToVideoProject = () => {
  const project = {
    title: 'Text-to-Video Generator',
    description:
      'An AI-powered application that converts textual descriptions into video content using advanced machine learning models. The system processes natural language input and generates relevant video sequences with appropriate visuals and transitions.',
    fullDescription: `This innovative project leverages cutting-edge AI technology to transform written text into engaging video content.

    The application uses advanced natural language processing to understand the context and sentiment of the input text, then generates appropriate visual sequences that match the narrative. The system integrates multiple AI models including text analysis, image generation, and video synthesis to create cohesive video outputs.

    Key features include:
    - Natural language understanding for context-aware video generation
    - Automated scene selection and transition effects
    - Support for multiple video styles and themes
    - Real-time preview and editing capabilities
    - Export in various video formats and resolutions`,
    tech: ['Python', 'TensorFlow', 'OpenAI', 'Flask', 'FFmpeg', 'React', 'REST API'],
    github: 'https://github.com/Sreeshanth25503/Text---Video-Generator.git',
    features: [
      'AI-powered text analysis and understanding',
      'Automated video scene generation',
      'Multiple visual styles and themes',
      'Real-time preview functionality',
      'Custom transition effects',
      'Multiple export formats (MP4, AVI, MOV)',
      'Batch processing support',
    ],
    challenges: [
      'Optimizing AI model performance for real-time generation',
      'Ensuring coherent visual storytelling',
      'Managing computational resources efficiently',
      'Implementing smooth transitions between scenes',
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

export default TextToVideoProject;
