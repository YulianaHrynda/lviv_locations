'use client';
import { useEffect, useState } from 'react';
import { getReviews } from '../firebase/getReviews';
import Image from 'next/image';
import styles from '../styles/reviews.module.css';

const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const data = await getReviews(placeId);
    setReviews(data);
  };

  useEffect(() => {
    if (placeId) fetchReviews();
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
