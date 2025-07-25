// src/useCaseStudies.js
import { useState, useEffect } from 'react';
import { getCaseStudies } from './firebaseConfig.jsx';

export const useCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCaseStudies();
      setCaseStudies(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { caseStudies, loading };
};
