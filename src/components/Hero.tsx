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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20">
          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-col justify-center lg:justify-start items-center space-y-0 space-x-4 lg:space-x-0 lg:space-y-4 w-full lg:w-auto mt-8 lg:mt-0 lg:pl-5 lg:pt-5"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/DineshhNT"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/dinesh-nt-20b0b6256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/d_i_n_e_s_h_h_/"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700"
            >
              <InstagramIcon size={24} />
            </motion.a>
          </motion.div>

          {/* Hero Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left w-full lg:w-1/2 space-y-4 md:space-y-6 mt-8 lg:mt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm
              <span className="ml-2 md:ml-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Dinesh N T
              </span>
            </h1>

            {/* Typing Animation */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
              <span className="dark:text-white text-black">I am a </span>
              <span className="font-bold text-1xl sm:text-2xl md:text-3xl transition-all duration-500 dark:text-white text-black">
                {text}
              </span>
              <span className="font-bold text-3xl md:text-4xl dark:text-white text-black">&nbsp;|</span>
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-4 lg:px-0">
              Passionate Python Developer with expertise in AI, ML, Deep Learning, and Full-Stack Development, blending intelligence with intuitive design.
              Currently pursuing B.Tech in AI & Data Science at Kathir College of Engineering, I thrive on building impactful AI solutions and cutting-edge applications. 
              Driven by innovation, I craft technology that shapes the future.  🫧
            </p>

            <motion.a
              href={Images.cv}
              download="DINESH N T CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-white px-6 py-4 md:py-5 rounded-2xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary-600 to-secondary-600"
            >
              <FileIcon className="w-5 h-5 mr-2" />
              Download CV
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 lg:px-0 lg:-ml-6 lg:pr-20 pt-24 sm:pt-20 md:pt-16 lg:pt-0" // Increased top padding for mobile
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[24rem] lg:h-[24rem] mx-auto">
              <img
                src={Images.Heroimage}
                alt="Profile"
                className="rounded-full object-cover w-full h-full shadow-2xl ring-4 ring-primary-500/50"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;