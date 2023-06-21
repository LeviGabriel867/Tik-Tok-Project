import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyCBkqr-dWzczPQP5wXwiMmLaPl9sSRZ_O0",
  authDomain: "tiktok---projeto.firebaseapp.com",
  projectId: "tiktok---projeto",
  storageBucket: "tiktok---projeto.appspot.com",
  messagingSenderId: "1075525728783",
  appId: "1:1075525728783:web:e10ed1bd093d24b3c9417a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;