import React, { useEffect, useState } from 'react';
import '../App.css';

function CaseStudyCard({ study }) {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState({});

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`responses-${study.id}`);
    if (stored) {
      setResponses(JSON.parse(stored));
    }
  }, [study.id]);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(`responses-${study.id}`, JSON.stringify(responses));
  }, [responses, study.id]);

  const handleChange = (e, questionId) => {
    const value = e.target.value;
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = (questionId) => {
    setSubmitted((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  return (
    <div className="case-study">
      <h2>{study.title}</h2>

      <div className="section">
        <p><strong>Level:</strong> {study.level}</p>
        <p><strong>Topic:</strong> {study.topic}</p>
        <p><strong>Module:</strong> {study.module}</p>
        {study.relatedTopics && <p><strong>Related Topics:</strong> {study.relatedTopics.join(", ")}</p>}
        {study.toolkit && <p><strong>Toolkit:</strong> {study.toolkit.join(", ")}</p>}
      </div>

      <div className="section">
        <h3>📖 Case Study:</h3>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{study.caseText}</pre>
      </div>

      <div className="section">
        <h3>📊 Data:</h3>
        <ul>
          {study.dataTable.map((item, index) => (
            <li key={index}><strong>{item.label}:</strong> {item.value}</li>
          ))}
        </ul>
      </div>

      {study.iaLink && <div className="section">🔎 <strong>IA Link:</strong> {study.iaLink}</div>}
      {study.eeLink && <div className="section">📘 <strong>EE Hook:</strong> {study.eeLink}</div>}
      {study.tokLink && <div className="section">🧠 <strong>TOK Connection:</strong> {study.tokLink}</div>}

      <div className="section">
        <h3>📝 Questions:</h3>
        {study.questions.map((q) => (
          <div key={q.id} className="question-block">
            <p>
              <strong>{q.text}</strong>
              <span className="badge">{q.level}</span>
              <span className="marks">[{q.marks} marks]</span>
            </p>
            <textarea
              value={responses[q.id] || ''}
              onChange={(e) => handleChange(e, q.id)}
              rows={4}
              cols={60}
            />
            <button onClick={() => handleSubmit(q.id)}>Check Feedback</button>

            {submitted[q.id] && (
              <div className="feedback">
                <p><strong>Band Descriptors:</strong></p>
                <ul>
                  {q.banding.map((band, idx) => (
                    <li key={idx}>{band}</li>
                  ))}
                </ul>
                <p><strong>Sample Answer:</strong> {q.sampleAnswer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section">
        <h3>📘 Post-Study Resources:</h3>
        <p>{study.resources}</p>
      </div>
    </div>
  );
}

export default CaseStudyCard;
