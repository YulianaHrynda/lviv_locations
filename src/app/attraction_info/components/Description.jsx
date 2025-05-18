'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/description.module.css';

const Description = ({ title, address, image }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <p className={styles.description}>
        {/* Static mock description — you can replace with real data later */}
        Is located in the premises of the former city gun factory, built in the 16th century. It used to be part of the defense system of the city...
      </p>
      <div className={styles.imageWrapper}>
        <Image
          src={image || '/images/placeholder.svg'}
          alt={title}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>

      <div className={styles.details}>
        <div className={`${styles.detailsColumn} ${styles.left}`}>
          <div><strong>ADDRESS</strong></div>
          <div>{address || 'Lviv'}</div>
        </div>
        <div className={`${styles.detailsColumn} ${styles.center}`}>
          <div><strong>CONTACTS</strong></div>
          <div>+38 (032) 235 86 61</div>
        </div>
        <div className={`${styles.detailsColumn} ${styles.right}`}>
          <div><strong>WEBSITE</strong></div>
          <div>
            <Link href="https://www.lhm.lviv.com" target="_blank" rel="noopener noreferrer">
              www.lhm.lviv.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
