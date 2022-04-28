// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvwbk5fxolIhjVtPyKSQOvw8ZWnEdr3lY",
  authDomain: "gestortarjeta.firebaseapp.com",
  projectId: "gestortarjeta",
  storageBucket: "gestortarjeta.appspot.com",
  messagingSenderId: "146781227567",
  appId: "1:146781227567:web:b43ba0a60eadf979ae54da",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
