
import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBMaezwLw1NrZs4JM7Oso4NhVaEqyegZYU",
  authDomain: "fir-e-commerce-683f0.firebaseapp.com",
  projectId: "fir-e-commerce-683f0",
  storageBucket: "fir-e-commerce-683f0.appspot.com",
  messagingSenderId: "534069272465",
  appId: "1:534069272465:web:3481ad5a5beadbf1570430"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app) // app a la cual le pensamos setear la authentication.

export const provider = new GoogleAuthProvider(auth)

export const signInWithGoogle = () => signInWithPopup( auth, provider)
 





