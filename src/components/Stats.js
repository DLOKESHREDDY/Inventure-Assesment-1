import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      number: "24/7",
      label: "Platform Availability",
      description: "Always accessible recruitment tools"
    },
    {
      number: "500+",
      label: "Active Brokers",
      description: "Growing community of professionals"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Proven placement effectiveness"
    },
    {
      number: "AI-Powered",
      label: "Matching Engine",
      description: "Intelligent candidate matching"
    }
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Platform Performance</h2>
          <p className="section-subtitle">
            Delivering results through modern recruitment technology
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
