// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdbq4kRB9GnB3UTHZ6ut-cZBal7527V1M",
  authDomain: "dragon-news-bd-77907.firebaseapp.com",
  projectId: "dragon-news-bd-77907",
  storageBucket: "dragon-news-bd-77907.firebasestorage.app",
  messagingSenderId: "606401474287",
  appId: "1:606401474287:web:625831d0b54d9b4572351a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
