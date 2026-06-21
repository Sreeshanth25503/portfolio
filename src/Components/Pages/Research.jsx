import React, { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight, BookOpen, Award } from 'lucide-react';
import { Link } from '../Router';
import { researchPapers } from '../../data/researchData';

// ── Badge components ────────────────────────────────────────────────────────

const IEEEBadge = () => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold
    bg-blue-100 text-blue-800 border border-blue-200
    dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700 tracking-wide">
    <Award className="w-3 h-3" />
    IEEE Published
  </span>
);

const EqualFirstBadge = () => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold
    bg-emerald-100 text-emerald-800 border border-emerald-200
    dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700">
    ✦ Equal-Contribution First Author
  </span>
);

// ── Research card ────────────────────────────────────────────────────────────

const ResearchCard = ({ paper, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-8 transition-all duration-700 flex flex-col
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-2xl p-8 shadow-sm
        hover:shadow-2xl hover:-translate-y-1
        group"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Year + conference */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {paper.year}
        </span>
        <span className="text-gray-300 dark:text-gray-600">•</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{paper.conferenceShort}</span>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <IEEEBadge />
        <EqualFirstBadge />
      </div>

      {/* Title */}
      <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3 leading-snug
        group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
        {paper.title}
      </h2>

      {/* Short description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow text-sm">
        {paper.shortDescription}
      </p>

      {/* Tech stack */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {paper.techStack.slice(0, 5).map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg
                bg-gray-100 text-gray-700 border border-gray-200
                dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
          {paper.techStack.length > 5 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              +{paper.techStack.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
        <a
          href={paper.ieeeLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400
            hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          IEEE Publication
        </a>
        <Link
          to={paper.slug}
          className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 dark:text-white
            hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

// ── Research listing page ───────────────────────────────────────────────────

const Research = ({ homepageMode = false }) => {
  return (
    <section
      id="research"
      className={`${homepageMode ? 'py-20' : 'min-h-screen py-20 pt-28'}
        bg-gradient-to-br from-gray-50 via-white to-blue-50/30
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-900`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          {!homepageMode && (
            <button
              onClick={() => { window.location.hash = ''; setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80); }}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
            >
              ← Back to Portfolio
            </button>
          )}

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
              IEEE Research
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Research Publications
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Published research contributions in Natural Language Processing, Deep Learning, Medical AI,
            and Explainable Machine Learning, presented at IEEE conferences.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mb-14">
          {[
            { label: 'Publications', value: '2' },
            { label: 'IEEE Conferences', value: '2' },
            { label: 'Research Areas', value: '3' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-3xl font-serif font-bold text-gray-900 dark:text-white">{stat.value}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {researchPapers.map((paper, i) => (
            <ResearchCard key={paper.id} paper={paper} index={i} />
          ))}
        </div>

        {/* Homepage CTA */}
        {homepageMode && (
          <div className="mt-12 text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white
                text-white dark:text-gray-900 rounded-xl font-semibold text-base
                hover:bg-gray-700 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
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
