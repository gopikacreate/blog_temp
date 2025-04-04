import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB-goS5RNjQe_1aBqBQYL4m-hPMenGvmOo",
    authDomain: "blog-temp-cf71b.firebaseapp.com",
    projectId: "blog-temp-cf71b",
    storageBucket: "blog-temp-cf71b.firebasestorage.app",
    messagingSenderId: "212258762703",
    appId: "1:212258762703:web:d3730817812d67a8a2ecba"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore (Database)
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
 const storage = getStorage(app);


export { db, auth, googleProvider,storage };
