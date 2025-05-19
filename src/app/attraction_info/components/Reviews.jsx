'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/reviews.module.css';
import { getReviews } from '../../../firebase/GetReview';

const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(placeId);
        setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews.');
      } finally {
        setLoading(false);
      }
    };

    if (placeId) fetchReviews();
  }, [placeId]);

  return (
    <div>
      <div className={styles.heading_div}>
        <h1 className={styles.heading}>REVIEWS</h1>
      </div>

      {loading && <p>Loading reviews...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={styles.container}>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to leave one!</p>
        ) : (
          reviews.map((review, index) => (
            <div className={styles.review} key={review.id || index}>
              <div className={styles.header}>
                <span>{review.name}</span>
              </div>
              <div className={styles.stars}>
                <Image src="/Star 1.svg" alt="star" width={20} height={20} />
                <span>{review.grade}/5</span>
              </div>
              <p>{review.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
