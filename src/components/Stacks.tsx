'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StackItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const StackItem = ({ icon, title, description }: StackItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default function Stacks() {
  return (
    <section id="stacks" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StackItem
            icon={<div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">R</div>}
            title="React"
            description="Building interactive user interfaces with React"
          />
          <StackItem
            icon={<div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">N</div>}
            title="Next.js"
            description="Creating server-side rendered applications"
          />
          <StackItem
            icon={<div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">N</div>}
            title="Node.js"
            description="Building scalable backend applications"
          />
          <StackItem
            icon={<div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">L</div>}
            title="Laravel"
            description="Building robust web applications"
          />
          <StackItem
            icon={<div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">T</div>}
            title="Tailwind CSS"
            description="Creating responsive designs"
          />
          <StackItem
            icon={<div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">F</div>}
            title="Framer Motion"
            description="Adding smooth animations"
          />
        </div>
      </div>
    </section>
  );
}
