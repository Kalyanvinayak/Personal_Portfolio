import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Name',
      value: 'kalyan vinayak',
      href: '#'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kalyanvinayak1@gmail.com',
      href: 'mailto:kalyanvinayak1@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9693145362',
      href: 'tel:9693145362'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kalyanvinayak', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kalyanvinayak', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-light">
              Let's Connect
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-secondary p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Get in Touch</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed text-center">
                I'm always open to discussing new opportunities, innovative projects, 
                or collaborations. Feel free to reach out if you'd like to connect!
              </p>
              
              <div className="flex justify-center space-x-12 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="p-3 bg-primary border border-accent/30 rounded-lg">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-accent transition-colors cursor-hover"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary border border-accent/30 rounded-lg hover:border-accent transition-all duration-300 cursor-hover"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
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

export default Contact;