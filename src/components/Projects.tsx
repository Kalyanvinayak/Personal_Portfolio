import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Shield, Wind, Wifi, FileText } from 'lucide-react';
import { useParallax } from 'react-scroll-parallax';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { ref: parallaxRef } = useParallax<HTMLDivElement>({ speed: index % 2 === 0 ? 10 : -10 });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`bg-primary backdrop-blur-sm border border-primary/50 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      } lg:flex lg:items-center lg:space-x-8`}
      whileHover={{ scale: 1.01, y: -5 }}
    >
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`p-3 rounded-lg bg-accent`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>

        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: any) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary border border-secondary/50 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className={`text-sm font-semibold mb-6 text-accent`}>
          {project.impact}
        </p>

        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-secondary hover:bg-secondary/80 border border-secondary/50 rounded-lg transition-all duration-300 cursor-hover"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Github className="w-4 h-4" />
            <span>{project.icon === FileText ? 'Paper' : 'Code'}</span>
          </motion.a>
        </div>
      </div>

      <div className="lg:w-1/2" ref={parallaxRef}>
        <motion.div
          className={`aspect-video rounded-xl bg-accent/20 p-1`}
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-full h-full bg-primary rounded-lg flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-24 h-24 text-accent/50" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Aapda Sanrakshan',
      description: 'Comprehensive disaster management application built with Flutter and Django, featuring real-time alerts, resource mapping, and emergency communication systems.',
      icon: Shield,
      tech: ['Flutter', 'Django', 'Firebase', 'GCP', 'Machine Learning'],
      github: 'https://github.com/kalyanvinayak/aapda-sanrakshan',
      impact: 'Designed to serve 10,000+ users during emergencies',
    },
    {
      title: 'VāyuRakshak',
      description: 'Advanced gas monitoring system using IoT sensors and machine learning for real-time air quality assessment and pollution prediction.',
      icon: Wind,
      tech: ['ESP32', 'Python', 'LSTM', 'IoT Sensors', 'MongoDB'],
      github: 'https://github.com/kalyanvinayak/vayu-rakshak',
      impact: 'Monitors air quality across multiple locations',
    },
    {
      title: 'Wildlife LoRa Network',
      description: 'Long-range communication network for wildlife tracking and conservation using LoRa technology and embedded systems.',
      icon: Wifi,
      tech: ['LoRa', 'ESP32', 'Embedded C', 'GPS', 'Solar Power'],
      github: 'https://github.com/kalyanvinayak/wildlife-lora',
      impact: 'Tracking 50+ wildlife species remotely',
    },
    {
      title: 'LoRa Communication Research',
      description: 'Comprehensive research paper analyzing LoRa module applications and use cases in Indian infrastructure, focusing on rural connectivity and IoT deployment strategies.',
      icon: FileText,
      tech: ['LoRa', 'Research', 'Technical Writing', 'IoT', 'Network Analysis'],
      github: 'https://github.com/kalyanvinayak/lora-research-paper',
      impact: 'Published research on LoRa applications in India',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-light">Featured Projects</span>
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
