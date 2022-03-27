// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  indexedDBLocalPersistence,
} from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore";

// * Add your firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyCaR9ORpUCJu-oft3IQ9a6ia1fShBXq5Ms",
  authDomain: "verify-user-21f45.firebaseapp.com",
  projectId: "verify-user-21f45",
  storageBucket: "verify-user-21f45.appspot.com",
  messagingSenderId: "203923253168",
  appId: "1:203923253168:web:0297d0a8a6556691669875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: [
    indexedDBLocalPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
  ],
  popupRedirectResolver: browserPopupRedirectResolver,
});

//init services
export const db = getFirestore(app);

export const colRef = collection(db, "users");

export const getDoc = getDocs(colRef).then((snapshot) => {
  snapshot.docs.forEach((data) => {
    // users.push({...doc.data(), id : doc.id})
    console.log(data.data());
  });
});
export default app;
