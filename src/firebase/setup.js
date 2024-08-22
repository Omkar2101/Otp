// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import {getAuth} from "firebase/auth"
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBK5u8nQvOK6DgU7AhC6xivSZK8a-ApQT0",
//   authDomain: "otp-pro-bad9a.firebaseapp.com",
//   projectId: "otp-pro-bad9a",
//   storageBucket: "otp-pro-bad9a.appspot.com",
//   messagingSenderId: "890848983923",
//   appId: "1:890848983923:web:1de46c568af90fd5a72306"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJWO7OKogkS9fl_xZcrJfCK3b5qt8BeGQ",
  authDomain: "otp-project-a637a.firebaseapp.com",
  projectId: "otp-project-a637a",
  storageBucket: "otp-project-a637a.appspot.com",
  messagingSenderId: "254450954603",
  appId: "1:254450954603:web:a0120d8bf26aef7c771c2e",
  measurementId: "G-BSKRYL3D9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)