import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const useCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'caseStudies'));
        const studies = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCaseStudies(studies);
      } catch (error) {
        console.error('Error loading case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return { caseStudies, loading };
};

