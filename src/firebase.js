import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzDcnxL8nTrxZetieQSPO37tpSymU2EBs",
    authDomain: "last-week-fe45d.firebaseapp.com",
    projectId: "last-week-fe45d",
    storageBucket: "last-week-fe45d.appspot.com",
    messagingSenderId: "768489541576",
    appId: "1:768489541576:web:cfd195778dee7e164dbafd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);