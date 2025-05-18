'use client';

import { useState } from 'react';
import styles from './ToggleFilterBox.module.css';

export default function ToggleFilterBox({ selectedCategories, toggleCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className={styles.filterBox}>
          <div className={styles.filterHeader}>
            <h2 className={styles.filterTitle}>WHAT ARE YOU LOOKING FOR?</h2>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
          </div>
          {['museums', 'places', 'attractions'].map((category) => (
            <label key={category} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkboxInput}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      ) : (
        <button className={styles.fab} onClick={() => setIsOpen(true)}>
          🔍
        </button>
      )}
    </>
  );
}
