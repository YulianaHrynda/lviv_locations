'use client';

import styles from './Architecture.module.css';
import Image from 'next/image';

const Architecture = () => {
  return (
    <section className={styles.architecture}>
        <div className={styles.container}>
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
        </div>
    </section>
  );
};

export default Architecture;
