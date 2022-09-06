// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import {firebase} from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnaSTUBlEy8O1OY9YoV5ZrpVHh0K76GCk",
  authDomain: "fir-e7a4a.firebaseapp.com",
  projectId: "fir-e7a4a",
  storageBucket: "fir-e7a4a.appspot.com",
  messagingSenderId: "127431576296",
  appId: "1:127431576296:web:f8513c1401e69c2c00575d",
  measurementId: "G-Q26SJF7F42",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };