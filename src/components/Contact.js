import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('zJxVmBsaadqS6Wwyx');
  }, []);

  // Control body class and scrolling when alert is shown
  useEffect(() => {
    if (showAlert) {
      document.body.classList.add('popup-active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('popup-active');
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.classList.remove('popup-active');
      document.body.style.overflow = 'unset';
    };
  }, [showAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'default_service',
        'template_zutzxe7',
        form
      );
      
      setAlertType('success');
      setAlertMessage('Thank you for your message! 🌟 I will get back to you soon! 😊');
      setShowAlert(true);
      form.reset();
    } catch (error) {
      setAlertType('error');
      let errorMessage = 'Oops! Something went wrong. Please try again later. 🎯';
      
      if (error.status === 412) {
        errorMessage = 'Email service needs reconnection. Please try again later. 🔌';
      } else if (error.status === 400) {
        errorMessage = 'Please fill in all required fields correctly. 📝';
      } else if (error.status === 429) {
        errorMessage = 'Too many requests. Please try again in a few minutes. ⌛';
      }
      
      setAlertMessage(errorMessage);
      setShowAlert(true);
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const AlertPopup = ({ type, message, onClose }) => (
    <div className="alert-popup-container">
      <div className="alert-overlay" />
      <motion.div
        className={`alert-popup ${type}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      >
        <i className={`alert-icon fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
        <div className="alert-message">{message}</div>
        <motion.button 
          className="alert-close-btn" 
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {type === 'success' ? 'Got it!' : 'Close'}
        </motion.button>
      </motion.div>
    </div>
  );

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>

      <AnimatePresence>
        {showAlert && (
          <AlertPopup
            type={alertType}
            message={alertMessage}
            onClose={() => setShowAlert(false)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Contact; 