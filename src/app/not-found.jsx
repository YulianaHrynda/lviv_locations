'use client';

import Image from 'next/image';
import styles from './not-found/styles/error.module.css';

const Error = () => {
  const fallbackImage = '/images/oia-uia.gif';

  return (
    <div className={styles?.container}>
      <h1 className={styles?.heading}>PAGE NOT FOUND</h1>
      <div className={styles?.imageWrapper}>
        <Image
          src={fallbackImage}
          width={1920}
          height={1080}
          alt="Error illustration"
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          priority
        />
      </div>
    </div>
  );
};

export default Error;