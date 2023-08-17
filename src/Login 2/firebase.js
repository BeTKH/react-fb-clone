import firebase from "firebase";

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
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
