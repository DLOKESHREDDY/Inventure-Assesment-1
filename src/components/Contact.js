import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to revolutionize your recruitment process? Let's start the conversation.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form Section */}
          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="form-title">Send us a message</h3>
            <p className="form-subtitle">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter your full name"
                />
                {errors.name && <div className="form-error">{errors.name.message}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Enter your email address"
                />
                {errors.email && <div className="form-error">{errors.email.message}</div>}
              </div>

              <div className="form-group">
                <label className="form-label optional">Company</label>
                <input
                  type="text"
                  className="form-input"
                  {...register('company')}
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell us about your recruitment needs..."
                  rows="5"
                />
                {errors.message && <div className="form-error">{errors.message.message}</div>}
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="privacy"
                  className="checkbox-input"
                  {...register('privacy', { required: 'Please accept the privacy policy' })}
                />
                <label htmlFor="privacy" className="checkbox-label">
                  I agree to the privacy policy and consent to being contacted regarding my inquiry.
                </label>
                {errors.privacy && <div className="form-error">{errors.privacy.message}</div>}
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>

              {isSubmitted && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
