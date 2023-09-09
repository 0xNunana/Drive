// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPkFlDcejtikRst2AaYt4fkv7TPeA-txY",
  authDomain: "xnunana-drive.firebaseapp.com",
  projectId: "xnunana-drive",
  storageBucket: "xnunana-drive.appspot.com",
  messagingSenderId: "256094962144",
  appId: "1:256094962144:web:58bde186133604b67dab85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)
