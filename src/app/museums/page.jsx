'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import styles from '../Page.module.css';

export default function Museums() {
  const [museums, setMuseums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const res = await fetch('/api/landmarks');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setMuseums(data);
      } catch (err) {
        setError('Failed to load museum data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMuseums();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>MUSEUMS</h1>

        <p className={styles.description}>
          <span className={styles.superBold}>Lviv’s museums</span> offer a rich mix of history, art, and culture. These are sourced live from OpenStreetMap and enriched with Wikipedia.
        </p>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className={styles.grid}>
          {museums
            .filter((museum) => museum.image && !museum.image.includes('placeholder'))
            .map((museum, index) => (
              <Card
                key={index}
                title={museum.title}
                address={museum.address}
                image={museum.image}
                link={museum.link}
                lat={museum.lat}
                lon={museum.lon}
              />
            ))}
        </div>
      </main>
    </>
  );
}
