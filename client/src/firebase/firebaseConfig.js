import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const app = initializeApp({
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: ` ${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
// });

const app = initializeApp({
  apiKey: `AIzaSyBDkj7pH5EVNpOfefGGjHUkkpI0lpTt8Vs`,
  authDomain: `walter-wallet-936dc.firebaseapp.com`,
  projectId: `walter-wallet-936dc`,
  storageBucket: `walter-wallet-936dc.appspot.com`,
  messagingSenderId: `784025454259`,
  appId: `1:784025454259:web:c7c86fd6e8ac86b6ebd2c6`,
});

const db = getAuth(app);
