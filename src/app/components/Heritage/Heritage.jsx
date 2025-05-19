'use client';

import styles from './Heritage.module.css';
import Image from 'next/image';

const Heritage = () => {
  return (
    <section className={styles.heritage}>
      <div className={styles.container}>
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
      </div>
    </section>
  );
};

export default Heritage;
