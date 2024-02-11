// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjY0iQ0YdFgMQf-kxmzGGFpDdEYCQBttY",
  authDomain: "d-diary-fba85.firebaseapp.com",
  projectId: "d-diary-fba85",
  storageBucket: "d-diary-fba85.appspot.com",
  messagingSenderId: "900640546247",
  appId: "1:900640546247:web:d8aca3d1b87dfe454b4de2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
