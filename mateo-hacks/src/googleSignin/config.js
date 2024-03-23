// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlr-eDR3VaM4KGqgv2y09S-MPDZQ8xkiQ",
  authDomain: "boost-our-brains.firebaseapp.com",
  projectId: "boost-our-brains",
  storageBucket: "boost-our-brains.appspot.com",
  messagingSenderId: "642765830019",
  appId: "1:642765830019:web:e0b321d3d8717464cfa8b6",
  measurementId: "G-7VVGR1V0KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};