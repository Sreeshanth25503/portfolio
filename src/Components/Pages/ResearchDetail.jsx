import React from 'react';
import { ExternalLink, Award, Presentation } from 'lucide-react';
import { researchPapers } from '../../data/researchData';

const ResearchDetail = () => {
  const hash = window.location.hash.slice(1);
  const paper = researchPapers.find(p => p.slug === hash);

  const goBack = () => {
    window.location.hash = '/research';
    window.scrollTo(0, 0);
  };

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <p className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Paper not found</p>
          <button
            onClick={goBack}
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Back to Research
          </button>
        </div>
      </div>
    );
  }

  const card = 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6';
  const tag = 'px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium';
  const bullet = 'text-gray-900 dark:text-gray-300 mr-2';
  const item = 'text-gray-700 dark:text-gray-300';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Back */}
      <button
        onClick={goBack}
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors cursor-pointer text-sm"
      >
        ← Back to Research Publications
      </button>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700">
          <Award className="w-3 h-3" /> IEEE Published
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700">
          ✦ Equal-Contribution First Author
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        {paper.title}
      </h1>

      {/* Year + conference */}
      <p className="text-gray-500 dark:text-gray-400 mb-3">
        <span className="font-semibold text-gray-700 dark:text-gray-300">{paper.year}</span>
        {' · '}
        {paper.conference}
      </p>

      {/* Short description */}
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        {paper.shortDescription}
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href={paper.ieeeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          View IEEE Publication
        </a>
        <a
          href={paper.presentationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border-2 border-gray-900 dark:border-gray-400 text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white rounded-md transition-colors font-medium"
        >
          <Presentation className="w-5 h-5 mr-2" />
          View Presentation
        </a>
      </div>

      {/* Abstract */}
      <div className={`${card} mb-8`}>
        <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Abstract</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {paper.abstract}
        </p>
      </div>

      {/* Authors */}
      <div className={`${card} mb-8`}>
        <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Authors</h2>

        <ul className="space-y-2 mb-5">
          {paper.authors.map((author, i) => (
            <li key={i} className="flex items-center justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <span className={`font-medium ${author.isMe ? 'text-blue-700 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'}`}>
                {author.name}{author.isMe ? ' (Me)' : ''}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {author.role === 'equal-first' ? 'Equal-Contribution First Author' : 'Co-Author'}
              </span>
            </li>
          ))}
        </ul>

        <div className="text-sm text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-gray-600 pl-4">
          <span className="font-semibold text-gray-700 dark:text-gray-300">Author Role: </span>
          {paper.myRole}
        </div>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          <em>
            This publication was developed through a collaborative first-author model where designated
            authors contributed equally to the research, experimentation, evaluation, and manuscript preparation.
          </em>
        </p>
      </div>

      {/* My Contributions + Technical Details side-by-side */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className={card}>
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">My Contributions</h3>
          <ul className="space-y-2">
            {paper.myContributions.map((c, i) => (
              <li key={i} className="flex items-start">
                <span className={bullet}>•</span>
                <span className={item}>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={card}>
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">Technical Details</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Dataset</p>
              <p className={item}>{paper.dataset}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Language</p>
              <p className={item}>{paper.language}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Algorithms</p>
              <ul className="space-y-1">
                {paper.algorithms.map((a, i) => (
                  <li key={i} className="flex items-start">
                    <span className={bullet}>•</span>
                    <span className={item}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className={`${card} mb-8`}>
        <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">Frameworks &amp; Libraries</h3>
        <div className="flex flex-wrap gap-3">
          {[...paper.frameworks, ...paper.libraries.filter(l => !paper.frameworks.includes(l))].map(lib => (
            <span key={lib} className={tag}>{lib}</span>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className={`${card} mb-8`}>
        <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
        <ul className="space-y-3">
          {paper.metrics.map((m, i) => (
            <li key={i} className="flex items-start py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <span className="w-28 flex-shrink-0 font-semibold text-sm text-gray-900 dark:text-white">{m.name}</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{m.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Publication Info */}
      <div className={`${card} mb-8`}>
        <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">Publication Information</h3>
        <dl className="space-y-0">
          {[
            { label: 'Conference', value: paper.conference },
            { label: 'Year', value: paper.year },
            { label: 'DOI', value: paper.doi },
            { label: 'Status', value: paper.status },
          ].map(row => (
            <div key={row.label} className="grid sm:grid-cols-4 gap-2 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <dt className="text-sm font-semibold text-gray-500 dark:text-gray-400 col-span-1">{row.label}</dt>
              <dd className="text-sm text-gray-800 dark:text-gray-200 col-span-3">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Back link */}
      <div className="text-center pt-2">
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← Back to Research Publications
        </button>
      </div>
    </div>
  );
};

export default ResearchDetail;
