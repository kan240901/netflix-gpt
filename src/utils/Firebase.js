// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBKZdjMU_WLRrWyKt6Ypw4kTYm8J8h9gY",
  authDomain: "netflixgpt-7e598.firebaseapp.com",
  projectId: "netflixgpt-7e598",
  storageBucket: "netflixgpt-7e598.firebasestorage.app",
  messagingSenderId: "170315651821",
  appId: "1:170315651821:web:0db233b9706d5af4ae4ae4",
  measurementId: "G-FGYHCLMX8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();