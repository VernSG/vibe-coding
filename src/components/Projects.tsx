'use client';

import Image from "next/image";
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project",
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    demo: "#",
    image: "https://res.cloudinary.com/djsdnb4td/image/upload/v1743765717/58386473-d40b-4952-8708-8362aba69894_gggz0i.jpg",
  },
  {
    title: "Project 2",
    description: "A brief description of your second project",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    github: "#",
    demo: "#",
    image: "https://res.cloudinary.com/djsdnb4td/image/upload/v1743765717/58386473-d40b-4952-8708-8362aba69894_gggz0i.jpg",
  },
  {
    title: "Project 3",
    description: "A brief description of your third project",
    tech: ["Vue.js", "Firebase", "CSS3"],
    github: "#",
    demo: "#",
    image: "https://res.cloudinary.com/djsdnb4td/image/upload/v1743765717/58386473-d40b-4952-8708-8362aba69894_gggz0i.jpg",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-800"
                  >
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
