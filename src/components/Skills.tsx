import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'Responsive Design', icon: '📱' },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚄' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'GraphQL', icon: '⬡' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'SQL', icon: '🗄️' },
  ];
  
  const otherSkills: Skill[] = [
    { name: 'Git/GitHub', icon: '🔄' },
    { name: 'Docker', icon: '🐳' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Testing', icon: '🧪' },
    { name: 'Agile/Scrum', icon: '📊' },
    { name: 'UI/UX Design', icon: '🎯' },
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in web development.
            Here's an overview of my technical expertise:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
              <span className="text-primary text-2xl mr-2">💻</span> Frontend Development
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {frontendSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`bg-gray-50 p-3 rounded-lg border-l-4 border-primary transition-all duration-500 transform hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium text-dark flex items-center">
                    <span className="text-lg mr-3">{skill.icon}</span>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
              <span className="text-primary text-2xl mr-2">🔧</span> Backend Development
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {backendSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`bg-gray-50 p-3 rounded-lg border-l-4 border-primary transition-all duration-500 transform hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <span className="font-medium text-dark flex items-center">
                    <span className="text-lg mr-3">{skill.icon}</span>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
              <span className="text-primary text-2xl mr-2">🛠️</span> Other Skills
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {otherSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`bg-gray-50 p-3 rounded-lg border-l-4 border-primary transition-all duration-500 transform hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(index + 12) * 100}ms` }}
                >
                  <span className="font-medium text-dark flex items-center">
                    <span className="text-lg mr-3">{skill.icon}</span>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 