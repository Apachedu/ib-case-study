import React, { useState } from 'react';
import { useCaseStudies } from './useCaseStudies';
import CaseStudyList from './CaseStudyList.jsx';
import CaseStudyForm from './components/CaseStudyForm';

const CaseStudyDashboard = () => {
  const { caseStudies, loading } = useCaseStudies();
  const [selectedCase, setSelectedCase] = useState(null);

  const refresh = () => window.location.reload();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading case studies...</p>
      </div>
    );

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        IB Business Case Study Admin Panel
      </h2>
      <CaseStudyForm selectedCase={selectedCase} refresh={refresh} />
      <CaseStudyList caseStudies={caseStudies} onSelect={setSelectedCase} />
    </div>
  );
};

export default CaseStudyDashboard;
