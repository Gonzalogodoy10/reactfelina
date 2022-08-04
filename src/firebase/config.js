
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHGnFZLVKuPztb1sQ_f-ZOYbQiqnFfu10",
  authDomain: "e-commerce-276a3.firebaseapp.com",
  projectId: "e-commerce-276a3",
  storageBucket: "e-commerce-276a3.appspot.com",
  messagingSenderId: "368007709944",
  appId: "1:368007709944:web:56f130fb09086275a9a70d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}