import { useEffect, useState } from 'react';
import { getReviews } from '../firebase/getReviews';

export default function Reviews({ placeId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (placeId) {
      getReviews(placeId).then(setReviews);
    }
  }, [placeId]);

  return (
    <section>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <strong>{review.name}</strong> rated {review.grade}/5
          <p>{review.description}</p>
        </div>
      ))}
    </section>
  );
}
