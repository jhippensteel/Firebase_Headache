// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// https://firebase.google.com/docs/web/setup#available-libraries
import { } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

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