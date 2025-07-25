import React from 'react';

const CaseStudyList = ({ caseStudies, onSelect }) => {
  return (
    <div className="bg-white shadow rounded p-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Available Case Studies</h3>
      <ul className="divide-y divide-gray-200">
        {caseStudies.map((study) => (
          <li
            key={study.id}
            onClick={() => onSelect(study)}
            className="cursor-pointer py-3 hover:bg-blue-50 rounded px-3 transition"
          >
            <strong className="text-lg">{study.title}</strong>
            <p className="text-gray-600">
              {study.topic} — <span className="font-medium">{study.level}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudyList;
