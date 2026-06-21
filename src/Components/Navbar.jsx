import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, BookOpen } from 'lucide-react';
import { Link } from './Router';
import useScrollSpy from '../hooks/useScrollSpy';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Use scroll-spy to detect active section
  const activeSection = useScrollSpy(
    ['home', 'about', 'projects', 'research', 'resume', 'contact'],
    100
  );

  // Check page type from hash
  const hash = window.location.hash;
  const isProjectDetailPage = hash.includes('/projects/');
  const isResearchPage = hash === '#/research' || hash.includes('/research/');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (isProjectDetailPage || isResearchPage) {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const navLinkClass = (section) => {
    const base = 'transition-colors font-medium text-sm';
    const active = 'text-gray-900 dark:text-white font-semibold';
    const inactive = 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white';
    return `${base} ${activeSection === section && !isProjectDetailPage && !isResearchPage ? active : inactive}`;
  };

  const researchLinkClass = isResearchPage
    ? 'text-blue-700 dark:text-blue-400 font-semibold text-sm transition-colors'
    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50
      bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
      border-b border-gray-200/60 dark:border-gray-700/60
      shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-serif font-bold text-gray-900 dark:text-white
              hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            Sreeshanth P
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            <button onClick={() => scrollToSection('home')} className={navLinkClass('home')}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={navLinkClass('about')}>
              About
            </button>

            {/* Projects dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className={`${navLinkClass('projects')} flex items-center`}
              >
                Projects <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isProjectsOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-2
                    border border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="block w-full text-left px-4 py-2.5 text-sm
                        text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/60
                        transition-colors"
                    >
                      All Projects
                    </button>
                    <Link
                      to="/projects/text-to-video"
                      className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300
                        hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors"
                      onClick={closeMenu}
                    >
                      Text-to-Video Generator
                    </Link>
                    <Link
                      to="/projects/weather"
                      className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300
                        hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors"
                      onClick={closeMenu}
                    >
                      Weather Forecast App
                    </Link>
                    <Link
                      to="/projects/portfolio"
                      className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300
                        hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors"
                      onClick={closeMenu}
                    >
                      Portfolio Website
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Research Publications */}
            <Link
              to="/research"
              className={`${researchLinkClass} flex items-center gap-1`}
              onClick={closeMenu}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Research
            </Link>

            <button onClick={() => scrollToSection('resume')} className={navLinkClass('resume')}>
              Resume
            </button>
            <button onClick={() => scrollToSection('contact')} className={navLinkClass('contact')}>
              Contact
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-10 h-10 rounded-xl flex items-center justify-center
                bg-gray-100 dark:bg-gray-800
                hover:bg-gray-200 dark:hover:bg-gray-700
                text-gray-700 dark:text-gray-300
                transition-all duration-200 hover:scale-105"
            >
              {isDark ? <Sun className="w-4.5 h-4.5 w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
          </div>

          {/* Mobile: dark mode + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-lg flex items-center justify-center
                bg-gray-100 dark:bg-gray-800
                hover:bg-gray-200 dark:hover:bg-gray-700
                text-gray-700 dark:text-gray-300 transition-all"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 p-1"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900
          border-t border-gray-200 dark:border-gray-700 transition-colors">
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className={`block w-full text-left py-2.5 ${navLinkClass('home')}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left py-2.5 ${navLinkClass('about')}`}
            >
              About
            </button>

            <div>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className={`flex items-center justify-between w-full py-2.5 ${navLinkClass('projects')}`}
              >
                Projects
                <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProjectsOpen && (
                <div className="pl-4 space-y-1 pb-1">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="block w-full text-left py-2 text-sm text-gray-600 dark:text-gray-400
                      hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    All Projects
                  </button>
                  <Link
                    to="/projects/text-to-video"
                    className="block py-2 text-sm text-gray-600 dark:text-gray-400
                      hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    Text-to-Video Generator
                  </Link>
                  <Link
                    to="/projects/weather"
                    className="block py-2 text-sm text-gray-600 dark:text-gray-400
                      hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    Weather Forecast App
                  </Link>
                  <Link
                    to="/projects/portfolio"
                    className="block py-2 text-sm text-gray-600 dark:text-gray-400
                      hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    Portfolio Website
                  </Link>
                </div>
              )}
            </div>

            {/* Research in mobile */}
            <Link
              to="/research"
              className={`flex items-center gap-1.5 py-2.5 ${researchLinkClass}`}
              onClick={closeMenu}
            >
              <BookOpen className="w-4 h-4" />
              Research Publications
            </Link>

            <button
              onClick={() => scrollToSection('resume')}
              className={`block w-full text-left py-2.5 ${navLinkClass('resume')}`}
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left py-2.5 ${navLinkClass('contact')}`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
