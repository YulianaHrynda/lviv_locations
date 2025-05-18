'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
        console.error(err);
        setError('Failed to load museum data.');
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
          Lviv’s museums offer a rich mix of history, art, and culture. From classical galleries to unique spots like the Pharmacy Museum and Prison on Lontskoho, each visit reveals a different side of the city’s story.
        </p>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className={styles.grid}>
          {museums
            .filter((museum) => museum.image && !museum.image.includes('placeholder'))
            .map((museum, index) => {
              const slug = encodeURIComponent(museum.title.toLowerCase().replace(/\s+/g, '-'));

              return (
                <div key={index} className={styles.cardLink}>
                  <Link
                    href={{
                      pathname: `/attraction_info/${slug}`,
                      query: {
                        title: museum.title,
                        address: museum.address,
                        image: museum.image,
                        lat: museum.lat,
                        lon: museum.lon,
                        description: museum.description || '',
                        phone: museum.phone || '',
                        website: museum.website || '',
                      },
                    }}
                  >
                    <Card
                      title={museum.title}
                      address={museum.address}
                      image={museum.image}
                      lat={museum.lat}
                      lon={museum.lon}
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
