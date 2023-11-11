
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBn34ftp8a-2s77qV-I1NVZklJ9bLeaCik",
  authDomain: "fir-course-9877b.firebaseapp.com",
  projectId: "fir-course-9877b",
  storageBucket: "fir-course-9877b.appspot.com",
  messagingSenderId: "582835816737",
  appId: "1:582835816737:web:bad8ccc8eef437f1b11660",
  measurementId: "G-T62W9K6HYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
