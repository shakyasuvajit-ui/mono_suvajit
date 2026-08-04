// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrRh_bgBY59e59t7QR0xdW8WzR5A3mclw",
  authDomain: "mono-suvajit.firebaseapp.com",
  projectId: "mono-suvajit",
  storageBucket: "mono-suvajit.firebasestorage.app",
  messagingSenderId: "528264588886",
  appId: "1:528264588886:web:593b47a236370171a595f7",
  measurementId: "G-VV2J376NKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}