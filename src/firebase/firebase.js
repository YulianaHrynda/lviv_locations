import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJJ3XFcBJf5JfKGtOH2C5RcQB-chacT2w",
  authDomain: "lviv-sightseeings.firebaseapp.com",
  projectId: "lviv-sightseeings",
  storageBucket: "lviv-sightseeings.appspot.com",
  messagingSenderId: "543880476813",
  appId: "1:543880476813:web:b769b3d174c852dc1f0ac4",
  measurementId: "G-B8F6ZXSNY9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { db, analytics };
