// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider} from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnKLd02qNorgg829wg7irLUJ1vJ9BQBDc",
    authDomain: "iconic-guard-362816.firebaseapp.com",
    projectId: "iconic-guard-362816",
    storageBucket: "iconic-guard-362816.appspot.com",
    messagingSenderId: "316284802587",
    appId: "1:316284802587:web:e52d085659cf4689ee4abe",
    measurementId: "G-PY4KFT5WVV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);
console.log(analytics);

const auth = getAuth(app);

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new GoogleAuthProvider();

