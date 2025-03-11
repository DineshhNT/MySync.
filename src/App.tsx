import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Code, Database, Brain, Palette } from 'lucide-react';
import SkillBox from './components/SkillBox';
import Journey from './components/Journey';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from "./components/Footer";
import ThemeToggle from './components/ThemeToggle';

function App() {
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
      icon: <Code size={25} />,
      title: 'Front-End',
      subSkills: [
        { name: 'HTML', icon: '../images/html.png' },
        { name: 'CSS', icon: '../images/CSS.png' },
        { name: 'JavaScript', icon: '../images/js.png' },
        { name: 'React', icon: '../images/REACT.png' },
        { name: 'Tailwind', icon: '../images/icons8-tailwind-css-48.png' },
        { name: 'Bootstrap', icon: '../images/icons8-bootstrap-logo-50.png'}
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Back-End',
      subSkills: [
        { name: 'Python', icon: '../images/python.png' },
        { name: 'Node.js', icon: '../images/icons8-nodejs-100.png' },
        { name: 'MySQL', icon: '../images/icons8-mysql-50.png' },
        { name: 'MongoDB', icon: '../images/icons8-mongo-db-50.png' },
        { name: 'Flask', icon: '../images/icons8-flask-50.png'},
        { name: 'FireBase', icon: '../images/icons8-firebase-50.png'},
      ]
    },
    {
      icon: <Brain size={25} />,
      title: 'AI/ML',
      subSkills: [
        { name: 'TensorFlow', icon: '../images/icons8-tensorflow-50.png' },
        { name: 'PyTorch', icon: '../images/icons8-pytorch-48.png' },
        { name: 'Pandas', icon: '../images/icons8-pandas-50.png' },
        { name: 'Numpy', icon: '../images/icons8-numpy-50.png'},
        { name: 'Algorithms', icon: '../images/icons8-algorithms-100.png'},
      ]
    },
    {
      icon: <Palette size={25} />,
      title: 'Other Skills',
      subSkills: [
        { name: 'GitHub', icon: '../images/icons8-github-100.png' },
        { name: 'Canva', icon: '../images/icons8-canva-48.png' },
        { name: 'VS Code', icon: '../images/icons8-visual-studio-code-2019-100.png' },
        { name: 'Photoshop', icon: '../images/icons8-photoshop-50.png'},
        { name: 'Figma', icon: '../images/icons8-figma-50.png'}
      ]
    }
  ];

  const projects = [
    {
      title: 'AI Med-Assist',
      description: 'AI-Med Assist is an AI-powered platform that provides personalized medical guidance and symptom analysis using NLP and Machine Learning. It integrates IoT devices for real-time health monitoring and offers tailored health recommendations. Built with Python, Flask, and a responsive frontend using HTML, CSS, and JavaScript, the platform ensures a secure, user-friendly, and efficient healthcare experience.',
      image: '/images/4.jpg',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask', 'IoT'],
      tags: ['Full-Stack', 'AI Med Bot'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: true,
      teamMembers: [
        {
          name: 'Deenathayalan C K',
          image: '/images/146226745.jpeg'
        },
      ]
    },
    {
      title: 'Portfolio',
      description: 'responsive portfolio is a dynamic and visually engaging web application built with React, Vite, Tailwind CSS, and TypeScript to showcase my skills, projects, and professional journey. Designed with a clean and modern UI, it offers a fully responsive experience across all devices, smooth animations, and interactive elements. Leveraging Vite for fast performance and TypeScript for type safety, this portfolio highlights my expertise in creating efficient, scalable, and visually appealing web applications.',
      image: '/images/1.jpg',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      tags: ['React', 'Portfolio'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: false
    },
    {
      title: 'Glaucoma Detection',
      description: 'Glaucoma Detection Using CNN is an AI system that identifies glaucoma from retinal images using Convolutional Neural Networks. Built with TensorFlow/Keras and Python, it leverages deep learning to analyze eye scans for glaucoma-related features with high accuracy. Trained on a dataset of retinal images, it enables early diagnosis to prevent vision loss. The system utilizes OpenCV for image preprocessing, ensuring clear and interpretable results',
      image: '/images/2.jpg',
      technologies: ['CNN', 'Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
      tags: ['Glaucoma Detection', 'Deep Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: true,
      teamMembers: [
        {
          name: 'Deenathayalan C K',
          image: '/images/146226745.jpeg'
        }
      ]
    },
    {
      title: 'Mushroom Classifier',
      description: 'Mushroom Edibility Classifier detects poisonous mushrooms. It uses an SVM model in Python to classify edible and toxic mushrooms accurately. Trained on a labeled dataset, it identifies key features for classification. Streamlit is used to build an interactive web app for easy accessibility. The model helps users make informed decisions about mushroom safety.',
      image: '/images/6.jpg',
      technologies: ['Python', 'Streamlit', 'Deep Learning', 'Machine Learning'],
      tags: ['Mushroom Classification', 'Deep Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: false
    },
    {
      title: 'Sentiment X',
      description: 'Sentiment X for E-commerce reviews is an AI-driven system that analyzes customer feedback. It uses NLP techniques to classify reviews as positive, negative, or neutral. Python and word clouds help visualize sentiment distribution effectively. Trained on product reviews, it extracts insights to improve customer experience. The model aids businesses in understanding customer opinions and trends.',
      image: '/images/3.jpg',
      technologies: ['Python', 'NLP', 'Word Cloud', 'Machine Learning'],
      tags: ['E-Commerce Reviews', 'Machine Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: true,
      teamMembers: [
        {
          name: 'Deenathayalan C K',
          image: '/images/146226745.jpeg'
        }
      ]
    },
    {
      title: 'Code Flux',
      description: 'Code Flux using Python is a system that converts data into encoded or decoded formats. It utilizes encoding algorithms to transform text or numbers securely. Python libraries like base64, hashlib, and custom logic handle the process. Decoding retrieves the original data for secure communication or storage. The system ensures data integrity and confidentiality in various applications',
      image: '/images/5.jpg',
      technologies: ['Python', 'Encoder', 'Decoder', 'AI', 'Transformation'],
      tags: ['AI', 'Data Transformation'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: true,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle */}
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

      <Journey/>

      {/* Projects Section */}
      <section id="projects" className="py-20  dark:bg-gray-900 transition-colors duration-200">
        <div className="mx-auto px-4 sm:px-6 max-w-[1000px]">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
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

export default App;