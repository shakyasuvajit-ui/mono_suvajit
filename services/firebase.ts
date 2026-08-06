import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { Auth, createUserWithEmailAndPassword, getAuth, initializeAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Firestore, initializeFirestore } from "firebase/firestore";

const firebaseAuth = require("firebase/auth");
const persistence = typeof firebaseAuth?.getReactNativePersistence === "function" ? firebaseAuth.getReactNativePersistence(ReactNativeAsyncStorage) : undefined;

const firebaseConfig = {
  apiKey: "AIzaSyDrRh_bgBY59e59t7QR0xdW8WzR5A3mclw",
  authDomain: "mono-suvajit.firebaseapp.com",
  projectId: "mono-suvajit",
  storageBucket: "mono-suvajit.firebasestorage.app",
  messagingSenderId: "528264588886",
  appId: "1:528264588886:web:593b47a236370171a595f7",
  measurementId: "G-VV2J376NKK"
};

let app: FirebaseApp | null = null;
let auth: Auth;
let firestore: Firestore;
// Initialize Firebase
export function initializeFirebase() {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  try {
    auth = initializeAuth(app, { persistence });
  } catch (error) {
    console.log("Error initializing auth", error);
    auth = getAuth(app);
  }
  firestore=initializeFirestore(app,{});
  return { app, auth, firestore };
}


export function signUp(fullName: string, email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    return updateProfile(userCredential.user, { displayName: fullName }).then(() => {
      return userCredential;
    });
  });
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function getCurrentUser() {
  return auth.currentUser;
}

export function signOut() {
  return signOut();
}

export { app, auth, firestore};