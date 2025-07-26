import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import caseStudies from "./caseStudies.json"; // path to your JSON file

const firebaseConfig = {
  apiKey: "AIzaSyAxns05_hEcEIoh-qmjO1ksVJjdvRDP7n0",
  authDomain: "ibcasestudies-1784e.firebaseapp.com",
  projectId: "ibcasestudies-1784e",
  storageBucket: "ibcasestudies-1784e.appspot.com",
  messagingSenderId: "547857666534",
  appId: "1:547857666534:web:0970ef90482e387b3bc627",
  measurementId: "G-8V4WGJD9HT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadCaseStudies() {
  for (const study of caseStudies) {
    try {
      await addDoc(collection(db, "caseStudies"), study);
      console.log(`Uploaded: ${study.title}`);
    } catch (error) {
      console.error("Failed to upload:", study.title, error);
    }
  }
  console.log("All uploads complete!");
}

uploadCaseStudies();
