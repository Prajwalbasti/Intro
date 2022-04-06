/*
import firebase from "firebase";
//import { auth } from "./firebase";
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ2fKBGg_6dqm11imHw94NwL4d9W-GJek",
    authDomain: "clone-f3056.firebaseapp.com",
    projectId: "clone-f3056",
    storageBucket: "clone-f3056.appspot.com",
    messagingSenderId: "439339205070",
    appId: "1:439339205070:web:3b490dad64c0b813d7ab9f",
    measurementId: "G-SWDRYVNED6"
  };

 const firebaseApp = firebase.initializeApp{firebaseConfig};

 const db = firebaseApp.firestore();
 const auth =firebase.auth();

 export default auth;

*/
 import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyBIGpnhJr2OlhSYa7ethhonc-OTW9VhoVA",
//     authDomain: "clone-1e5f0.firebaseapp.com",
//     databaseURL: "https://clone-1e5f0.firebaseio.com",
//     projectId: "clone-1e5f0",
//     storageBucket: "clone-1e5f0.appspot.com",
//     messagingSenderId: "706546941030",
//     appId: "1:706546941030:web:c9e4fb6a540b21ce23c1a7",
//     measurementId: "G-JSF4K0QH4G"
    
// });

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ2fKBGg_6dqm11imHw94NwL4d9W-GJek",
    authDomain: "clone-f3056.firebaseapp.com",
    projectId: "clone-f3056",
    storageBucket: "clone-f3056.appspot.com",
    messagingSenderId: "439339205070",
    appId: "1:439339205070:web:3b490dad64c0b813d7ab9f",
    measurementId: "G-SWDRYVNED6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
