import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHra_cYmt7RGZ4WdN_yKw7VqvPSb9-uDE",
  authDomain: "bussinesdirectory.firebaseapp.com",
  projectId: "bussinesdirectory",
  storageBucket: "bussinesdirectory.firebasestorage.app",
  messagingSenderId: "638884515415",
  appId: "1:638884515415:web:5bf3646082da5388579d12"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 