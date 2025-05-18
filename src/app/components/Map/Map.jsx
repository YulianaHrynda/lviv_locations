'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, InfoWindowF, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import ToggleFilterBox from '../ToggleFilterBox/ToggleFilterBox';

const center = { lat: 49.8397, lng: 24.0297 };

const containerStyle = {
  width: '100%',
  height: '500px',
};

const getMarkerIcon = (type) => {
  switch (type) {
    case 'museums':
      return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
    case 'places':
      return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    case 'attractions':
      return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    default:
      return undefined;
  }
};

export default function MapComponent() {
  const [selectedCategories, setSelectedCategories] = useState(['museums', 'places', 'attractions']);
  const [locations, setLocations] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [museumsRes, placesRes, attractionsRes] = await Promise.all([
          fetch('/api/landmarks'),
          fetch('/api/places'),
          fetch('/api/attractions'),
        ]);

        const [museums, places, attractions] = await Promise.all([
          museumsRes.json(),
          placesRes.json(),
          attractionsRes.json(),
        ]);

        const enrich = (items, type) =>
          items
            .filter((item) => item.lat && item.lon && item.image && !item.image.includes('placeholder'))
            .map((item) => ({
              type,
              title: item.title,
              address: item.address,
              image: item.image,
              position: { lat: item.lat, lng: item.lon },
            }));

        setLocations([
          ...enrich(museums, 'museums'),
          ...enrich(places, 'places'),
          ...enrich(attractions, 'attractions'),
        ]);
      } catch (error) {
        console.error('Failed to load locations:', error);
      }
    };

    fetchAll();
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapBox}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {locations
            .filter((loc) => selectedCategories.includes(loc.type))
            .map((location, index) => (
              <MarkerF
                key={index}
                position={location.position}
                icon={getMarkerIcon(location.type)}
                onClick={() => setActiveMarker(index)}
              >
                {activeMarker === index && (
                  <InfoWindowF position={location.position} onCloseClick={() => setActiveMarker(null)}>
                    <div className={styles.infoBox}>
                      <img src={location.image} className={styles.infoImage} alt={location.title} />
                      <h3>{location.title}</h3>
                      <p>{location.address}</p>
                      <button
                        className={styles.infoButton}
                        onClick={() => {
                          const slug = encodeURIComponent(location.title.toLowerCase().replace(/\s+/g, '-'));
                          const url = `/attraction_info/${slug}?title=${encodeURIComponent(
                            location.title
                          )}&address=${encodeURIComponent(location.address)}&image=${encodeURIComponent(
                            location.image
                          )}&lat=${location.position.lat}&lon=${location.position.lng}`;
                          window.location.href = url;
                        }}
                      >
                        More Info
                      </button>
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            ))}
        </GoogleMap>

        <ToggleFilterBox
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
        />
      </div>
    </div>
  );
}
