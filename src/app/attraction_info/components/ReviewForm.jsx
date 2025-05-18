'use client';
import { useState } from 'react';
import styles from '../styles/review_form.module.css';

const RewievForm = ({ placeId, onSubmitSuccess }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      placeId,
      name,
      grade: selectedRating,
      description,
    };

    console.log('Review submitted:', review);

    setName('');
    setDescription('');
    setSelectedRating(0);
    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <div className={styles.container}>
      <h1>
        SHARE <span>YOUR</span> THOUGHTS
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles['left-section']}>
          <div className={styles['input-group']}>
            <label htmlFor="name">YOUR NAME</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className={styles.ratingLabel}>YOUR RATING</label>
            <div className={styles['rating-container']}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setSelectedRating(star)}
                  style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                >
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
          <textarea
            id="review"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default RewievForm;
