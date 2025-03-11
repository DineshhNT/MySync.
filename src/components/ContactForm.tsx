import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = 'Your_serviceID';
    const templateID = 'Your_templateID';
    const publicKey = 'Your_publicKey';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 sm:px-6">
      <div className="mb-4 sm:mb-6">
        <label htmlFor="name" className="block text-gray-700 dark:text-white text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          required
        />
      </div>
      <div className="mb-4 sm:mb-6">
        <label htmlFor="email" className="block text-gray-700 dark:text-white text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          required
        />
      </div>
      <div className="mb-4 sm:mb-6">
        <label htmlFor="message" className="block text-gray-700 dark:text-white text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center text-sm sm:text-base"
      >
        <Send size={18} className="mr-2 sm:w-5 sm:h-5" />
        Send Message
      </motion.button>
    </form>
  );
};

export default ContactForm;