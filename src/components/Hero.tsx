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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-emerald-900/20" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Kalyan Vinayak
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-16">
            <span className="text-violet-300">{typedText}</span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Electronics & Communication Engineering student at IIIT Manipur, 
            passionate about competitive programming and building scalable solutions with strong algorithmic foundations.
          </p>
          
          <motion.button
            className="bg-gradient-to-r from-violet-600 to-emerald-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 cursor-hover"
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
        <ChevronDown className="w-8 h-8 text-violet-400" />
      </motion.div>
    </section>
  );
};

export default Hero;