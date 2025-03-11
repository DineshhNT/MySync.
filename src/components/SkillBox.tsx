import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SubSkill {
  name: string;
  icon: string;
}

interface SkillBoxProps {
  title: string;
  subSkills: SubSkill[];
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, subSkills }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="border border-[#1c64f2] bg-white dark:bg-gray-700 rounded-xl shadow-md
        /* Base padding (mobile) */
        p-3
        /* Responsive width and margin */
        w-full mx-auto
        /* Responsive max-width with more granular control */
        max-w-[280px] 
        sm:max-w-[340px] 
        md:max-w-[480px] 
        lg:max-w-[520px] 
        xl:max-w-[560px]
        /* Responsive padding */
        sm:p-4 
        md:p-5 
        lg:p-6"
    >
      <div className="flex flex-col items-center mb-3 sm:mb-4 md:mb-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-white text-center">{title}</h3>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid w-full
          grid-cols-2
          sm:grid-cols-2
          [min-width:700px]:grid-cols-2
          [min-width:800px]:grid-cols-3
          lg:grid-cols-3
          /* Responsive gap with more precise control */
          gap-2
          sm:gap-2.5
          md:gap-3
          lg:gap-3.5"
        >
          {subSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center
                /* Base styles */
                rounded-md border border-primary-500 bg-white dark:bg-gray-600
                hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors duration-200
                /* Responsive padding with more precise control */
                px-2 py-1
                sm:px-2.5 sm:py-1.5
                md:px-3 md:py-2
                lg:px-4 lg:py-2.5
                /* Responsive sizing with more precise breakpoints */
                min-w-[90px]
                sm:min-w-[100px]
                [min-width:700px]:min-w-[120px]
                [min-width:800px]:min-w-[130px]
                lg:min-w-[140px]
                /* Gap between icon and text */
                gap-1.5
                sm:gap-2
                md:gap-2
                lg:gap-2.5"
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-3.5 h-3.5 
                  sm:w-4 sm:h-4 
                  md:w-5 md:h-5 
                  lg:w-5 lg:h-5 
                  flex-shrink-0" 
              />
              <span className="text-[11px] 
                sm:text-xs 
                [min-width:700px]:text-[13px]
                [min-width:800px]:text-sm
                lg:text-sm 
                font-medium 
                dark:text-white 
                whitespace-nowrap"
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBox;