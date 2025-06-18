import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  useEffect(() => {
    emailjs.init('zJxVmBsaadqS6Wwyx');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const btn = document.getElementById('button');

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_zutzxe7';

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        btn.value = 'Send Email';
        alert('🌟 Thank you for your message! 😊\n\nI will get back to you soon! 🤗 ✨');
        event.target.reset();
        // Reload the page after successful submission
        window.location.reload();
      }, (err) => {
        btn.value = 'Send Email';
        if (err.status === 412) {
          alert('🔄 Email service needs reconnection 🔌\n\nPlease try again later or contact me through other means 📱');
        } else if (err.status === 400) {
          alert('📝 Oops! Please fill in all required fields correctly ✍️');
        } else if (err.status === 429) {
          alert('⌛ Hold on! Too many requests 🚦\n\nPlease try again in a few minutes 🕐');
        } else {
          alert('🎯 Oops! Something went wrong 🎲\n\nPlease try sending your message again later 🔄');
        }
        console.error('EmailJS Error:', err);
      });
  };

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
        <form className="contact-form" id="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <input 
            type="submit" 
            className="submit-btn" 
            id="button" 
            value="Send Message"
          />
        </form>
      </div>
    </motion.section>
  );
}

export default Contact; 