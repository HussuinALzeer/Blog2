// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogs-e30ca.firebaseapp.com",
  projectId: "blogs-e30ca",
  storageBucket: "blogs-e30ca.appspot.com",
  messagingSenderId: "948097454830",
  appId: "1:948097454830:web:67f5f7c8a9d89576d799ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);