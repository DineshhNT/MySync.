import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectNavbar = () => {
  const navigate = useNavigate();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1.5 rounded-full border border-gray-400 dark:border-gray-300  font-bold text-sm sm:text-base text-gray-700 dark:text-white hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] transition-colors"
            onClick={()=> navigate(-1)}
          >
            Back
          </motion.button>
          <div className="flex justify-center">
            Projects Page
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default ProjectNavbar;
