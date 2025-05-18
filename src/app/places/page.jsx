'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import styles from '../Page.module.css';

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await fetch('/api/places');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPlaces(data);
      } catch (err) {
        setError('Failed to load places.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>PLACES</h1>
        <p className={styles.description}>
          Lviv is filled with <strong>landmarks that reflect its rich past</strong> — from the medieval Lviv High Castle and iconic Rynok Square to ancient churches and hidden courtyards. Every street holds a piece of history waiting to be explored.
        </p>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className={styles.grid}>
          {places.map((place, index) => (
            <Card
              key={index}
              title={place.title}
              address={place.address}
              image={place.image}
              lat={place.lat}
              lon={place.lon}
            />
          ))}
        </div>
      </main>
    </>
  );
}
