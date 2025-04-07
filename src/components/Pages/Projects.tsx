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
      description: 'Personalized AI-Med Assist is an intelligent healthcare companion designed to offer tailored medical support.It uses NLP to analyze symptoms and deliver accurate, real-time health recommendations.Integrated with ML models and IoT devices, it aids in early diagnosis and chronic disease management.The system ensures secure, patient-centric care through a user-friendly web interface.',
      image: Images.ProjectThumbs.AI_Med_Assist,
      technologies: ['MongoDB', 'Express', 'React', 'Node', 'Python','IoT'],
      tags: ['Full-Stack', 'AI Med Bot'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: true,
      teamMembers: [
        { name: 'Deenathayalan C K', image: Images.Teammembers.member2 }
      ]
    },
    {
      title: 'Gemini GPT',
      description: 'The GeminiGPT is an AI-powered chatbot web app built with React.It mimics Gemini with real-time responses, sleek UI, and smart context handling.Powered by NLP and integrated APIs, it delivers intelligent conversations across topics.The clone offers chat history, and responsive design for seamless user experience',
      image: Images.ProjectThumbs.GeminiGPT,
      technologies: ['React', 'Vite', 'Java Script', 'Tailwind CSS','Gemini API'],
      tags: ['React', 'App Clone'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'My Sync',
      description: 'MySync is a fully responsive personal portfolio built using React, Vite, and Tailwind CSS.It showcases projects, skills, and experience in a clean, modern interface.With smooth animations and a mobile-friendly design, it ensures seamless navigation.MySync highlights professional growth and creativity with a focus on performance.',
      image: Images.ProjectThumbs.MySync,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript','EmailJS'],
      tags: ['React', 'Portfolio'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'Deep Sight',
      description: 'This project uses Convolutional Neural Networks (CNN) to detect glaucoma from retinal images.It automates early diagnosis by analyzing visual patterns linked to glaucoma.Trained on labeled eye datasets, the model achieves high detection accuracy.Built with Python, TensorFlow, and OpenCV, it assists in preventing vision loss.',
      image: Images.ProjectThumbs.DeepSight,
      technologies: ['CNN', 'Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
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
    },
    {
      title: 'Sentiment X',
      description: 'This project analyzes customer reviews from Flipkart and Amazon to determine sentiment polarity.It classifies reviews as positive, negative, or neutral using NLP techniques.Python libraries like NLTK and Scikit-learn were used for preprocessing and modeling.The insights help businesses understand user satisfaction and improve strategies.Visualizations like word clouds and sentiment charts enhance interpretability.',
      image: Images.ProjectThumbs.SentimentX,
      technologies: ['Python', 'NLP', 'Word Cloud','TensorFlow', 'Machine Learning'],
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
      description: 'This project implements an Encoder-Decoder architecture using Python for sequence-to-sequence tasks.It is designed to handle transformations like language translation or number-to-word conversion.The encoder processes the input sequence into a fixed representation.The decoder then generates an output sequence based on that representation.Built using TensorFlow/Keras, it showcases the fundamentals of sequence modeling in AI.',
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
          <h1 className="text-2xl font-bold text-center mb-12 dark:text-white">
            These are the projects that I have worked on.
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
