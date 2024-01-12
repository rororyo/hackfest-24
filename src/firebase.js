import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDHZOmC3wqbu6oTllK2QOCUyLo4V2kX0vk',
  authDomain: 'mychatapp-81ceb.firebaseapp.com',
  projectId: 'mychatapp-81ceb',
  storageBucket: 'mychatapp-81ceb.appspot.com',
  messagingSenderId: '186103250800',
  appId: '1:186103250800:web:1d3d4a377f81df0b7619b5',
  measurementId: 'G-JRC0PPJ161',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
