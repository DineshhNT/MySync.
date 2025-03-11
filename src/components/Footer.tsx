import { Github, InstagramIcon, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-6 sm:py-8 shadow-inner">
      {/* Logo */}
      <div className="flex justify-center">
        <img src="/images/Gradient Modern Technology Company Developers Logo.png" alt="Logo" className="h-12 sm:h-16 md:h-20" />
      </div>

      {/* Name with Gradient Text */}
      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mt-2">
        Dinesh N T
      </h2>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-3 text-black dark:text-white text-base sm:text-lg px-4">
        <button onClick={() => scrollToSection('home')} className="hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] transition-colors">
          Home
        </button>
        <button onClick={() => scrollToSection('skills')} className="hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] transition-colors">
          Skills
        </button>
        <button onClick={() => scrollToSection('journey')} className="hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] transition-colors">
          Journey
        </button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] transition-colors">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] transition-colors">
          Contact
        </button>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-3 sm:space-x-5 mt-4">
        <a href="https://github.com/DineshhNT" target="_blank" rel="noopener noreferrer" 
          className="p-2 sm:p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
          <Github size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://www.linkedin.com/in/dinesh-nt-20b0b6256/" target="_blank" rel="noopener noreferrer" 
          className="p-2 sm:p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <Linkedin size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://www.instagram.com/d_i_n_e_s_h_h_/" target="_blank" rel="noopener noreferrer" 
          className="p-2 sm:p-3 rounded-full bg-red-600 text-white hover:bg-red-700">
          <InstagramIcon size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-black dark:text-white text-xs sm:text-sm mt-4 px-4">
        &copy;2025 Designed & Developed by 
        <span className="font-bold">
          {' Dinesh N T'}
        </span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;