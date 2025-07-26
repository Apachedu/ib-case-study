import React from 'react';
import { caseStudies } from './caseStudies';

const CaseStudyDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>
      <p className="text-sm text-gray-600 mb-8">Browse or manage all uploaded case studies.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map(cs => (
          <div key={cs.id} className="bg-white p-5 rounded shadow hover:shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-blue-600">{cs.title}</h2>
            <p className="text-sm text-gray-500">{cs.topic} | <em>{cs.level}</em></p>
            <pre className="text-xs text-gray-700 mt-2 whitespace-pre-wrap line-clamp-4">
              {cs.caseText}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyDashboard;
