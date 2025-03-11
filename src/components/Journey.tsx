import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Images from "./Images";

const educationData = [
  {
    title: "Kathir College of Engineering",
    year: "2021-2025",
    percentage: "Grade : 76%",
    shortDescription: "Pursuing a Bachelor's degree in AI & Data Science...",
    fullDescription:
      "I am currently pursuing a Bachelor's degree in Artificial Intelligence & Data Science at Kathir College of Engineering, with a current academic score of 76% up to the 7th semester. Working on various projects has provided me with hands-on experience in developing AI, Machine Learning, and Web Development fields",
    logo: Images.InstitutionLogos.College,
  },
  {
    title: "Sri Gopal Naidu Hr.Sec.School",
    year: "2020-2021",
    percentage: "Grade : 86.04%",
    shortDescription: "Higher Secondary Education...",
    fullDescription: "I completed my high school education at Sri Gopal Naidu Higher Secondary School, where I studied Mathematics with Computer Science.",
    logo: Images.InstitutionLogos.School,
  },
];

const experienceData = [
  {
    title: "Software Engineer ",
    role: "iZet E-Payments Pvt Ltd",
    year: "Present",
    shortDescription: "Developed full-stack applications...",
    fullDescription:
      "I am working on and developing full-stack applications for various real-time projects, gaining hands-on experience in both front-end and back-end technologies.",
    skills: "Skills: ReactJS - NodeJS - MySql",
    logo: Images.InstitutionLogos.Izet,
  },
  {
    title: "AI/ML Intern",
    role: "InternPe",
    year: "2024",
    shortDescription: "Worked on AI/ML projects...",
    fullDescription:
      "I have worked on AI and ML prediction projects, gaining hands-on experience in model development, data preprocessing, and deployment. These projects have enhanced my ability to build efficient and scalable AI/ML solutions.",
    skills: "Skills: AI - Machine Learning - Deep Learning",
    logo: Images.InstitutionLogos.Internpe,
  },
];

const Journey = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section id="journey" className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 text-black dark:text-white"
        >
          Experience & Education
        </motion.h2>

        {/* Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "education"
                ? "bg-blue-600 text-white shadow-xl"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
            }`}
          >
            Education
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "experience"
                ? "bg-blue-600 text-white shadow-xl"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
            }`}
          >
            Experience
          </motion.button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} className="space-y-6">
            {(activeTab === "education" ? educationData : experienceData).map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer w-full max-w-lg mx-auto"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                    <img src={item.logo} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <motion.h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </motion.h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.year}</span>
                    </div>
                    {"role" in item && (
                      <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{item.role}</p>
                    )}
                    {"percentage" in item && (
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{item.percentage}</p>
                    )}
                    <motion.p
                      className="text-gray-600 dark:text-gray-400 mt-2 text-sm"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: hoverIndex === index ? "unset" : 3, 
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {item.fullDescription}
                    </motion.p>
                    {"skills" in item && hoverIndex === index && (
                      <p className="text-gray-600 dark:text-white font-medium mt-2">{item.skills}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Journey;
