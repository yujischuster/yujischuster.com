// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKazXAbTemNAvH8jPjUj-5hUspeLmseSk",
  authDomain: "yujischuster-site.firebaseapp.com",
  projectId: "yujischuster-site",
  storageBucket: "yujischuster-site.appspot.com",
  messagingSenderId: "803632831870",
  appId: "1:803632831870:web:30a8f036c0270a1724e72f",
  measurementId: "G-T0B06S3SSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);