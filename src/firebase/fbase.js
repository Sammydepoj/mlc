// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwudE_zMxfE0qdqMAEV0M398e8FP00cCg",
  authDomain: "minimumleavingcost.firebaseapp.com",
  databaseURL: "https://minimumleavingcost-default-rtdb.firebaseio.com",
  projectId: "minimumleavingcost",
  storageBucket: "minimumleavingcost.appspot.com",
  messagingSenderId: "478958488048",
  appId: "1:478958488048:web:4637b67d2f1e7672ef7535",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
