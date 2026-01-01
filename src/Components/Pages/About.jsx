import React from 'react';

const About = () => (
  <section id="about" className="min-h-screen bg-white py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-12">
        About Me
      </h1>
      
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p className="text-xl">
          I'm currently pursuing my Master of Computer Applications (MCA), focusing on building a strong foundation in computer science and software development. My journey in tech is driven by curiosity and a desire to create meaningful solutions.
        </p>
        
        <p>
          As a Python developer, I enjoy working on diverse projects ranging from AI-powered applications to practical web tools. I'm particularly interested in machine learning, artificial intelligence, and how these technologies can solve real-world problems.
        </p>
        
        <p>
          Beyond coding, I believe in continuous learning and staying updated with the latest technologies. I'm always exploring new frameworks, tools, and methodologies to enhance my skill set and build better applications.
        </p>
        
        <div className="pt-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Python', 'React', 'JavaScript', 'Machine Learning', 'AI/ML', 'Web Development', 'Git', 'RESTful APIs'].map(skill => (
              <div 
                key={skill} 
                className="px-4 py-3 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-lg text-sm font-medium text-center hover:shadow-md hover:scale-105 transition-all border border-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
