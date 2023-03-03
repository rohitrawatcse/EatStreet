// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwz5urhovBjhcuPgCV04d4HdvFmoENZ6Q",
  authDomain: "jsprojectsdb.firebaseapp.com",
  databaseURL: "https://jsprojectsdb-default-rtdb.firebaseio.com",
  projectId: "jsprojectsdb",
  storageBucket: "jsprojectsdb.appspot.com",
  messagingSenderId: "346852776956",
  appId: "1:346852776956:web:694f6d0b00b7cecc317079",
  measurementId: "G-LZFGWKXV71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
