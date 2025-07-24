// src/RunUpload.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import CaseStudyCard from './components/CaseStudyCard';

function RunUpload() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'caseStudies'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched case studies:", data); // ✅ Debugging line
        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <div>
      <h1>IB Case Studies 🔍</h1>
      {caseStudies.length === 0 ? (
        <p>Loading case studies from Firestore...</p>
      ) : (
        caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))
      )}
    </div>
  );
}

export default RunUpload;
