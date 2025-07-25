import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'DSA & Problem Solving',
      skills: ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory', 'Competitive Programming'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'C', 'Dart', 'JavaScript'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Development & Tools',
      skills: ['Flutter', 'Django', 'React', 'Firebase', 'GCP', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IoT & Research',
      skills: ['ESP32', 'LoRa', 'Embedded C', 'Research', 'Technical Writing'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300 cursor-hover"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;