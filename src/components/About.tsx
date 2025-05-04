'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m a passionate Full-Stack Web Developer with expertise in building modern, responsive, and scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">💻</span>
              </div>
              <div>
                <h3 className="font-semibold">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-300">Expertise in both frontend and backend development</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">Building fast and efficient web applications</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">Creative solutions to complex problems</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">🌐</span>
              </div>
              <div>
                <h3 className="font-semibold">Responsive Design</h3>
                <p className="text-gray-600 dark:text-gray-300">Creating beautiful designs that work on all devices</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">🎨</span>
              </div>
              <div>
                <h3 className="font-semibold">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">Creating intuitive and user-friendly interfaces</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">🤝</span>
              </div>
              <div>
                <h3 className="font-semibold">Team Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">Working effectively with cross-functional teams</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
