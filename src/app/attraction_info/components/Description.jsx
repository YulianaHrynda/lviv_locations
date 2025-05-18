'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/description.module.css';

const Description = ({ title, address, image, description, phone, website }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title || 'Attraction'}</h1>

      <p className={styles.description}>
        {description ||
          'Discover this location in Lviv — a fascinating destination with historical and cultural value.'}
      </p>

      <div className={styles.imageWrapper}>
        <Image
          src={image || '/images/placeholder.svg'}
          alt={title}
          width={1920}
          height={1080}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        />
      </div>

      <div className={styles.details}>
        <div className={`${styles.detailsColumn} ${styles.left}`}>
          <div><strong>ADDRESS</strong></div>
          <div>{address || 'Lviv'}</div>
        </div>

        <div className={`${styles.detailsColumn} ${styles.center}`}>
          <div><strong>CONTACTS</strong></div>
          <div>{phone || 'Not provided'}</div>
        </div>

        <div className={`${styles.detailsColumn} ${styles.right}`}>
          <div><strong>WEBSITE</strong></div>
          <div>
            {website ? (
              <Link href={website} target="_blank" rel="noopener noreferrer">
                {website.replace(/^https?:\/\//, '')}
              </Link>
            ) : (
              'Not available'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
