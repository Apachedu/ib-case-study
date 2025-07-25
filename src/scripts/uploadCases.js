// src/scripts/uploadCases.js
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { caseStudies } from '../data/caseStudies';

export const uploadCaseStudies = async () => {
  const caseRef = collection(db, 'caseStudies');

  for (const study of caseStudies) {
    try {
      await addDoc(caseRef, study);
      console.log(`✅ Uploaded: ${study.id}`);
    } catch (err) {
      console.error(`❌ Error uploading ${study.id}:`, err);
    }
  }
};
