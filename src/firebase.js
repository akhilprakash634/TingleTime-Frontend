// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { 
  apiKey: "AIzaSyAu5K7B9rXXXStFPbGJBGRnP8MuLgCqzbs",
  authDomain: "tingletime-62e37.firebaseapp.com",
  projectId: "tingletime-62e37",
  storageBucket: "tingletime-62e37.firebasestorage.app",
  messagingSenderId: "836995607908",
  appId: "1:836995607908:web:b3d3a894c3ccdb31bc1e71",
  measurementId: "G-NYV0NNSET3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
