// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq6XjYGndkCynauvxivUrmOsMLyC3RVJY",
  authDomain: "plazi-8aa5c.firebaseapp.com",
  projectId: "plazi-8aa5c",
  storageBucket: "plazi-8aa5c.appspot.com",
  messagingSenderId: "674962646790",
  appId: "1:674962646790:web:4ee455b24ca3c5dfc9e087",
  measurementId: "G-Y251GG6Q5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
