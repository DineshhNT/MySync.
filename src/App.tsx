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
import Images from './components/Images';

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
        { name: 'HTML', icon: Images.FrontEnd.HTML },
        { name: 'CSS', icon: Images.FrontEnd.CSS },
        { name: 'JavaScript', icon: Images.FrontEnd.JS },
        { name: 'React', icon: Images.FrontEnd.React },
        { name: 'Tailwind', icon: Images.FrontEnd.Tailwind },
        { name: 'Bootstrap', icon: Images.FrontEnd.Bootstrap},
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Back-End',
      subSkills: [
        { name: 'Python', icon: Images.BackEnd.Python },
        { name: 'Node.js', icon: Images.BackEnd.NodeJS },
        { name: 'MySQL', icon: Images.BackEnd.MySql },
        { name: 'MongoDB', icon: Images.BackEnd.MongoDB },
        { name: 'Flask', icon: Images.BackEnd.Flask},
        { name: 'FireBase', icon: Images.BackEnd.FireBase},
      ]
    },
    {
      icon: <Brain size={25} />,
      title: 'AI/ML',
      subSkills: [
        { name: 'TensorFlow', icon: Images.AIML.TensorFlow },
        { name: 'PyTorch', icon: Images.AIML.PyTorch },
        { name: 'Pandas', icon: Images.AIML.Pandas },
        { name: 'Numpy', icon: Images.AIML.Numpy},
        { name: 'Algorithms', icon: Images.AIML.Algorithms},
      ]
    },
    {
      icon: <Palette size={25} />,
      title: 'Other Skills',
      subSkills: [
        { name: 'GitHub', icon: Images.Others.GitHub },
        { name: 'Canva', icon: Images.Others.Canva },
        { name: 'VS Code', icon: Images.Others.VSCode },
        { name: 'Photoshop', icon: Images.Others.Photoshop},
        { name: 'Figma', icon: Images.Others.Figma}
      ]
    }
  ];

  const projects = [
    {
      title: 'AI Med-Assist',
      description: 'AI-Med Assist is an AI-powered platform that provides personalized medical guidance and symptom analysis using NLP and Machine Learning. It integrates IoT devices for real-time health monitoring and offers tailored health recommendations. Built with Python, Flask, and a responsive frontend using HTML, CSS, and JavaScript, the platform ensures a secure, user-friendly, and efficient healthcare experience.',
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
        },
      ]
    },
    {
      title: 'Portfolio',
      description: 'responsive portfolio is a dynamic and visually engaging web application built with React, Vite, Tailwind CSS, and TypeScript to showcase my skills, projects, and professional journey. Designed with a clean and modern UI, it offers a fully responsive experience across all devices, smooth animations, and interactive elements. Leveraging Vite for fast performance and TypeScript for type safety, this portfolio highlights my expertise in creating efficient, scalable, and visually appealing web applications.',
      image: Images.ProjectThumbs.MySync,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      tags: ['React', 'Portfolio'],
      githubUrl: 'https://github.com/DineshhNT/MySync.',
      liveUrl: 'https://dineshhnt.github.io/MySync./',
      showTeam: false
    },
    {
      title: 'Glaucoma Detection',
      description: 'Glaucoma Detection Using CNN is an AI system that identifies glaucoma from retinal images using Convolutional Neural Networks. Built with TensorFlow/Keras and Python, it leverages deep learning to analyze eye scans for glaucoma-related features with high accuracy. Trained on a dataset of retinal images, it enables early diagnosis to prevent vision loss. The system utilizes OpenCV for image preprocessing, ensuring clear and interpretable results',
      image: Images.ProjectThumbs.DeepSight,
      technologies: ['CNN', 'Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
      tags: ['Glaucoma Detection', 'Deep Learning'],
      githubUrl: 'https://github.com/DineshhNT/Glaucoma-Disease-Detection-using-CNN',
      liveUrl: 'https://github.com/DineshhNT',
      showTeam: true,
      teamMembers: [
        {
          name: 'Deenathayalan C K',
          image: Images.Teammembers.member2
        }
      ]
    },
    {
      title: 'Mushroom Classifier',
      description: 'Mushroom Edibility Classifier detects poisonous mushrooms. It uses an SVM model in Python to classify edible and toxic mushrooms accurately. Trained on a labeled dataset, it identifies key features for classification. Streamlit is used to build an interactive web app for easy accessibility. The model helps users make informed decisions about mushroom safety.',
      image: Images.ProjectThumbs.Mushroom_Classifier,
      technologies: ['Python', 'Streamlit', 'Deep Learning', 'Machine Learning'],
      tags: ['Mushroom Classification', 'Deep Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      showTeam: false
    },
    {
      title: 'Sentiment X',
      description: 'Sentiment X for E-commerce reviews is an AI-driven system that analyzes customer feedback. It uses NLP techniques to classify reviews as positive, negative, or neutral. Python and word clouds help visualize sentiment distribution effectively. Trained on product reviews, it extracts insights to improve customer experience. The model aids businesses in understanding customer opinions and trends.',
      image: Images.ProjectThumbs.SentimentX,
      technologies: ['Python', 'NLP', 'Word Cloud', 'Machine Learning'],
      tags: ['E-Commerce Reviews', 'Machine Learning'],
      githubUrl: 'https://github.com/DineshhNT/SENTIMENTAL-ANALYSIS-USING-PYTHON',
      liveUrl: 'https://github.com/DineshhNT',
      showTeam: true,
      teamMembers: [
        {
          name: 'Deenathayalan C K',
          image: Images.Teammembers.member2
        }
      ]
    },
    {
      title: 'Code Flux',
      description: 'Code Flux using Python is a system that converts data into encoded or decoded formats. It utilizes encoding algorithms to transform text or numbers securely. Python libraries like base64, hashlib, and custom logic handle the process. Decoding retrieves the original data for secure communication or storage. The system ensures data integrity and confidentiality in various applications',
      image: Images.ProjectThumbs.ED,
      technologies: ['Python', 'Encoder', 'Decoder', 'AI', 'Transformation'],
      tags: ['AI', 'Data Transformation'],
      githubUrl: 'https://github.com/DineshhNT',
      liveUrl: 'https://github.com/DineshhNT',
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