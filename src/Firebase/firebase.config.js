// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf817nZQVLywnthcdCImoLGmUyS7yi-cg",
  authDomain: "dragon-news-9a3da.firebaseapp.com",
  projectId: "dragon-news-9a3da",
  storageBucket: "dragon-news-9a3da.firebasestorage.app",
  messagingSenderId: "587407846093",
  appId: "1:587407846093:web:c4403e571cdbce7e5a5784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;