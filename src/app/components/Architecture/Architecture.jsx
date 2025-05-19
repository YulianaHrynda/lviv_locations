'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Architecture.module.css';
import Image from 'next/image';

const Architecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -100px 0px', once: false });

  return (
    <section className={styles.architecture} ref={ref}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className={styles.title}>ARCHITECTURE</h2>

        <p className={styles.description}>
          From medieval castles and cobblestone streets to grand Austro-Hungarian architecture and cozy coffeehouses, every corner of Lviv tells a story.
          Once a key center of trade and learning in the Polish–Lithuanian Commonwealth, Lviv later became part of the Habsburg Empire, then interwar Poland,
          and eventually Ukraine — <strong>each era leaving behind its unique mark.</strong>
        </p>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/architecture.png"
            alt="Architecture"
            width={400}
            height={600}
            className={styles.image}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Architecture;
