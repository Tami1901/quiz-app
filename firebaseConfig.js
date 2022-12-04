// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiVq7kMLI557LaKE31XxY7wgxInJy1A-0",
  authDomain: "quiz-app-7d348.firebaseapp.com",
  projectId: "quiz-app-7d348",
  storageBucket: "quiz-app-7d348.appspot.com",
  messagingSenderId: "854289623171",
  appId: "1:854289623171:web:8f956cfd045d0944a413b6",
  measurementId: "G-4YT34HEFSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
