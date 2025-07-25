import React, { useState } from 'react';

const brandColors = {
  primaryText: 'text-blue-700',
  buttonBg: 'bg-purple-700',
  buttonHover: 'hover:bg-purple-800',
  feedbackBg: 'bg-purple-100',
  feedbackBorder: 'border-purple-400',
};

const CaseStudyCard = ({ study }) => {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleChange = (e, questionId) => {
    const value = e.target.value;
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (questionId) => {
    if (!responses[questionId] || responses[questionId].trim() === '') {
      alert('Please write an answer before submitting.');
      return;
    }
    setSubmitted(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className={`text-3xl font-bold mb-4 ${brandColors.primaryText}`}>{study.title}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Case Study:</h2>
        <p className="whitespace-pre-line text-gray-800">{study.caseText}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Table:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {study.dataTable.map((item, idx) => (
            <li key={idx}>
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Questions:</h2>
        {study.questions.map((q) => (
          <div key={q.id} className="mb-8 border border-gray-200 rounded p-4 shadow-sm">
            <p className="mb-2 font-medium text-gray-900">
              {q.text} <span className="text-sm text-gray-500">({q.marks} marks)</span>
            </p>

            <textarea
              rows={5}
              className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={responses[q.id] || ''}
              onChange={(e) => handleChange(e, q.id)}
              placeholder="Write your answer here..."
            />

            <button
              onClick={() => handleSubmit(q.id)}
              className={`${brandColors.buttonBg} ${brandColors.buttonHover} text-white px-4 py-2 rounded`}
            >
              Check Feedback
            </button>

            {submitted[q.id] && (
              <div
                className={`${brandColors.feedbackBg} ${brandColors.feedbackBorder} border-l-4 mt-4 p-3 text-gray-900 whitespace-pre-line`}
              >
                <strong>Band Descriptors:</strong>
                <ul className="list-disc list-inside mb-2">
                  {q.banding.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <strong>Sample Answer:</strong>
                <p>{q.sampleAnswer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default CaseStudyCard;
