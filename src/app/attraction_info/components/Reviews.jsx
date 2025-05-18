'use client';
import Image from 'next/image';
import styles from '../styles/reviews.module.css';// Note lowercase name if that's your filename

const Reviews = () => {
  const reviews = [
    {
      user: 'John228',
      rating: '5/5',
      text: 'The Arsenal Museum was really cool — tons of old weapons and armor that made me feel like I was in a medieval movie. It’s not too big, but definitely worth a visit if you\'re into history or just want to see something different.',
    },
    {
      user: 'Maria',
      rating: '4/5',
      text: 'I didn’t expect to enjoy it so much, but the old weapons and armor were super interesting. It’s a cool, slightly spooky place that gives you a feel of what battles looked like back in the day.',
    },
    {
      user: 'Alex',
      rating: '4/5',
      text: 'A fascinating look into history. The displays were well-organized and informative, and I loved seeing the evolution of weaponry over time.',
    },
  ];

  return (
    <div>
      <div className={styles.heading_div}>
        <h1 className={styles.heading}>REVIEWS</h1>
      </div>
      <div className={styles.container}>
        {reviews.map((review, index) => (
          <div className={styles.review} key={index}>
            <div className={styles.header}>
              <span>{review.user}</span>
            </div>
            <div className={styles.stars}>
              <Image src="/Star 1.svg" alt="star" width={20} height={20} />
              <span>{review.rating}</span>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;