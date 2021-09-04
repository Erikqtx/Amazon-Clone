// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGbyGTXJyhWkVjuY8pOqtvYMJHr1-lhYE",
  authDomain: "clone-f67c3.firebaseapp.com",
  projectId: "clone-f67c3",
  storageBucket: "clone-f67c3.appspot.com",
  messagingSenderId: "290087703166",
  appId: "1:290087703166:web:67565e4ae1cce517fe7e2f",
  measurementId: "G-T46DK9C9EV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
