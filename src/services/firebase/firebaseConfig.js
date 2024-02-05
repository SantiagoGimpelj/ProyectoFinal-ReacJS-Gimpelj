import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDU5xoK5FiPiTAVY6ANS3iN2kQSvzU6iOg",
  authDomain: "distribuidora-rpg.firebaseapp.com",
  projectId: "distribuidora-rpg",
  storageBucket: "distribuidora-rpg.appspot.com",
  messagingSenderId: "64621315594",
  appId: "1:64621315594:web:4edf8aae51c860bc6581f3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)