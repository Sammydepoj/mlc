// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB3gCyrC9xF6c65EuwgQXtyPTpKm___8k",
  authDomain: "spefind.firebaseapp.com",
  projectId: "spefind",
  storageBucket: "spefind.appspot.com",
  messagingSenderId: "176581857802",
  appId: "1:176581857802:web:013e03e21e096c836b85f3",
  measurementId: "G-T63C4EX5VK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
