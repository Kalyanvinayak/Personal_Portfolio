import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Code2, Trophy } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kalyanvinayak', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kalyanvinayak', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/kalyanvinayak', label: 'LeetCode' },
    { icon: Trophy, href: 'https://auth.geeksforgeeks.org/user/kalyanvinayak', label: 'GeeksforGeeks' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-light">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-primary/50 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-accent">
                      KV
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Electronics & Communication Engineering student at IIIT Manipur (Class of 2026), 
                driven by algorithmic problem-solving and competitive programming with a global LeetCode ranking of 286.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans data structures & algorithms, competitive programming, Flutter development, and IoT systems, 
                allowing me to build efficient, scalable solutions with strong algorithmic foundations.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the power of efficient algorithms and clean code to solve complex problems, 
                whether it's optimizing solutions on competitive platforms or building real-world applications.
              </p>
              
              <div className="flex space-x-4 pt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/50 backdrop-blur-sm border border-accent/30 rounded-lg hover:border-accent/50 transition-all duration-300 cursor-hover"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6 text-accent" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;