// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    deleteDoc,
    setDoc,
    query,
    orderBy,
    getDocs,
    doc
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js"; // Versão atualizada para 11.4.0
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; // Versão atualizada para 11.4.0

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA38tuG--pUJEnSgVGHl7BC5DJwSsC_UVM",
    authDomain: "erp01-bd131.firebaseapp.com",
    projectId: "erp01-bd131",
    storageBucket: "erp01-bd131.firebasestorage.app",
    messagingSenderId: "108591567029",
    appId: "1:108591567029:web:cc89881c5b690eb1806efc",
    measurementId: "G-HMFXS45537"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


export { collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoc, query, orderBy };