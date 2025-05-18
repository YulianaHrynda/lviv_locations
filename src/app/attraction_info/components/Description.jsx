'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/description.module.css';


const Description = () => {
  return (
     <div className={styles.container}>
      <h1 className={styles.header}>ARSENAL MUSEUM</h1>
      <p className={styles.description}>
        Is located in the premises of the former city gun factory, built in the 16th century. It used to be part of the defense system of the city.
        A busy street in front of its facade was previously a defensive moat with water. The loopholes located in the walls protected the defense area from the eastern side of the city. Nowadays there is the best state collection of cold steel arms and firearms, as well as military attributes in Ukraine. In addition to European samples, there are also weapons from Asia and Africa. In the early 90's the museum experienced an armed attack of robbers, that was not typical situation for Lviv. Therefore, since then the security measures have been reinforced.
        While visiting the exhibition, particular attention should be paid to the collection of armours that belonged to famous Polish Winged Hussars.
      </p>
      <div className={styles.imageWrapper}>
        <Image
            src="/museum.png"
            alt="Arsenal Museum"
            layout="responsive"
            width={1920}  // or the natural width of your image
            height={1080} // or the natural height of your image
            objectFit="cover"
        />
      </div>
        <div className={styles.details}>
            <div className={`${styles.detailsColumn} ${styles.left}`}>
                <div><strong>ADDRESS</strong></div>
                <div>5 Pidvalna St.</div>
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
