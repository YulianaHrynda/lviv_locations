'use client';

import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>
            <span>LVIV</span>
            <span>OPEN</span>
            <span>TO</span>
          </h1>
          <div className={styles.worldWrapper}>
            <span className={styles.outlined}>WORLD</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/lviv-main.png"
            alt="Lviv City View"
            width={700}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
