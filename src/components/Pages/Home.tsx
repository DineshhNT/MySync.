import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Hero from '../Hero';
import SkillBox from '../SkillBox';
import Journey from '../Journey';
import ProjectCard from '../ProjectCard';
import ContactForm from '../ContactForm';
import Footer from '../Footer';
import Images from '../Images';
import ThemeToggle from '../ThemeToggle';
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
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

  const skills = [
    {
      title: 'Front-End',
      subSkills: [
        { name: 'HTML', icon: Images.FrontEnd.HTML },
        { name: 'CSS', icon: Images.FrontEnd.CSS },
        { name: 'JavaScript', icon: Images.FrontEnd.JS },
        { name: 'React', icon: Images.FrontEnd.React },
        { name: 'Vite', icon: Images.FrontEnd.Vite },
        { name: 'Tailwind', icon: Images.FrontEnd.Tailwind },
      ]
    },
    {
      title: 'Back-End',
      subSkills: [
        { name: 'Python', icon: Images.BackEnd.Python },
        { name: 'Node.js', icon: Images.BackEnd.NodeJS },
        { name: 'MySQL', icon: Images.BackEnd.MySql },
        { name: 'MongoDB', icon: Images.BackEnd.MongoDB },
        { name: 'Flask', icon: Images.BackEnd.Flask },
        { name: 'FireBase', icon: Images.BackEnd.FireBase },
      ]
    },
    {
      title: 'AI/ML',
      subSkills: [
        { name: 'TensorFlow', icon: Images.AIML.TensorFlow },
        { name: 'PyTorch', icon: Images.AIML.PyTorch },
        { name: 'Pandas', icon: Images.AIML.Pandas },
        { name: 'Numpy', icon: Images.AIML.Numpy },
        { name: 'Algorithms', icon: Images.AIML.Algorithms },
        { name: 'Scikitlearn', icon: Images.AIML.Scikitlearn },
      ]
    },
    {
      title: 'Other Skills',
      subSkills: [
        { name: 'GitHub', icon: Images.Others.GitHub },
        { name: 'Canva', icon: Images.Others.Canva },
        { name: 'VS Code', icon: Images.Others.VSCode },
        { name: 'Photoshop', icon: Images.Others.Photoshop },
        { name: 'Figma', icon: Images.Others.Figma },
        { name: 'Git', icon: Images.Others.Git }
      ]
    }
  ];

  const projects = [
    {
      title: 'AI Med-Assist',
      description: 'AI-Med Assist is an AI-powered platform that provides personalized medical guidance and symptom analysis using NLP and Machine Learning.',
      image: Images.ProjectThumbs.AI_Med_Assist,
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask', 'IoT'],
      tags: ['Full-Stack', 'AI Med Bot'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: true,
      teamMembers: [
        {
          name: 'Deenathayalan C K',
          image: Images.Teammembers.member2
        }
      ]
    },
    {
      title: 'Gemini',
      description: 'The Gemini App Clone is an AI-powered chatbot designed to provide intelligent and contextual responses using NLP and deep learning.',
      image: Images.ProjectThumbs.MySync,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Java Script'],
      tags: ['React', 'App Clone'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'My Sync',
      description: 'Responsive portfolio is a dynamic and visually engaging web application built with React, Vite, Tailwind CSS, and TypeScript.',
      image: Images.ProjectThumbs.MySync,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      tags: ['React', 'Portfolio'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'Deep Sight',
      description: 'Glaucoma Detection Using CNN is an AI system that identifies glaucoma from retinal images using Convolutional Neural Networks.',
      image: Images.ProjectThumbs.DeepSight,
      technologies: ['CNN', 'Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
      tags: ['Glaucoma Detection', 'Deep Learning'],
      githubUrl: 'https://github.com/DineshhNT/Glaucoma-Disease-Detection-using-CNN',
      liveUrl: 'https://github.com/DineshhNT',
      showTeam: false
    },
    {
      title: 'Mushroom Classifier',
      description: 'Mushroom Edibility Classifier detects poisonous mushrooms. It uses an SVM model in Python to classify edible and toxic mushrooms.',
      image: Images.ProjectThumbs.Mushroom_Classifier,
      technologies: ['Python', 'Streamlit', 'Deep Learning', 'Machine Learning'],
      tags: ['Mushroom Classification', 'Deep Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: false
    }
  ].slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>

      <Navbar />
      <Hero />

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12">
            {skills.map((skill, index) => (
              <SkillBox key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <Journey />

      {/* Projects Section */}
      <section id="projects" className="py-20 dark:bg-gray-900 transition-colors duration-200">
        <div className="mx-auto px-4 sm:px-6 max-w-[1000px]">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate('/projects')}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex items-center justify-center cursor-pointer h-full min-h-[300px]"
            >
              <div className="text-center p-6">
                <img
                  src={Images.ViewAllProject}
                  className="mx-auto mb-4 w-30 h-100 object-contain border-2  border-grey rounded-lg overflow-hidden m-3"
                />
                <h3 className="text-2xl font-bold mb-4 dark:text-white">View All Projects</h3>
                <p className="text-gray-600 dark:text-gray-300"></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
