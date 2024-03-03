
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "studentportal-1696640684536.firebaseapp.com",
  databaseURL: "https://studentportal-1696640684536-default-rtdb.firebaseio.com",
  projectId: "studentportal-1696640684536",
  storageBucket: "studentportal-1696640684536.appspot.com",
  messagingSenderId: "51898080231",
  appId: "1:51898080231:web:fbd954f2b715f9f5013b42",
  measurementId: "G-PT6FDB3NX5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Include the getAuth function
const database = getDatabase(app);

export { auth, database }; // Export the auth instance



