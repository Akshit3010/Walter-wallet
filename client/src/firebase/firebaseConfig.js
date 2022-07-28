import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: `AIzaSyBDkj7pH5EVNpOfefGGjHUkkpI0lpTt8Vs`,
  authDomain: `walter-wallet-936dc.firebaseapp.com`,
  projectId: `walter-wallet-936dc`,
  storageBucket: `walter-wallet-936dc.appspot.com`,
  messagingSenderId: `784025454259`,
  appId: `1:784025454259:web:c7c86fd6e8ac86b6ebd2c6`,
});

const db = getAuth(app);
