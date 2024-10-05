// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fa26e.firebaseapp.com",
  projectId: "mern-blog-fa26e",
  storageBucket: "mern-blog-fa26e.appspot.com",
  messagingSenderId: "393650002456",
  appId: "1:393650002456:web:c1f09dab91ab0b32fc816d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
