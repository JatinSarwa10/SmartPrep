// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9gHO8I_Sn3IxUzKnVIXVVGDCiBgBoOak",
  authDomain: "smartprep-f663b.firebaseapp.com",
  projectId: "smartprep-f663b",
  storageBucket: "smartprep-f663b.firebasestorage.app",
  messagingSenderId: "594905538686",
  appId: "1:594905538686:web:ad08137e67298bd0b6f82f",
  measurementId: "G-5JMBQ4C5HX"
}; 

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app) 