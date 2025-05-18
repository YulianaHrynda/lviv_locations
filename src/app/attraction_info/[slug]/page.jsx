'use client';

import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header/Header';
import Description from '../components/Description';
import Reviews from '../components/Reviews';
import RewievForm from '../components/ReviewForm';
import styles from './attraction.module.css';

export default function AttractionPage() {
  const params = useSearchParams();

  const title = params.get('title');
  const address = params.get('address');
  const image = params.get('image');
  const lat = params.get('lat');
  const lon = params.get('lon');

  return (
    <>
      <Header />
      <main className={styles.pageWrapper}>
        <Description
          title={title}
          address={address}
          image={image}
          lat={lat}
          lon={lon}
        />
        <Reviews placeId={title} />
        <RewievForm placeId={title} />
      </main>
    </>
  );
}
