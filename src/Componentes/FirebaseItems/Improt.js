// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XczWwQKxQMVabo3fl7r27cN_tp0mweY",
  authDomain: "login-email-password-4c0dd.firebaseapp.com",
  projectId: "login-email-password-4c0dd",
  storageBucket: "login-email-password-4c0dd.firebasestorage.app",
  messagingSenderId: "1075966508788",
  appId: "1:1075966508788:web:769d7f906a0271876268a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 