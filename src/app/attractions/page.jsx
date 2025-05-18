import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import styles from '../Page.module.css';

const attractions = [
  {
    title: 'City Hall Tower',
    address: 'Rynok Square',
    image: '/cityhall.jpg',
  },
  {
    title: 'Ivan Franko Park',
    address: 'Universytetska St.',
    image: '/franko-park.jpg',
  },
  {
    title: 'Lviv Tram Ride',
    address: 'Throughout the City',
    image: '/tram.jpg',
  },
  {
    title: 'Street Performers Zone',
    address: 'Rynok Square Area',
    image: '/performers.jpg',
  },
];

export default function Attractions() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>ATTRACTIONS</h1>
        <p className={styles.description}>
          Explore Lviv’s vibrant streets, climb the City Hall tower for panoramic views, stroll through picturesque
          parks, and admire centuries-old architecture. Street performers, colorful markets, and historic trams
          add to the city’s unique charm.
        </p>
        <div className={styles.grid}>
          {attractions.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              address={item.address}
              image={item.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}
