'use client';
import { useState } from 'react';
import styles from '../styles/review_form.module.css'; // import the CSS module

const RewievForm = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className={styles.container}>
      <h1>
        SHARE <span>YOUR</span> THOUGHTS
      </h1>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <div className={styles['left-section']}>
          <div className={styles['input-group']}>
            <label htmlFor="name">YOUR NAME</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div>
            <label>YOUR RATING</label>
            <div className={styles['rating-container']}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleStarClick(star)}>
                  {star <= selectedRating ? '★' : '☆'}
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>

        <div className={styles['right-section']}>
          <label htmlFor="review">YOUR THOUGHTS</label>
          <textarea id="review" name="review" rows="4" required></textarea>
        </div>
      </form>
    </div>
  );
};

export default RewievForm;
