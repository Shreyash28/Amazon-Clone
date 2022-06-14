// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnaSTUBlEy8O1OY9YoV5ZrpVHh0K76GCk",
  authDomain: "fir-e7a4a.firebaseapp.com",
  projectId: "fir-e7a4a",
  storageBucket: "fir-e7a4a.appspot.com",
  messagingSenderId: "127431576296",
  appId: "1:127431576296:web:f8513c1401e69c2c00575d",
  measurementId: "G-Q26SJF7F42",
};


const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore();
export { db,auth };
