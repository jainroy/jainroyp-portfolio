import React, { useState } from 'react';
import Section from './Section';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// --- START: EmailJS Configuration ---
// TODO: Replace with your actual EmailJS credentials from https://www.emailjs.com/
// 1. Create an account on EmailJS.
// 2. Add an email service (like Gmail, using your app password).
// 3. Create an email template with variables {{from_name}}, {{from_email}}, {{message}}.
// 4. Find your Service ID, Template ID, and Public Key in your account dashboard.
const EMAILJS_SERVICE_ID = 'service_t39ro3f';
const EMAILJS_TEMPLATE_ID = 'template_5jfs4ig';
const EMAILJS_PUBLIC_KEY = 'YVmQQXDwI5DgTdCVR';
// --- END: EmailJS Configuration ---

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (EMAILJS_SERVICE_ID.includes('YOUR_') || EMAILJS_TEMPLATE_ID.includes('YOUR_') || EMAILJS_PUBLIC_KEY.includes('YOUR_')) {
      setStatus('error');
      setFeedbackMessage('EmailJS is not configured. Please add your credentials.');
      console.error('EmailJS credentials are not set in components/Contact.tsx');
      return;
    }

    setStatus('loading');
    setFeedbackMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
        setFeedbackMessage('Failed to send message. Please try again later.');
      });
  };

  const contactDetails = [
    { icon: FaEnvelope, text: 'jainroyp@gmail.com', href: 'mailto:jainroyp@gmail.com' },
    { icon: FaPhone, text: '+91 9497624284', href: 'tel:+919497624284' },
    { icon: FaLinkedin, text: 'linkedin.com/in/jainroyp', href: 'https://linkedin.com/in/jainroyp' },
    { icon: FaGithub, text: 'github.com/jainroy', href: 'https://github.com/jainroy' },
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p>Feel free to reach out to me for any opportunities or just to say hi! I'm always open to discussing new projects and creative ideas.</p>
            {contactDetails.map((detail, index) => (
                <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors">
                    <detail.icon className="text-2xl text-light-accent dark:text-dark-accent" />
                    <span>{detail.text}</span>
                </a>
            ))}
        </div>
        <div className="p-6 bg-light-card dark:bg-dark-card rounded-lg shadow-lg border border-light-border dark:border-dark-border min-h-[440px]">
          {status === 'success' ? (
            <motion.div 
              className="flex flex-col items-center justify-center h-full text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaCheckCircle className="text-5xl text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
              <p>Your message has been sent successfully. I will get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 bg-light-bg dark:bg-dark-bg/50 border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 bg-light-bg dark:bg-dark-bg/50 border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-3 py-2 bg-light-bg dark:bg-dark-bg/50 border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"></textarea>
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">{feedbackMessage}</p>
              )}
              <button type="submit" disabled={status === 'loading'} className="w-full px-6 py-3 bg-light-accent text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:bg-dark-accent dark:hover:bg-blue-400 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;