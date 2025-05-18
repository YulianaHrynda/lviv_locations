import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({ title, address, image }) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={400} height={250} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.address}>{address}</p>
    </div>
  );
}
