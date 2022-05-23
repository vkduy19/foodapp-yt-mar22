import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
//   authDomain: "restaurantapp-c2ed6.firebaseapp.com",
//   //databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
  
//   projectId: "restaurantapp-c2ed6",
//   storageBucket: "restaurantapp-c2ed6.appspot.com",
//   messagingSenderId: "174416156605",
//   appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDrEDJHNOD3cs50YqVBA-xaNncHH2VKmFA",
  authDomain: "food-app-ea05e.firebaseapp.com",
  databaseURL: "https://food-app-ea05e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-app-ea05e",
  storageBucket: "food-app-ea05e.appspot.com",
  messagingSenderId: "289491144658",
  appId: "1:289491144658:web:4c5afaa5950faccea1c20b",
  measurementId: "G-JF7F7783YL"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
