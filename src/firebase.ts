// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB178Oh-Fwz8AzGASbtoPY0qB8-HbOuRMk",
  authDomain: "householdtypescript-89028.firebaseapp.com",
  projectId: "householdtypescript-89028",
  storageBucket: "householdtypescript-89028.firebasestorage.app",
  messagingSenderId: "595089683753",
  appId: "1:595089683753:web:4c20cd2d0e7469c73ff338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};