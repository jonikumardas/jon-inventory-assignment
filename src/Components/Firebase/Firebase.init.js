import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV68x-sVcVRm3Q4aEYvQ-CcKd5FYN9eEQ",
  authDomain: "car-inventory-368aa.firebaseapp.com",
  projectId: "car-inventory-368aa",
  storageBucket: "car-inventory-368aa.appspot.com",
  messagingSenderId: "777138293372",
  appId: "1:777138293372:web:95d026e32da919073117f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;