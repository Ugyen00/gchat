import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaen5cL-zWwZr2q0Ujsa2FsDCIo4ucyfM",
  authDomain: "gchat-756a0.firebaseapp.com",
  projectId: "gchat-756a0",
  storageBucket: "gchat-756a0.appspot.com",
  messagingSenderId: "74201153529",
  appId: "1:74201153529:web:b7a7dad82299dd34a80728",
  measurementId: "G-2ZCG3V5HHP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
