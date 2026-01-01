import React from 'react';
import { Download, ExternalLink, GraduationCap, Code, Briefcase } from 'lucide-react';

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1CcRbd5JfkL9eZxFyndPQj4fIaElUJgWA/view';
  
  return (
    <section id="resume" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            View or download my complete resume to learn more about my experience, skills, and projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg font-semibold text-lg"
            >
              <ExternalLink className="w-6 h-6 mr-3" />
              View Full Resume
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all hover:scale-105 shadow-lg font-semibold text-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:scale-105 transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-3 text-xl">Education</h3>
              <p className="text-gray-600">Master of Computer Applications (MCA)</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:scale-105 transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-3 text-xl">Specialization</h3>
              <p className="text-gray-600">Python Development & AI/ML</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:scale-105 transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-3 text-xl">Experience</h3>
              <p className="text-gray-600">Full-Stack & AI Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
