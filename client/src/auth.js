// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyA64tFiEvx2_2MOleWrClBVT6PM4mVROus",
  authDomain: "aerosystem-2d36c.firebaseapp.com",
  projectId: "aerosystem-2d36c",
  storageBucket: "aerosystem-2d36c.firebasestorage.app",
  messagingSenderId: "1052847495761",
  appId: "1:1052847495761:web:391e9f947d0435eae43670",
  measurementId: "G-23JT3MPBL7"
=======
  apiKey: "AIzaSyANhgZF1wAAD24-JDZ780RDRs0i_0-sPz0",
  authDomain: "customerapp-f50ff.firebaseapp.com",
  projectId: "customerapp-f50ff",
  storageBucket: "customerapp-f50ff.firebasestorage.app",
  messagingSenderId: "681143401691",
  appId: "1:681143401691:web:10c411cde54e9c912c60fe"
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Add this
const analytics = getAnalytics(app);

export { auth };
