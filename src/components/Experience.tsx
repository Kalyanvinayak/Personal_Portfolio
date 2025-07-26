import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useParallax } from 'react-scroll-parallax';

const Experience = () => {
const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const { ref: parallaxRef } = useParallax<HTMLDivElement>({ speed: 5 });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      key={index}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent" />

      {/* Timeline dot */}
      <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full border-4 border-primary" />

      <div ref={parallaxRef} className="bg-secondary backdrop-blur-sm border border-secondary/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
            <p className="text-xl text-accent mb-2">{exp.company}</p>
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
          {exp.achievements.map((achievement: any, achIndex: number) => (
            <motion.li
              key={achIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: (index * 0.2) + (achIndex * 0.1) }}
              className="flex items-start space-x-3"
            >
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-300">{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

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
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-light">
              Experience
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;