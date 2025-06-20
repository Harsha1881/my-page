'use client';
import React from 'react';
import styles from '@/styles/Projects.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Projects</h1>

      <div className={styles.projectCard}>
        <h2 className={styles.projectTitle}>ASOS Clone</h2>
        <p className={styles.projectDescription}>
          A responsive e-commerce website cloned from ASOS, developed using HTML, CSS, and JavaScript. 
          It includes product listings, detailed product pages, cart functionality, and a clean UI/UX 
          modeled after the original ASOS design.
        </p>
        <ul className={styles.techList}>
          <li>HTML5</li>
          <li>CSS3 (Flexbox & Grid)</li>
          <li>JavaScript (Vanilla JS)</li>
          <li>Responsive Design</li>
        </ul>
        <p className={styles.link}>
          🔗 <a href="https://www.asos.com/" target="_blank">Live Demo</a>
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
