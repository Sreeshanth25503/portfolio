import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Router';
import useScrollSpy from '../hooks/useScrollSpy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  
  // Use scroll-spy to detect active section
  const activeSection = useScrollSpy(['home', 'about', 'projects', 'resume', 'contact'], 100);
  
  // Check if we're on a project detail page
  const isProjectDetailPage = window.location.hash.includes('/projects/');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    // If on project detail page, navigate to home first
    if (isProjectDetailPage) {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  const navLinkClass = (section) => {
    const baseClass = "transition-colors";
    const activeClass = "text-gray-900 font-semibold";
    const inactiveClass = "text-gray-700 hover:text-gray-900";
    
    return `${baseClass} ${activeSection === section ? activeClass : inactiveClass}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-serif font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
          >
            Sreeshanth P
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className={navLinkClass('home')}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={navLinkClass('about')}>
              About
            </button>
            
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
                  <div className="bg-white shadow-lg rounded-md py-2">
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      All Projects
                    </button>
                    <Link to="/projects/text-to-video" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors" onClick={closeMenu}>
                      Text-to-Video Generator
                    </Link>
                    <Link to="/projects/weather" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors" onClick={closeMenu}>
                      Weather Forecast App
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('resume')} className={navLinkClass('resume')}>
              Resume
            </button>
            <button onClick={() => scrollToSection('contact')} className={navLinkClass('contact')}>
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className={`block w-full text-left py-2 ${navLinkClass('home')}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left py-2 ${navLinkClass('about')}`}
            >
              About
            </button>
            
            <div>
              <button 
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className={`flex items-center justify-between w-full py-2 ${navLinkClass('projects')}`}
              >
                Projects <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProjectsOpen && (
                <div className="pl-4 space-y-1">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="block w-full text-left py-2 text-gray-600 hover:text-gray-900"
                  >
                    All Projects
                  </button>
                  <Link to="/projects/text-to-video" className="block py-2 text-gray-600 hover:text-gray-900" onClick={closeMenu}>
                    Text-to-Video Generator
                  </Link>
                  <Link to="/projects/weather" className="block py-2 text-gray-600 hover:text-gray-900" onClick={closeMenu}>
                    Weather Forecast App
                  </Link>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('resume')}
              className={`block w-full text-left py-2 ${navLinkClass('resume')}`}
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left py-2 ${navLinkClass('contact')}`}
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
