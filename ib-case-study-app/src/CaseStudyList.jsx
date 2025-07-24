// src/CaseStudyList.jsx
import React from 'react';

const CaseStudyList = ({ caseStudies, onSelect }) => {
  return (
    <div>
      <h3>Available Case Studies</h3>
      <ul>
        {caseStudies.map(study => (
          <li
            key={study.id}
            style={{ cursor: 'pointer', margin: '10px 0', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}
            onClick={() => onSelect(study)}
          >
            <strong>{study.title}</strong> — {study.topic} ({study.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudyList;
