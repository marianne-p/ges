// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9FTSySDvy7RJP2Nq-s5XM2-PM1hoalY0",
  authDomain: "green-earth-d4ac2.firebaseapp.com",
  projectId: "green-earth-d4ac2",
  storageBucket: "green-earth-d4ac2.firebasestorage.app",
  messagingSenderId: "198965926768",
  appId: "1:198965926768:web:4d582ce4dfae40bab54db5",
  measurementId: "G-MWRJ4SVMML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
export { perf };