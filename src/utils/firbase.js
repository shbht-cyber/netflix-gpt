// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkL5vN-drB3wu10Ap4uBkKkyHPeI8tx6c",
  authDomain: "netflix-gpt-5a4c4.firebaseapp.com",
  projectId: "netflix-gpt-5a4c4",
  storageBucket: "netflix-gpt-5a4c4.firebasestorage.app",
  messagingSenderId: "956679516108",
  appId: "1:956679516108:web:67e4d86248515fe288b769",
  measurementId: "G-1G3YM2YZR1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
