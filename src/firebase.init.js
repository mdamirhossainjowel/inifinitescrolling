import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzPZDdw5izxJy8kzqSeVXslzEfL3oTSJE",
  authDomain: "infinitescrolling-4f76d.firebaseapp.com",
  projectId: "infinitescrolling-4f76d",
  storageBucket: "infinitescrolling-4f76d.appspot.com",
  messagingSenderId: "464922135706",
  appId: "1:464922135706:web:162c07c30518c861f56323"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
