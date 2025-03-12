import { motion } from "framer-motion";
import { Github, InstagramIcon, Linkedin, FileIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Images from "./Images";

const Hero = () => {
  const roles = ["AI/ML Developer", "Front-End Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 120; 
  const deletingSpeed = 70;
  const delayBetweenWords = 1300; 

  useEffect(() => {
    let timeout = 0;

    if (!isDeleting && text === roles[roleIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : roles[roleIndex].slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  const imageAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rotatingBorderAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 pt-16 sm:pt-20 lg:pt-24" // Added padding-top to prevent navbar overlap
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-col justify-center lg:justify-start items-center 
              space-y-0 space-x-4 lg:space-x-0 lg:space-y-4 
              w-full lg:w-auto mt-6 lg:mt-0 lg:pl-5"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/DineshhNT"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/dinesh-nt-20b0b6256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/d_i_n_e_s_h_h_/"
              className="p-2.5 sm:p-3 rounded-full bg-red-600 text-white hover:bg-red-700"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left w-full lg:w-1/2 space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm
              <span className="ml-2 md:ml-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Dinesh N T
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
              <span className="dark:text-white text-black">I am a </span>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl transition-all duration-500 dark:text-white text-black">
                {text}
              </span>
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl dark:text-white text-black animate-pulse">&nbsp;|</span>
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-4 lg:px-0">
              Passionate Python Developer with expertise in AI, ML, Deep Learning, and Full-Stack Development, blending intelligence with intuitive design.
              Currently pursuing B.Tech in AI & Data Science at Kathir College of Engineering, I thrive on building impactful AI solutions and cutting-edge applications. 
              Driven by innovation, I craft technology that shapes the future. 🫧
            </p>

            <motion.a
              href={Images.cv}
              download="DINESH N T CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-white px-4 sm:px-6 py-3 sm:py-4 md:py-5 rounded-2xl text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary-600 to-secondary-600"
            >
              <FileIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download CV
            </motion.a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] mx-auto lg:mx-0"
          >
            <div className="relative aspect-square">
              <motion.div
                variants={rotatingBorderAnimation}
                animate="animate"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 backdrop-blur-sm"></div>
              </motion.div>
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <img
                  src={Images.Heroimage}
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;