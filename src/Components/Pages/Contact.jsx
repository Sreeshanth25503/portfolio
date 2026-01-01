import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="min-h-screen bg-white py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-12">
        Get In Touch
      </h1>
      
      <div className="space-y-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out through any of the channels below.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6 pt-8">
          <a 
            href="mailto:sreeshanth25503@gmail.com"
            className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <Mail className="w-14 h-14 text-gray-900 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
            <p className="text-gray-600 text-sm text-center break-all">sreeshanth25503@gmail.com</p>
          </a>
          
          <a 
            href="https://github.com/Sreeshanth25503"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <Github className="w-14 h-14 text-gray-900 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2 text-lg">GitHub</h3>
            <p className="text-gray-600 text-sm text-center">@Sreeshanth25503</p>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/sreeshanthp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <Linkedin className="w-14 h-14 text-gray-900 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2 text-lg">LinkedIn</h3>
            <p className="text-gray-600 text-sm text-center">Sreeshanth P</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
