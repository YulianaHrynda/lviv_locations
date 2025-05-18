'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import styles from './Map.module.css';
import locations from '../../location/location';
import ToggleFilterBox from '../ToggleFilterBox/ToggleFilterBox';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icons for Next.js
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
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
  const [activeMarker, setActiveMarker] = useState(null);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
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
                      <img src={location.image} className={styles.infoImage} alt='' />
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
