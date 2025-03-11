import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={24} className="text-yellow-500" />
      ) : (
        <Moon size={24} className="text-gray-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;