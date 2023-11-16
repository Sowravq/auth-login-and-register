// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2JvaRKax1ZDHJYBJ8ycL9h2ndXuj1ug",
  authDomain: "auth-login-and-register.firebaseapp.com",
  projectId: "auth-login-and-register",
  storageBucket: "auth-login-and-register.appspot.com",
  messagingSenderId: "701991787028",
  appId: "1:701991787028:web:e7dfb362609d69070ea501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;