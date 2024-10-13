import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-841f0.firebaseapp.com",
  projectId: "reactchatapp-841f0",
  storageBucket: "reactchatapp-841f0.appspot.com",
  messagingSenderId: "287218520224",
  appId: "1:287218520224:web:990852fb368ac94ccbb9c5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()