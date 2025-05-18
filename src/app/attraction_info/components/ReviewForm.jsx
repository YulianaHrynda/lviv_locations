'use client';

import { useState } from 'react';
import { addReview } from '../../../firebase/addReview';
import styles from '../styles/review_form.module.css';

const ReviewForm = ({ placeId, onSubmitSuccess }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');

    try {
      const normalizedPlaceId = placeId?.toLowerCase().replace(/\s+/g, '-');
      await addReview(normalizedPlaceId, name, selectedRating, description);

      setName('');
      setDescription('');
      setSelectedRating(0);
      setSuccessMessage('Review submitted successfully!');

      if (onSubmitSuccess) onSubmitSuccess();

      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setSubmitting(false);
    }
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

          <button type="submit" className={styles.submitButton} disabled={submitting}>
            {submitting ? 'Submitting…' : 'Submit'}
          </button>

          {successMessage && (
            <p style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
              {successMessage}
            </p>
          )}
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

export default ReviewForm;
