// src/CaseStudyDashboard.jsx
import React, { useState } from 'react';
import { useCaseStudies } from './useCaseStudies';
import { CaseStudyForm } from './firebaseConfig.jsx';
import CaseStudyList from './CaseStudyList.jsx';

const CaseStudyDashboard = () => {
  const { caseStudies, loading } = useCaseStudies();
  const [selectedCase, setSelectedCase] = useState(null);

  const refresh = () => window.location.reload();

  if (loading) return <p>Loading case studies...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>IB Business Case Study Admin Panel</h2>
      <CaseStudyForm selectedCase={selectedCase} refresh={refresh} />
      <CaseStudyList caseStudies={caseStudies} onSelect={setSelectedCase} />
    </div>
  );
};

export default CaseStudyDashboard;
