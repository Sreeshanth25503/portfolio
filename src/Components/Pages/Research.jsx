import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from '../Router';
import { researchPapers } from '../../data/researchData';

const Research = ({ homepageMode = false }) => {
  return (
    <section
      id="research"
      className={`${homepageMode ? 'py-20' : 'min-h-screen py-20'}
        bg-gradient-to-br from-gray-50 to-gray-100
        dark:from-gray-900 dark:to-gray-950 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back button — standalone page only */}
        {!homepageMode && (
          <button
            onClick={() => {
              window.location.hash = '';
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
            }}
            className="inline-flex items-center text-gray-600 dark:text-gray-400
              hover:text-gray-900 dark:hover:text-white transition-colors mb-8 text-sm"
          >
            ← Back to Portfolio
          </button>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Research Publications
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
          Published IEEE research in NLP, Deep Learning, and Medical AI. Click any card to explore it in detail.
        </p>

        {/* Cards grid — 2 columns, same layout as Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {researchPapers.map(paper => (
            <div
              key={paper.id}
              className="bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl p-8
                hover:shadow-2xl transition-all hover:scale-[1.02] group flex flex-col"
            >
              {/* Clickable area */}
              <Link to={paper.slug} className="block flex-grow cursor-pointer">
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4
                  group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {paper.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {paper.shortDescription}
                </p>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3">
                    Tech Stack:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {paper.techStack.map(tech => (
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

              {/* Card footer — IEEE link + View Details */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <a
                  href={paper.ieeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center text-gray-600 dark:text-gray-400
                    hover:text-gray-900 dark:hover:text-white transition-colors font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  IEEE
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <Link
                  to={paper.slug}
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

        {/* Homepage CTA */}
        {homepageMode && (
          <div className="mt-12 text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-8 py-4
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                rounded-lg font-semibold text-lg
                hover:bg-gray-800 dark:hover:bg-gray-100
                transition-all hover:scale-105 shadow-lg"
            >
              View All Research
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;
