// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHcXegAgDAem3mhdJidTzDA8RpMnLZRmY",
  authDomain: "caronas-ufmg-engsw.firebaseapp.com",
  projectId: "caronas-ufmg-engsw",
  storageBucket: "caronas-ufmg-engsw.appspot.com",
  messagingSenderId: "630386793604",
  appId: "1:630386793604:web:837ee3dffb3cdfdaa976d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);