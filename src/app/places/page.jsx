'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import styles from '../Page.module.css';
import Link from 'next/link';

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
          {places
            .filter((place) => place.image && !place.image.includes('placeholder'))
            .map((place, index) => {
              const slug = encodeURIComponent(place.title.toLowerCase().replace(/\s+/g, '-'));

              return (
                <div key={index} className={styles.cardLink}>
                  <Link
                    href={{
                      pathname: `/attraction_info/${slug}`,
                      query: {
                        title: place.title,
                        address: place.address,
                        image: place.image,
                        lat: place.lat,
                        lon: place.lon,
                        description: place.description || '',
                        phone: place.phone || '',
                        website: place.website || '',
                      },
                    }}
                  >
                    <Card
                      title={place.title}
                      address={place.address}
                      image={place.image}
                      lat={place.lat}
                      lon={place.lon}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
