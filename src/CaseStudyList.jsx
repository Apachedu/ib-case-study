import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from './caseStudies';

const CaseStudyList = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">IB Business Case Studies</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map(cs => (
          <li key={cs.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Link to={`/case/${cs.id}`}>
              <h2 className="text-xl font-semibold text-blue-700 hover:underline">{cs.title}</h2>
              <p className="text-sm text-gray-500">{cs.topic} — <em>{cs.level}</em></p>
              <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                {cs.caseText.substring(0, 100)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudyList;
