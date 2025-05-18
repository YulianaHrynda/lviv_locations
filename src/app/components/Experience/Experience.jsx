'use client';

import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2 className={styles.title}>EXPERIENCE</h2>
      <p className={styles.description}>
        Lviv is a city where past and present meet — a perfect destination for curious travelers, history lovers, and anyone who seeks authenticity.
      </p>
      <button className={styles.button}>Discover now</button>
    </section>
  );
};

export default Experience;
