import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function addReview(placeId, name, grade, description) {
  const reviewsRef = collection(db, 'places', placeId, 'reviews');
  await addDoc(reviewsRef, {
    name,
    grade,
    description,
    createdAt: new Date()
  });
}
