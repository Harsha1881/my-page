'use client';
import React from 'react';
import styles from '@/styles/HomePage.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.heading}
      >
        Welcome to My Portfolio
      </motion.h1>

      <p className={styles.subtext}>Explore more about me 👇</p>

      <div className={styles.links}>
        <Link href="/profile">
          <motion.button whileHover={{ scale: 1.05 }} className={styles.button}>
            Profile
          </motion.button>
        </Link>
        <Link href="/about">
          <motion.button whileHover={{ scale: 1.05 }} className={styles.button}>
            About Me
          </motion.button>
        </Link>
        <Link href="/skills">
          <motion.button whileHover={{ scale: 1.05 }} className={styles.button}>
            Skills
          </motion.button>
        </Link>
        <Link href="/projects">
          <motion.button whileHover={{ scale: 1.05 }} className={styles.button}>
            Projects
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
