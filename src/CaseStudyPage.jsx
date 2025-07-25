// src/CaseStudyPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { caseStudies } from './caseStudies.js';

const CaseStudyPage = () => {
  const { id } = useParams();
  const selected = caseStudies.find(cs => cs.id === id);

  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showHelp, setShowHelp] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!selected) return <p className="p-6 text-red-600">Case study not found.</p>;

  const handleChange = (qId, val) => {
    setResponses(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    // Simulate feedback logic or call your backend here
    const newFeedback = {};
    selected.questions.forEach(q => {
      if (!responses[q.id] || responses[q.id].trim() === '') {
        newFeedback[q.id] = '❌ Please provide an answer.';
      } else {
        newFeedback[q.id] = `✅ Good start! Remember to include: ${q.sampleAnswer.substring(0, 80)}...`;
      }
    });
    setFeedback(newFeedback);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 font-sans text-gray-900">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-blue-700">{selected.title}</h1>

      {/* Case Text as paragraphs */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Case Study Overview</h2>
        {selected.caseText.split('\n').map((para, idx) => (
          <p key={idx} className="mb-4 leading-relaxed">{para.trim()}</p>
        ))}
      </section>

      {/* Data Table as simple bullet points */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Key Data</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {selected.dataTable.map((item, idx) => (
            <li key={idx}>
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      </section>

      {/* Help toggle */}
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {showHelp ? 'Hide Help Tips' : 'Show Help Tips'}
      </button>

      {/* Questions */}
      <section className="space-y-8">
        {selected.questions.map(q => (
          <div key={q.id} className="border border-gray-300 rounded-lg p-4 bg-blue-50">
            <p className="font-semibold text-lg mb-2">
              {q.text} <span className="text-sm text-gray-600">({q.marks} marks)</span>
            </p>
            <textarea
              rows={q.marks >= 10 ? 8 : 4}
              className="w-full border border-gray-400 rounded p-2 resize-y"
              value={responses[q.id] || ''}
              onChange={e => handleChange(q.id, e.target.value)}
              disabled={submitted}
            />

            {/* Conditional Help */}
            {showHelp && (
              <div className="mt-2 bg-white border-l-4 border-blue-600 p-3 text-sm text-gray-800 whitespace-pre-line">
                <strong>Hint:</strong> {q.sampleAnswer}
                <br />
                <em>Band descriptors:</em>
                <ul className="list-disc list-inside">
                  {q.banding.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Feedback after submit */}
            {submitted && feedback[q.id] && (
              <div className="mt-3 bg-yellow-100 border-l-4 border-yellow-400 p-3 text-sm whitespace-pre-line">
                <strong>Feedback:</strong> {feedback[q.id]}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Submit Button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
        >
          Submit Answers
        </button>
      )}

      {/* Citation & copyright */}
      <footer className="mt-10 text-xs text-gray-500 italic">
        <p>Sources cited as per IB requirements. © All case study content copyright protected.</p>
      </footer>
    </div>
  );
};

export default CaseStudyPage;
