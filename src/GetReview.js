import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getReviews(placeId) {
  const reviewsRef = collection(db, 'places', placeId, 'reviews');
  const snapshot = await getDocs(reviewsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
