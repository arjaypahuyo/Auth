import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTb2izQeXizmerTsSW90STYM0zoBrQPY",
  authDomain: "authentication-83d8b.firebaseapp.com",
  projectId: "authentication-83d8b",
  storageBucket: "authentication-83d8b.appspot.com",
  messagingSenderId: "244482784286",
  appId: "1:244482784286:web:ff619344af77e0eafe420f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)