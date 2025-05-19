'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Origins.module.css';
import Image from 'next/image';

const Origins = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '0px 0px -100px 0px', once: false });

  return (
    <section className={styles.origins} ref={ref}>
      <motion.div
        className={styles.center}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className={styles.title}>ORIGINS</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/origins.png"
              alt="Origins of Lviv"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p>
              <strong>Lviv</strong> is not just a city — <strong>it’s a journey through time</strong>.<br />
              Founded in the mid-13th century by King Danylo of Galicia and named after his son Lev,
              Lviv has been a crossroads of cultures, religions, and empires for over 750 years.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Origins;
