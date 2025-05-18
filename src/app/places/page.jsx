import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import styles from '../Page.module.css';

const places = [
  {
    title: 'Lviv High Castle',
    address: 'Castle Hill',
    image: '/castle.jpg',
  },
  {
    title: 'Rynok Square',
    address: 'Old Town Center',
    image: '/rynok.jpg',
  },
];

export default function Places() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>PLACES</h1>
        <p className={styles.description}>
          Lviv is filled with <strong>landmarks that reflect its rich past</strong> — from the medieval Lviv High Castle and iconic Rynok Square to ancient churches and hidden courtyards. Every street holds a piece of history waiting to be explored.
        </p>
        <div className={styles.grid}>
          {places.map((place, index) => (
            <Card
              key={index}
              title={place.title}
              address={place.address}
              image={place.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}
