import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const navItems = ["Home", "Skills", "Journey", "Projects", "Contact"];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            My Sync
          </motion.div>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm lg:text-base text-gray-700 dark:text-white hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] transition-colors"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-white hover:text-[#1c64f2] dark:hover:text-[#4ca6ff]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }} 
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-b-2xl shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-white hover:text-[#1c64f2] dark:hover:text-[#4ca6ff] hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
export default Navbar;
