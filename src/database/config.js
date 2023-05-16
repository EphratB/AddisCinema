import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default firebaseConfig;
