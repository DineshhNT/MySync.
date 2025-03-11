import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Heart, ExternalLink } from 'lucide-react';
import Images from "./Images";

interface TeamMember {
  name: string;
  image: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  showTeam?: boolean;
  teamMembers?: TeamMember[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  tags,
  githubUrl,
  liveUrl,
  showTeam = false,
  teamMembers = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event propagation
  };

  return (
    <>
      {/* Project Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-md mx-auto flex flex-col justify-between cursor-pointer"
        onClick={openModal}
      >
        <div>
          {/* Image Section with Inside Box and Black Border */}
          <div className="border-2  border-grey rounded-lg overflow-hidden m-3 ">
            <div className="relative h-[140px] sm:h-[160px] md:h-[180px]">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Technical Tags Below Image */}
          <div className="p-2 sm:p-3 md:p-4 flex flex-wrap gap-2 sm:gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-[10px] sm:text-xs text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Content Section */}
          <div className="p-2 sm:p-3 md:p-4 flex-grow">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 dark:text-white">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Icons at the Bottom */}
        <div className="p-2 sm:p-3 md:p-4 flex justify-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <Github size={20} className="sm:w-[25px] sm:h-[25px]" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <Heart size={20} className="sm:w-[25px] sm:h-[25px]" />
          </motion.a>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-2 sm:p-3 md:p-4 pt-10 sm:pt-15 md:pt-20"
          onClick={closeModal} // Close modal when clicking outside
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden w-[90%] sm:w-[85%] md:w-[80%] max-w-xl mx-auto relative flex flex-col"
            onClick={handleModalClick} // Stop propagation when clicking inside modal
          >
            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] p-3 sm:p-4 md:p-5 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
              {/* Inside Box for Project Image with Black Border */}
              <div className="border-2 border-grey rounded-lg overflow-hidden">
                <div className="relative h-[180px] sm:h-[200px] md:h-[300px]">
                  <img src={image} alt={title} className="w-full h-full object-fill" />
                  {/* Tags in Modal */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-2 sm:gap-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-[10px] sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg font-semibold mb-1 dark:text-white">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-[10px] sm:text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Team Section - Always shown with your image */}
                <div className="mt-4 sm:mt-5 md:mt-6">
                  <h4 className="text-sm sm:text-md font-semibold mb-2 sm:mb-3 dark:text-white">Team</h4>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {/* Your Image - Always shown */}
                    <div className="flex flex-col items-center">
                      <img
                        src={Images.Heroimage}
                        alt="myimage1"
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mb-1 sm:mb-2"
                      />
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Dinesh N T</span>
                    </div>

                    {/* Additional team members - Only shown for group projects */}
                    {showTeam && teamMembers.map((member, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mb-1 sm:mb-2"
                        />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Links at Bottom */}
            <div className="p-3 sm:p-4 md:p-5 flex justify-center space-x-3 sm:space-x-4 border-t border-gray-200 dark:border-gray-700">
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-xs sm:text-sm"
              >
                <Github size={20} className="mr-1 sm:w-6 sm:h-6" /> Code
              </motion.a>
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-xs sm:text-sm"
              >
                <ExternalLink size={20} className="mr-1 sm:w-6 sm:h-6" /> Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;