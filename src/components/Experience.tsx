import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: 'Flutter Developer Intern',
      company: 'Wrkin',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Developed cross-platform mobile applications using Flutter and integrated backend services with Django REST framework.',
      achievements: [
        'Built responsive mobile UI components with Flutter',
        'Integrated RESTful APIs for seamless data flow',
        'Implemented authentication and real-time features',
        'Optimized app performance and user experience'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 pb-12"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-emerald-500" />
                
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-500 rounded-full border-4 border-gray-900" />
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-xl text-violet-400 mb-2">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (achIndex * 0.1) }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;