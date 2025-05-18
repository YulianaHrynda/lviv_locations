'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import styles from '../Page.module.css';

export default function Attractions() {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const res = await fetch('/api/attractions');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setAttractions(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load attractions.');
      } finally {
        setLoading(false);
      }
    };

    fetchAttractions();
  }, []);

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

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className={styles.grid}>
          {attractions.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              address={item.address}
              image={item.image}
              lat={item.lat}
              lon={item.lon}
            />
          ))}
        </div>
      </main>
    </>
  );
}
