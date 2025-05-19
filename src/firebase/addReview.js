import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const addReview = async (placeId, name, grade, description) => {
  const reviewData = {
    placeId,
    name,
    grade,
    description,
    timestamp: serverTimestamp(),
  };

  await addDoc(collection(db, 'reviews'), reviewData);
};