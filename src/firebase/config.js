import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3N_kRDwiB5WSIcR1UMfH6CspGGy4SPzQ",
  authDomain: "proyect-reactjs.firebaseapp.com",
  projectId: "proyect-reactjs",
  storageBucket: "proyect-reactjs.appspot.com",
  messagingSenderId: "682981174099",
  appId: "1:682981174099:web:fb5d12f8199e155daf8fa6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
