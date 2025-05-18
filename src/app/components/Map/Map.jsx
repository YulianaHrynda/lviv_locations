'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import styles from './Map.module.css';
import ToggleFilterBox from '../ToggleFilterBox/ToggleFilterBox';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon.src || icon,
  shadowUrl: iconShadow.src || iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const center = {
  lat: 49.8397,
  lng: 24.0297,
};

export default function MapComponent() {
  const [selectedCategories, setSelectedCategories] = useState(['museums', 'places', 'attractions']);
  const [locations, setLocations] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

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

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapBox}>
        <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            attribution='© OpenStreetMap contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {locations
            .filter((loc) => selectedCategories.includes(loc.type))
            .map((location, index) => (
              <Marker
                key={index}
                position={location.position}
                eventHandlers={{
                  click: () => setActiveMarker(index),
                }}
              >
                {activeMarker === index && (
                  <Popup>
                    <div className={styles.infoBox}>
                      <img src={location.image} className={styles.infoImage} alt={location.title} />
                      <h3>{location.title}</h3>
                      <p>{location.address}</p>
                      <p>★ 5/5</p>
                    </div>
                  </Popup>
                )}
              </Marker>
            ))}
        </MapContainer>

        <ToggleFilterBox
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
        />
      </div>
    </div>
  );
}
