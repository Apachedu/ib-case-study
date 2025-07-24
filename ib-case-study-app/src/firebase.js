// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Define multiple Firebase configurations
const firebaseConfigs = {
  main: {
    apiKey: "AIzaSyAxns05_hEcEIoh-qmjO1ksVJjdvRDP7n0",
    authDomain: "ibcasestudies-1784e.firebaseapp.com",
    projectId: "ibcasestudies-1784e",
    storageBucket: "ibcasestudies-1784e.appspot.com",
    messagingSenderId: "547857666534",
    appId: "1:547857666534:web:0970ef90482e387b3bc627",
    measurementId: "G-8V4WGJD9HT"
  },
  webinar: {
    apiKey: "AIzaSyB4_scj4_g2c7x3oojobMBuoGJK4Vl6wMo",
    authDomain: "ibcasestudies-webinar.firebaseapp.com",
    projectId: "ibcasestudies-webinar",
    storageBucket: "ibcasestudies-webinar.appspot.com",
    messagingSenderId: "401140167731",
    appId: "1:401140167731:web:c72788200c30da79951f46"
  }
};

// ✅ SWITCH PROJECT HERE:
const ACTIVE_CONFIG = firebaseConfigs.main; // 🔁 Change to .webinar when needed

// Initialize Firebase
const app = initializeApp(ACTIVE_CONFIG);

// Export Firestore
export const db = getFirestore(app);
