// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA64tFiEvx2_2MOleWrClBVT6PM4mVROus",
  authDomain: "aerosystem-2d36c.firebaseapp.com",
  projectId: "aerosystem-2d36c",
  storageBucket: "aerosystem-2d36c.firebasestorage.app",
  messagingSenderId: "1052847495761",
  appId: "1:1052847495761:web:391e9f947d0435eae43670",
  measurementId: "G-23JT3MPBL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Add this
const analytics = getAnalytics(app);

export { auth };
