'use client';
import React from 'react';
import styles from '@/styles/About.module.css';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hello! I'm Koppala HarshaVardhan, a passionate frontend developer and UI/UX designer
        with a love for clean interfaces, responsive designs, and smooth animations.
        I thrive on building interactive user experiences and learning the latest web technologies.
      </motion.p>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Beyond coding, I enjoy riding my Royal Enfield, exploring nature, and listening to good music.
        I’m currently sharpening my Next.js and Framer Motion skills to push my creative limits.
      </motion.p>
    </div>
  );
}
