// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj0JP7wmaxjwaVjV8sBFeADuD6opDSPos",
  authDomain: "goiaba-6b252.firebaseapp.com",
  projectId: "goiaba-6b252",
  storageBucket: "goiaba-6b252.appspot.com",
  messagingSenderId: "40746063287",
  appId: "1:40746063287:web:48abebae6a886ea83e8432",
  measurementId: "G-HF6E18GZ77"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
