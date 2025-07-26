import React, { useState } from 'react';

const brand = {
  text: 'text-brandBlue',
  bgLight: 'bg-blue-50',
  button: 'bg-brandGreen hover:bg-green-700',
  border: 'border-brandBlue',
};

export default function CaseStudyTemplate({ title, caseText, dataTable, questions }) {
  const [help, setHelp] = useState(false);
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleToggleHelp = () => setHelp(!help);

  const handleChange = (id, value) => {
    setResponses(prev => ({ ...prev, [id]: value }));
  };

  const handleFeedback = (id, marks, sample) => {
    const val = responses[id]?.trim();
    if (!val) {
      setFeedback(prev => ({ ...prev, [id]: '❌ Please enter a response before checking.' }));
    } else {
      setFeedback(prev => ({
        ...prev,
        [id]: `✅ Model Insight: ${sample.substring(0, 100)}...

Markband Guidance:
- Band 5: Some analysis, little application.
- Band 6: Good structure, some evaluation.
- Band 7: Strong application + evaluation.`,
      }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 font-sans">
      <h1 className={`text-3xl font-bold mb-6 ${brand.text}`}>{title}</h1>

      <section className="bg-white p-5 rounded shadow mb-8 text-lg leading-relaxed whitespace-pre-wrap">
        {caseText}
      </section>

      {dataTable && (
        <section className="bg-gray-50 p-4 mb-8 rounded border text-sm font-mono">
          <strong>Data Table:</strong>
          <pre>{dataTable}</pre>
        </section>
      )}

      <button
        className={`${brand.button} text-white font-semibold px-4 py-2 rounded mb-8`}
        onClick={handleToggleHelp}
      >
        {help ? 'Hide Help' : 'Show Help'}
      </button>

      {questions.map(({ id, text, marks, sampleAnswer }) => (
        <div key={id} className={`${brand.bgLight} p-6 mb-8 rounded border ${brand.border}`}>
          <label className="block font-semibold text-lg mb-2">
            {text} <span className="text-sm text-gray-500">({marks} marks)</span>
          </label>

          {help && (
            <div className="bg-white border-l-4 border-blue-300 p-4 mb-4">
              <strong>Sample:</strong> {sampleAnswer.substring(0, 150)}...
            </div>
          )}

          <textarea
            rows={marks >= 10 ? 10 : 6}
            className="w-full border p-3 rounded mb-3"
            value={responses[id] || ''}
            onChange={e => handleChange(id, e.target.value)}
          />

          <button
            onClick={() => handleFeedback(id, marks, sampleAnswer)}
            className={`${brand.button} text-white px-4 py-2 rounded`}
          >
            Check Feedback
          </button>

          {feedback[id] && (
            <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-300 text-sm whitespace-pre-line">
              {feedback[id]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
