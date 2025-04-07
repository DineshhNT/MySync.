import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard';
import { motion } from 'framer-motion';
import ProjectNavbar from '../Pages/ProjectsNavbar';
import Footer from '../Footer';
import Images from '../Images';
import ThemeToggle from '../ThemeToggle';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const projects = [
    {
      title: 'AI Med-Assist',
      description: 'AI-Med Assist is an AI-powered platform that provides personalized medical guidance...',
      image: Images.ProjectThumbs.AI_Med_Assist,
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask', 'IoT'],
      tags: ['Full-Stack', 'AI Med Bot'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: true,
      teamMembers: [
        { name: 'Deenathayalan C K', image: Images.Teammembers.member2 }
      ]
    },
    {
      title: 'Gemini',
      description: 'The Gemini App Clone is an AI-powered chatbot...',
      image: Images.ProjectThumbs.MySync,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Java Script'],
      tags: ['React', 'App Clone'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'My Sync',
      description: 'Responsive portfolio is a dynamic and visually engaging web application...',
      image: Images.ProjectThumbs.MySync,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      tags: ['React', 'Portfolio'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'Deep Sight',
      description: 'Glaucoma Detection Using CNN is an AI system that identifies glaucoma Glaucoma Detection Using CNN is an AI system that identifies glaucoma.Glaucoma Detection Using CNN is an AI system that identifies glaucoma.Glaucoma Detection Using CNN is an AI system that identifies glaucoma.',
      image: Images.ProjectThumbs.DeepSight,
      technologies: ['CNN', 'Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
      tags: ['Glaucoma Detection', 'Deep Learning'],
      githubUrl: 'https://github.com/DineshhNT/Glaucoma-Disease-Detection-using-CNN',
      liveUrl: 'https://github.com/DineshhNT',
      showTeam: false
    },
    {
      title: 'Mushroom Classifier',
      description: 'Mushroom Edibility Classifier detects poisonous mushrooms...',
      image: Images.ProjectThumbs.Mushroom_Classifier,
      technologies: ['Python', 'Streamlit', 'Deep Learning', 'Machine Learning'],
      tags: ['Mushroom Classification', 'Deep Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: false
    },
    {
      title: 'Sentiment X',
      description: 'Sentiment X for E-commerce reviews is an AI-driven system...',
      image: Images.ProjectThumbs.SentimentX,
      technologies: ['Python', 'NLP', 'Word Cloud', 'Machine Learning'],
      tags: ['E-Commerce Reviews', 'Machine Learning'],
      githubUrl: 'https://github.com/DineshhNT/SENTIMENTAL-ANALYSIS-USING-PYTHON',
      liveUrl: 'https://github.com/DineshhNT',
      showTeam: true,
      teamMembers: [
        { name: 'Deenathayalan C K', image: Images.Teammembers.member2 }
      ]
    },
    {
      title: 'Code Flux',
      description: 'Code Flux using Python is a system that converts data into encoded or decoded formats...',
      image: Images.ProjectThumbs.ED,
      technologies: ['Python', 'Encoder', 'Decoder', 'AI', 'Transformation'],
      tags: ['AI', 'Data Transformation'],
      githubUrl: 'https://github.com/DineshhNT',
      liveUrl: 'https://github.com/DineshhNT',
      showTeam: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 relative">
      <ProjectNavbar />

      {/* Project Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">
            Projects Page
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
