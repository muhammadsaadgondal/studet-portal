
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const FireBaseConfig = {
  apiKey: "AIzaSyDbcCguWa3xWxlrC7K0NtMzYN5FHgutSec",
  authDomain: "studentportal-1696640684536.firebaseapp.com",
  projectId: "studentportal-1696640684536",
  storageBucket: "studentportal-1696640684536.appspot.com",
  messagingSenderId: "51898080231",
  appId: "1:51898080231:web:fbd954f2b715f9f5013b42",
  measurementId: "G-PT6FDB3NX5"
};


const app = initializeApp(FireBaseConfig);
const auth = getAuth(app); // Include the getAuth function
const database = getDatabase(app);

export { auth, database }; // Export the auth instance



