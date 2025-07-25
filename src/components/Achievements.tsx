import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Award, Target } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = [
    {
      title: 'LeetCode Global Ranking',
      description: 'Rank 286 Worldwide',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      year: '2024'
    },
    {
      title: 'Competitive Programming',
      description: '500+ Problems Solved',
      icon: Star,
      color: 'from-emerald-500 to-teal-500',
      year: '2024'
    },
    {
      title: 'Google Solution Challenge',
      description: 'Top 105 Global Finalist',
      icon: Award,
      color: 'from-blue-500 to-violet-500',
      year: '2024'
    },
    {
      title: 'Flipkart Grid 6.0',
      description: 'Level 1 Qualifier',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      year: 'Ongoing'
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group cursor-hover"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full flex flex-col items-center text-center group-hover:border-violet-500/30 transition-all duration-300">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{achievement.description}</p>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;