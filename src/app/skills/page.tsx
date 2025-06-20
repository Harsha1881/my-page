'use client';
import React from 'react';
import styles from '@/styles/Skills.module.css';
import { motion } from 'framer-motion';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Sass',
  'Git & GitHub',
  'Figma',
  'Responsive Design',
];

export default function SkillsPage() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
