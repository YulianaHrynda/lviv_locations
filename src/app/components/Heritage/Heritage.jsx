'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Heritage.module.css';
import Image from 'next/image';

const Heritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '0px 0px -100px 0px',
    once: false,
  });

  return (
    <section className={styles.heritage} ref={ref}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/images/heritage.png"
            alt="Heritage Tower"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>HERITAGE</h2>
          <p className={styles.description}>
            The city’s Old Town is a <strong>UNESCO</strong> World Heritage Site, filled with Gothic, Baroque, and Renaissance buildings
            that whisper tales of merchants, scholars, and revolutionaries. Whether you're wandering through Rynok Square,
            climbing the tower of the City Hall, or exploring the mysterious courtyards, you’ll feel the pulse of history all around you.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Heritage;
