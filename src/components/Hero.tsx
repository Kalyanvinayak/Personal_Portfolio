import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const useTypingEffect = (strings: string[], typeSpeed = 80, backSpeed = 50) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentStringIndex, setCurrentStringIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentString = strings[currentStringIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentStringIndex, isDeleting, strings, typeSpeed, backSpeed]);

  return displayText;
};

const Hero = () => {
  const typedText = useTypingEffect([
    'Problem Solver',
    'DSA Enthusiast',
    'Competitive Programmer',
    'Flutter Developer',
    'IoT Innovator'
  ]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-secondary/20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-light">
              Kalyan Vinayak
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-16">
            <span className="text-accent">{typedText}</span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Electronics & Communication Engineering student at IIIT Manipur, 
            passionate about competitive programming and building scalable solutions with strong algorithmic foundations.
          </p>
          
          <motion.button
            className="bg-accent px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-accent/80 transition-all duration-300 cursor-hover"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-hover"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </motion.div>
    </section>
  );
};

export default Hero;