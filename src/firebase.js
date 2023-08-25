import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb8HqI4chk4YxADobp9UBuitP4YVpIJzI",
  authDomain: "fakebok-clone.firebaseapp.com",
  projectId: "fakebok-clone",
  storageBucket: "fakebok-clone.appspot.com",
  messagingSenderId: "755919758223",
  appId: "1:755919758223:web:2d1c2995b1f768991961fa",
  measurementId: "G-1GVGF6XVCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

//authentication
