// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADN-qgDWsc6hZikOKbUWsqTltwpqFBops",
  authDomain: "finance-tracker-app-10d9e.firebaseapp.com",
  projectId: "finance-tracker-app-10d9e",
  storageBucket: "finance-tracker-app-10d9e.appspot.com",
  messagingSenderId: "1077738909884",
  appId: "1:1077738909884:web:9ee7ffd0e2bc0c1e1aa0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
 export { app, db, auth};