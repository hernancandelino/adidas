import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCK7PUzoglm8kcFUk7bbbthnILDcNMczo8",
    authDomain: "adidas-3cd8b.firebaseapp.com",
    projectId: "adidas-3cd8b",
    storageBucket: "adidas-3cd8b.appspot.com",
    messagingSenderId: "186985861896",
    appId: "1:186985861896:web:fa2a46e8e6290aa946d2bd"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);