import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './News.css';

const News = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="news" ref={ref}>
      <div className="container">
        <motion.div 
          className="news-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Recruitment Innovation</h2>
          <h3 className="news-subtitle">Modern Talent Solutions</h3>
          <p className="news-description">
            We're revolutionizing recruitment with a platform that combines human expertise 
            with cutting-edge technology. Our AI-driven approach ensures precision matching 
            while our community of brokers provides the personal touch that makes all the difference.
          </p>
          
          <motion.div 
            className="news-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#contact" className="btn btn-primary">
              Join Our Platform
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
