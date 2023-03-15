// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_hL-40jgUJdNyRegptczZ94utEb4-VwI",
  authDomain: "notflix-66835.firebaseapp.com",
  projectId: "notflix-66835",
  storageBucket: "notflix-66835.appspot.com",
  messagingSenderId: "584045119665",
  appId: "1:584045119665:web:6c4ec67a95bece03d17a90",
  measurementId: "G-B362DLNBZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);