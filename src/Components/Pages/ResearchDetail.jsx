import React from 'react';
import { ExternalLink, Award, BookOpen, ChevronRight, Users, Presentation } from 'lucide-react';
import { researchPapers } from '../../data/researchData';

// ── Shared badge components ──────────────────────────────────────────────────

const IEEEBadge = ({ large = false }) => (
  <span className={`inline-flex items-center gap-1.5 font-bold rounded-full border tracking-wide
    bg-blue-100 text-blue-800 border-blue-200
    dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700
    ${large ? 'px-4 py-1.5 text-sm' : 'px-3 py-1 text-xs'}`}>
    <Award className={large ? 'w-4 h-4' : 'w-3 h-3'} />
    IEEE Published
  </span>
);

const EqualFirstBadge = ({ large = false }) => (
  <span className={`inline-flex items-center gap-1 font-semibold rounded-full border
    bg-emerald-100 text-emerald-800 border-emerald-200
    dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700
    ${large ? 'px-4 py-1.5 text-sm' : 'px-3 py-1 text-xs'}`}>
    ✦ Equal-Contribution First Author
  </span>
);

// ── Section card wrapper ─────────────────────────────────────────────────────

const SectionCard = ({ title, icon: Icon, children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
    rounded-2xl p-7 shadow-sm ${className}`}>
    <div className="flex items-center gap-2.5 mb-5">
      {Icon && (
        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30
          flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
        </div>
      )}
      <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    {children}
  </div>
);

// ── Main detail component ────────────────────────────────────────────────────

const ResearchDetail = () => {
  // Resolve paper from current hash
  const hash = window.location.hash.slice(1); // e.g. "/research/exodus-bilstm-texmoji"
  const paper = researchPapers.find(p => p.slug === hash);

  const goBack = () => {
    window.location.hash = '/research';
    window.scrollTo(0, 0);
  };

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center
        bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <p className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Paper not found
          </p>
          <button
            onClick={goBack}
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900
              rounded-xl font-semibold hover:bg-gray-700 transition-colors"
          >
            Back to Research
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">

        {/* Back button */}
        <button
          onClick={goBack}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400
            hover:text-gray-900 dark:hover:text-white transition-colors mb-10 group"
        >
          ← Back to Research Publications
        </button>

        {/* ── 1. Hero Section ─────────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex flex-wrap gap-2 mb-6">
            <IEEEBadge large />
            <EqualFirstBadge large />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold
            text-gray-900 dark:text-white mb-5 leading-tight">
            {paper.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="font-semibold text-gray-700 dark:text-gray-300">{paper.year}</span>
            <ChevronRight className="w-4 h-4" />
            <span>{paper.conference}</span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={paper.ieeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5
                bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm
                transition-all hover:scale-105 shadow-lg shadow-blue-700/20"
            >
              <ExternalLink className="w-4 h-4" />
              View IEEE Publication
            </a>
            <a
              href={paper.presentationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                border-2 border-gray-200 dark:border-gray-600
                hover:border-gray-900 dark:hover:border-gray-400
                rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-sm"
            >
              <Presentation className="w-4 h-4" />
              View Presentation
            </a>
          </div>
        </div>

        {/* ── Content grid ────────────────────────────────────────────────── */}
        <div className="space-y-6">

          {/* 2. Overview */}
          <SectionCard title="Overview" icon={BookOpen}>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {paper.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {paper.recognition.map(r => (
                <span key={r}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                    bg-amber-100 text-amber-800 border border-amber-200
                    dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700">
                  🏆 {r}
                </span>
              ))}
            </div>
          </SectionCard>

          {/* 3. Abstract */}
          <SectionCard title="Abstract" icon={BookOpen}>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base italic border-l-4
              border-blue-200 dark:border-blue-700 pl-5">
              {paper.abstract}
            </p>
          </SectionCard>

          {/* 4 & 5. Author Information + Contribution Note */}
          <SectionCard title="Author Information" icon={Users}>
            {/* Author table */}
            <div className="mb-6">
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {paper.authors.map((author, i) => (
                  <div key={i}
                    className={`flex items-center justify-between p-3 rounded-xl border
                      ${author.isMe
                        ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700'
                        : 'bg-gray-50 border-gray-200 dark:bg-gray-700/40 dark:border-gray-600'
                      }`}>
                    <div>
                      <p className={`text-sm font-semibold ${author.isMe ? 'text-blue-800 dark:text-blue-300' : 'text-gray-800 dark:text-gray-200'}`}>
                        {author.name} {author.isMe && <span className="text-xs">(Me)</span>}
                      </p>
                      <p className="text-xs mt-0.5 text-gray-500 dark:text-gray-400">
                        {author.role === 'equal-first' ? 'Equal-Contribution First Author' : 'Co-Author'}
                      </p>
                    </div>
                    {author.role === 'equal-first' ? (
                      <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">★</span>
                    ) : (
                      <span className="text-gray-400 text-xs">○</span>
                    )}
                  </div>
                ))}
              </div>

              {/* My role highlight */}
              <div className="flex items-start gap-3 p-4 rounded-xl
                bg-emerald-50 border border-emerald-200
                dark:bg-emerald-900/20 dark:border-emerald-700">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5 text-lg">✦</span>
                <div>
                  <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">My Author Role</p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-0.5">{paper.myRole}</p>
                </div>
              </div>
            </div>

            {/* Contribution note */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200
              dark:bg-blue-900/15 dark:border-blue-700/50">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2">
                ℹ️ Author Contribution Note
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                This publication was developed through a collaborative first-author model where designated
                authors contributed equally to the research, experimentation, evaluation, and manuscript
                preparation.
              </p>
            </div>
          </SectionCard>

          {/* 6. My Contributions */}
          <SectionCard title="My Contributions" icon={Users}>
            <div className="grid sm:grid-cols-2 gap-3">
              {paper.myContributions.map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl
                  bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-600">
                  <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40
                    flex items-center justify-center text-blue-700 dark:text-blue-400 text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{c}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 7 & 8. Technical Details + Dataset */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Dataset">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/40
                border border-gray-200 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {paper.dataset}
                </p>
              </div>
            </SectionCard>

            <SectionCard title="Programming Language">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/40
                border border-gray-200 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {paper.language}
                </p>
              </div>
            </SectionCard>
          </div>

          {/* 9. Algorithms */}
          <SectionCard title="Algorithms Used">
            <div className="flex flex-wrap gap-2">
              {paper.algorithms.map((a, i) => (
                <span key={i}
                  className="px-4 py-2 rounded-xl text-sm font-medium
                    bg-purple-50 text-purple-800 border border-purple-200
                    dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700">
                  {a}
                </span>
              ))}
            </div>
          </SectionCard>

          {/* 10. Frameworks & Libraries */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Frameworks">
              <div className="flex flex-wrap gap-2">
                {paper.frameworks.map(f => (
                  <span key={f}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium
                      bg-orange-50 text-orange-800 border border-orange-200
                      dark:bg-orange-900/25 dark:text-orange-300 dark:border-orange-700">
                    {f}
                  </span>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Libraries">
              <div className="flex flex-wrap gap-2">
                {paper.libraries.map(lib => (
                  <span key={lib}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium
                      bg-gray-100 text-gray-700 border border-gray-200
                      dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                    {lib}
                  </span>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* 11. Performance Metrics */}
          <SectionCard title="Performance Metrics">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {paper.metrics.map((m, i) => (
                <div key={i}
                  className="p-4 rounded-xl text-center
                    bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100
                    dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800">
                  <p className="text-2xl font-serif font-bold text-blue-800 dark:text-blue-300">
                    {m.value}
                  </p>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-1 uppercase tracking-wide">
                    {m.name}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 12. Publication Information */}
          <SectionCard title="Publication Information">
            <dl className="space-y-4">
              {[
                { label: 'Conference', value: paper.conference },
                { label: 'Year', value: paper.year },
                { label: 'DOI', value: paper.doi },
                { label: 'Status', value: paper.status },
              ].map(item => (
                <div key={item.label} className="grid sm:grid-cols-4 gap-2 py-3 border-b
                  border-gray-100 dark:border-gray-700 last:border-0">
                  <dt className="text-sm font-semibold text-gray-500 dark:text-gray-400 col-span-1">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-gray-800 dark:text-gray-200 col-span-3 font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionCard>

          {/* 13. External Links + 14. CTA */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-serif font-bold mb-2">Access This Research</h2>
            <p className="text-blue-100 mb-7 text-sm">
              Read the full publication on IEEE Xplore or view the conference presentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={paper.ieeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5
                  bg-white text-blue-800 rounded-xl font-bold text-sm
                  hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                View IEEE Publication
              </a>
              <a
                href={paper.presentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5
                  bg-blue-600/40 text-white border border-blue-400/50 rounded-xl font-bold text-sm
                  hover:bg-blue-600/60 transition-all hover:scale-105"
              >
                <Presentation className="w-4 h-4" />
                View Presentation
              </a>
            </div>
          </div>

          {/* Back CTA */}
          <div className="text-center pt-4">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 px-6 py-3
                text-sm font-semibold text-gray-600 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← Back to Research Publications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
