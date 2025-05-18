'use client';

import Header from '../components/Header/Header';
import dynamic from 'next/dynamic';
import pageStyles from '../Page.module.css';

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false });

export default function MapPage() {
  return (
    <>
      <Header />
      <main className={pageStyles.container}>
        <h1 className={pageStyles.title}>MAP</h1>
        <p className={pageStyles.description}>
          Use the map to easily find Lviv’s top attractions, historical sites, and hidden gems.
          Whether you're planning your walk through the Old Town or looking for your next stop,
          the map helps you explore the city with confidence.
        </p>
        <div className={pageStyles.mapWrapper}>
          <Map />
        </div>
        <div style={{ height: '4rem' }}></div>
      </main>
    </>
  );
}
