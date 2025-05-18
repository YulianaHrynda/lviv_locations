'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/reviews.module.css';

const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (placeId) {
      const mockReviews = [
        {
          id: 1,
          name: 'Anna',
          grade: 5,
          description: 'Amazing experience! Highly recommend.',
        },
        {
          id: 2,
          name: 'Mark',
          grade: 4,
          description: 'Great place but a bit crowded.',
        },
      ];

      setReviews(mockReviews);
    }
  }, [placeId]);

  return (
    <div>
      <div className={styles.heading_div}>
        <h1 className={styles.heading}>REVIEWS</h1>
      </div>
      <div className={styles.container}>
        {reviews.map((review, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Reviews;
