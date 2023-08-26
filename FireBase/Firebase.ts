// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBToGeRU5xfwEDeFzqDhdIMEYclCiw668o",
  authDomain: "test-c2aa5.firebaseapp.com",
  projectId: "test-c2aa5",
  storageBucket: "test-c2aa5.appspot.com",
  messagingSenderId: "327946983075",
  appId: "1:327946983075:web:70ca02d0941bdeb8a55116",
  measurementId: "G-JF4H8FJJT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);