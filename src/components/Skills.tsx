import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  proficiency: number;
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
    { name: 'HTML/CSS', proficiency: 90, icon: '🌐' },
    { name: 'JavaScript', proficiency: 85, icon: '📜' },
    { name: 'React', proficiency: 90, icon: '⚛️' },
    { name: 'TypeScript', proficiency: 80, icon: '📘' },
    { name: 'TailwindCSS', proficiency: 85, icon: '🎨' },
    { name: 'Responsive Design', proficiency: 90, icon: '📱' },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Node.js', proficiency: 85, icon: '🟢' },
    { name: 'Express', proficiency: 80, icon: '🚄' },
    { name: 'MongoDB', proficiency: 75, icon: '🍃' },
    { name: 'GraphQL', proficiency: 70, icon: '⬡' },
    { name: 'REST APIs', proficiency: 85, icon: '🔌' },
    { name: 'SQL', proficiency: 75, icon: '🗄️' },
  ];
  
  const otherSkills: Skill[] = [
    { name: 'Git/GitHub', proficiency: 85, icon: '🔄' },
    { name: 'Docker', proficiency: 70, icon: '🐳' },
    { name: 'CI/CD', proficiency: 75, icon: '🔄' },
    { name: 'Testing', proficiency: 80, icon: '🧪' },
    { name: 'Agile/Scrum', proficiency: 85, icon: '📊' },
    { name: 'UI/UX Design', proficiency: 70, icon: '🎯' },
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
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.icon} {skill.name}</span>
                    <span className="text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
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
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.icon} {skill.name}</span>
                    <span className="text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${(index + 6) * 100}ms`
                      }}
                    ></div>
                  </div>
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
            <div className="space-y-5">
              {otherSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.icon} {skill.name}</span>
                    <span className="text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${(index + 12) * 100}ms`
                      }}
                    ></div>
                  </div>
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