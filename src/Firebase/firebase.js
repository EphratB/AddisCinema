// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0IPz05yfrb89SQRk9M21B-OxIIYzorGs",
  authDomain: "addiscinema-6d1aa.firebaseapp.com",
  projectId: "addiscinema-6d1aa",
  storageBucket: "addiscinema-6d1aa.appspot.com",
  messagingSenderId: "1078145706966",
  appId: "1:1078145706966:web:f963ff33b6c44086abd277",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDatabase = app.database();

export { firebaseDatabase };
