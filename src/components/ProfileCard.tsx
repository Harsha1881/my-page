'use client';
import React from 'react';
import styles from '@/styles/ProfileCard.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.card}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={styles.profileImageContainer}
        >
          <Image
            src="/profile.jpg"
            alt="Your Profile"
            width={120}
            height={120}
            className={styles.profileImage}
          />
        </motion.div>

        <motion.h2
          className={styles.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Koppala HarshaVardhan
        </motion.h2>
        <p className={styles.subtitle}>Frontend Developer | React Js</p>

        <div className={styles.infoGrid}>
          <motion.div whileHover={{ scale: 1.03 }} className={styles.infoCard}>
            <p className={styles.infoTitle}>Email</p>
            <p className={styles.infoText}>harsha.koppala@outlook.com</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className={styles.infoCard}>
            <p className={styles.infoTitle}>Phone</p>
            <p className={styles.infoText}>+91-63053 88545</p>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.button}
        >
          Edit Profile
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
