// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLh8Gk9cBrmJcXUZlIe7mqfKV5e8wbWnA",
  authDomain: "capstone-c2569.firebaseapp.com",
  projectId: "capstone-c2569",
  storageBucket: "capstone-c2569.appspot.com",
  messagingSenderId: "612252432072",
  appId: "1:612252432072:web:24d85ef1b96e6b402517fd",
  measurementId: "G-ZT867929MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();
// const auth = getAuth(firebaseConfig);

//Get Authentication
const auth = getAuth(app);

//Detect Auth State

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});

export { auth, googleProvider };

