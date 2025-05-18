import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export const getReviews = async (placeId) => {
  const q = query(
    collection(db, 'reviews'),
    where('placeId', '==', placeId),
    orderBy('timestamp', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
