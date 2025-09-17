import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [refTitle, inViewTitle] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [refContent, inViewContent] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={refTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-2/5 mb-10 lg:mb-0"
            ref={refContent}
            initial={{ opacity: 0, x: -30 }}
            animate={inViewContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary opacity-10 rounded-2xl transform rotate-3"></div>
              <img 
                // src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                src="/images/dp-2.jpeg"
                alt="Rahul - Professional Photo" 
                className="rounded-xl relative z-10 shadow-lg max-w-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-3/5 lg:pl-16"
            ref={refContent}
            initial={{ opacity: 0, x: 30 }}
            animate={inViewContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark">
              I'm <span className="text-primary">Rahul Singh</span>, a Professional Software Developer
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate software developer with a focus on creating beautiful, functional web applications. 
              With over 2 years of experience in the field, I've worked with various technologies and frameworks to 
              deliver high-quality solutions that meet client needs and exceed expectations.
            </p>

            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
              <div className="md:w-1/2">
                <h4 className="text-lg font-semibold mb-2">Personal Info</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Name:</span> Rahul Singh
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Email:</span> Rahul@example.com
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Location:</span> Mumbai, India
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Availability:</span> 
                    <span className="text-green-500">Available for work</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h4 className="text-lg font-semibold mb-2">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Web Development</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">UI/UX Design</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Mobile Apps</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AI & ML</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Open Source</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="/resume.pdf" 
                download
                className="btn-primary"
              >
                Download CV
              </a>
              <a 
                href="#skills" 
                className="btn-outline"
              >
                My Skills
              </a>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default About; 