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
      description: 'Personalized AI-Med Assist is an intelligent healthcare companion designed to offer tailored medical support.It uses NLP to analyze symptoms and deliver accurate, real-time health recommendations.Integrated with ML models and IoT devices, it aids in early diagnosis and chronic disease management.The system ensures secure, patient-centric care through a user-friendly web interface.',
      image: Images.ProjectThumbs.AI_Med_Assist,
      technologies: ['MongoDB', 'Express', 'React', 'Node', 'Python','IoT'],
      tags: ['Mern-Stack', 'AI Med Bot'],
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
      title: 'Gemini GPT',
      description: 'The GeminiGPT is an AI-powered chatbot web app built with React.It mimics Gemini with real-time responses, sleek UI, and smart context handling.Powered by NLP and integrated APIs, it delivers intelligent conversations across topics.The clone offers chat history, and responsive design for seamless user experience',
      image: Images.ProjectThumbs.GeminiGPT,
      technologies: ['React', 'Vite', 'Java Script', 'Tailwind CSS'],
      tags: ['React', 'App Clone'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'My Sync',
      description: 'MySync is a fully responsive personal portfolio built using React, Vite, and Tailwind CSS.It showcases projects, skills, and experience in a clean, modern interface.With smooth animations and a mobile-friendly design, it ensures seamless navigation.MySync highlights professional growth and creativity with a focus on performance.',
      image: Images.ProjectThumbs.MySync,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      tags: ['React', 'Portfolio'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'Deep Sight',
      description: 'This project uses Convolutional Neural Networks (CNN) to detect glaucoma from retinal images.It automates early diagnosis by analyzing visual patterns linked to glaucoma.Trained on labeled eye datasets, the model achieves high detection accuracy.Built with Python, TensorFlow, and OpenCV, it assists in preventing vision loss.',
      image: Images.ProjectThumbs.DeepSight,
      technologies: ['CNN', 'Python', 'TensorFlow',  'Deep Learning'],
      tags: ['Glaucoma Detection', 'Deep Learning'],
      githubUrl: 'https://github.com/DineshhNT/Glaucoma-Disease-Detection-using-CNN',
      liveUrl: 'https://github.com/DineshhNT',
      showTeam: false
    },
    {
      title: 'Mushroom Classifier',
      description: 'This project predicts the edibility of mushrooms using a Support Vector Machine (SVM) model.It classifies mushrooms as edible or poisonous based on various features.Built with Python and Streamlit for an interactive UI experience.It helps users make safe decisions while foraging or identifying mushrooms.The model is trained on a well-labeled dataset, ensuring accurate classification.A user-friendly web interface allows easy input and instant predictions.',
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
