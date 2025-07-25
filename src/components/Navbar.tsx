import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent cursor-hover"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            KV
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                className="text-gray-300 hover:text-white transition-colors cursor-hover"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      <motion.div
        className="h-1 bg-gradient-to-r from-violet-500 to-emerald-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </motion.nav>
  );
};

export default Navbar;