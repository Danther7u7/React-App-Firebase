import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "dantech-63af6.firebaseapp.com",
  projectId: "dantech-63af6",
  storageBucket: "dantech-63af6.appspot.com",
  messagingSenderId: "394909613156",
  appId: "1:394909613156:web:12b72345409a7929cbb371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;