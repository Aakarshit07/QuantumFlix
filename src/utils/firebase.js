// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCtOOvUkNoRK7hi8WOg9hGPLtyjkgP_WA",
  authDomain: "netflixgpt-a9ebb.firebaseapp.com",
  projectId: "netflixgpt-a9ebb",
  storageBucket: "netflixgpt-a9ebb.appspot.com",
  messagingSenderId: "1001870618417",
  appId: "1:1001870618417:web:d44ef2837c4ec1f7a00a10",
  measurementId: "G-E9D0LE2M86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  auth = getAuth()