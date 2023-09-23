// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5aXrqncNRsPpec03bZlbnZSZ_LDFnao",
  authDomain: "disneyplus-858ba.firebaseapp.com",
  projectId: "disneyplus-858ba",
  storageBucket: "disneyplus-858ba.appspot.com",
  messagingSenderId: "609128790528",
  appId: "1:609128790528:web:62689d0d610f4855e9f6e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider= new GoogleAuthProvider();

export {auth, storage, provider};
export default db;