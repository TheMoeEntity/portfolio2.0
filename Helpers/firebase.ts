import { initializeApp, getApps } from "firebase/app";
import "firebase/firestore";
import {
  collection,
  DocumentData,
  Firestore,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(firebase_app);
// const app = initializeApp(firebaseConfig);
// const database = getFirestore(app);

export const getDocuments = async () => {
  const colRef = collection(db, "projects");
  const docsSnap = await getDocs(colRef);
  let arr: DocumentData[] = [];
  docsSnap.forEach((doc) => {
    arr.push(doc.data());
  });
  return arr;
};
export default firebase_app;
