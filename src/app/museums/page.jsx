import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import styles from '../Page.module.css';

const museums = [
  {
    title: 'Arsenal Museum',
    address: '5 Pidvalna St.',
    image: '/arsenal.jpg',
  },
  {
    title: 'Pharmacy Museum',
    address: '2 Drukarska St.',
    image: '/pharmacy.jpg',
  },
  {
    title: 'Sheptytskyi National Museum',
    address: '20 Svobody Ave.',
    image: '/sheptytskyi.jpg',
  },
  {
    title: 'Kulchytska Memorial Museum',
    address: '7 Lystopadovoho Chynu St.',
    image: '/kulchytska.jpg',
  },
];

export default function Museums() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>MUSEUMS</h1>
        <p className={styles.description}>
          <span className={styles.superBold}>Lviv’s museums</span> offer a rich mix of history, art, and culture.
          From classical galleries to unique spots like the Pharmacy Museum and Prison on Lontskogo, each
          visit reveals a different side of the city’s story.
        </p>
        <div className={styles.grid}>
          {museums.map((museum, index) => (
            <Card
              key={index}
              title={museum.title}
              address={museum.address}
              image={museum.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}
