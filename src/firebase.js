// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGn1EDjIh5WzBlW9gww1o1Pe4zQqci3nw",
  authDomain: "blogging-website-mha.firebaseapp.com",
  projectId: "blogging-website-mha",
  storageBucket: "blogging-website-mha.appspot.com",
  messagingSenderId: "219089445118",
  appId: "1:219089445118:web:be5fb6bf72c15065a705af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export const firestore = getFirestore(app);

export {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    auth,
    db,
  };