import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLoQkrkGoreEU77MzcbSUm_DSrWZV33Mo",
    authDomain: "test-55db8.firebaseapp.com",
    databaseURL: "https://test-55db8-default-rtdb.firebaseio.com",
    projectId: "test-55db8",
    storageBucket: "test-55db8.appspot.com",
    messagingSenderId: "421508944611",
    appId: "1:421508944611:web:a1971c43ab20033b176bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);