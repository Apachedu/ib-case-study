// src/CaseStudyPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyTemplate from './caseStudyTemplate.jsx';
import { caseStudies } from './caseStudies.js';

const CaseStudyPage = () => {
  const { id } = useParams();
  const selected = caseStudies.find(cs => cs.id === id);

  if (!selected) return <p>Case study not found.</p>;

  return (
    <CaseStudyTemplate
      title={selected.title}
      caseText={selected.caseText}
      dataTable={selected.dataTable.map(item => `${item.label}: ${item.value}`).join('\n')}
      questions={selected.questions.map(q => ({
        id: q.id,
        text: q.text,
        marks: q.marks,
        type: q.marks === 10 ? '10m' : '6m'
      }))}
    />
  );
};

export default CaseStudyPage;
