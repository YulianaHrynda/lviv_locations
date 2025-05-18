'use client';

import styles from './Experience.module.css';
import { useRouter } from 'next/navigation';

const Experience = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/map');
  };

  return (
    <section className={styles.experience}>
      <h2 className={styles.title}>EXPERIENCE</h2>
      <p className={styles.description}>
        Lviv is a city where past and present meet — a perfect destination for curious travelers, history lovers, and anyone who seeks authenticity.
      </p>
      <button className={styles.button} onClick={handleClick}>
        Discover now
      </button>
    </section>
  );
};

export default Experience;
