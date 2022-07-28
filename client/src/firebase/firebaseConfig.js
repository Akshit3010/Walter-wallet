// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKq3A5ed4oEB1cyMXhFuH069O8liNTuck",
  authDomain: "walter-wallet.firebaseapp.com",
  projectId: "walter-wallet",
  storageBucket: "walter-wallet.appspot.com",
  messagingSenderId: "567594445317",
  appId: "1:567594445317:web:3b238ac4188d766e424a6c",
  measurementId: "G-WBZ9524W01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);