import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore/lite";
import {getStorage, ref, uploadBytes} from 'firebase/storage'

import { useAuth } from "../hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyBMaezwLw1NrZs4JM7Oso4NhVaEqyegZYU",
  authDomain: "fir-e-commerce-683f0.firebaseapp.com",
  projectId: "fir-e-commerce-683f0",
  storageBucket: "fir-e-commerce-683f0.appspot.com",
  messagingSenderId: "534069272465",
  appId: "1:534069272465:web:3481ad5a5beadbf1570430",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app); // app a la cual le pensamos setear la authentication.

const storage = getStorage();

export const provider = new GoogleAuthProvider(auth);
provider.getCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signUp = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password)
}

/* export const createUserDocument = async (user, adittionalData) =>{
  if (!user) return

  const userRef = doc(Firestore, 'users/128dawawdawd')

} */

// Storage

export const upload = async (file, currentUser, setLoading) =>{
  const fileRef = ref(storage, currentUser.uid)

  setLoading(true)
  const snapshot = await uploadBytes(fileRef, file)
  setLoading(false)
  alert('uploaded file!')

}