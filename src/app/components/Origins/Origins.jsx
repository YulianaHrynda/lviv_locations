'use client';

import styles from './Origins.module.css';
import Image from 'next/image';

const Origins = () => {
  return (
    <section className={styles.origins}>
      <div className={styles.container}>
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
      </div>
    </section>
  );
};

export default Origins;
