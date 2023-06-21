// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqen3DDuHDlx9N4jT3Nr_EE39kijeKSeM",
  authDomain: "react-chatapp-5163d.firebaseapp.com",
  projectId: "react-chatapp-5163d",
  storageBucket: "react-chatapp-5163d.appspot.com",
  messagingSenderId: "1031081993996",
  appId: "1:1031081993996:web:6f05a41124bdb41b5fcb29",
  measurementId: "G-LQRX7HHNS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();