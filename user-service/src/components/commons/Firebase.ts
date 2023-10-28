// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesgetFirestore
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAhXMraYtwxaQ8pC9jN9qW59LIO7yBAjM",
  authDomain: "doan-project-402308.firebaseapp.com",
  projectId: "doan-project-402308",
  storageBucket: "doan-project-402308.appspot.com",
  messagingSenderId: "206068804608",
  appId: "1:206068804608:web:b4bec52aa556bb175abce5",
  measurementId: "G-89K4736JL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersClRef = collection(db, "users"); // users collection ref

export { db, usersClRef };
