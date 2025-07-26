import React, { useState } from 'react';

const brandColors = {
  primaryText: 'text-blue-700',
  buttonBg: 'bg-blue-600',
  buttonHover: 'hover:bg-blue-700',
  hintText: 'text-blue-900',
  hintBg: 'bg-blue-50',
  feedbackBg: 'bg-blue-100',
};

export default function CaseStudyTemplate({ title, caseText, dataTable, questions }) {
  const [helpMode, setHelpMode] = useState(false);
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});

  const toggleHelp = () => setHelpMode(prev => !prev);

  const handleChange = (id, value) => {
    setResponses(prev => ({ ...prev, [id]: value }));
  };

  const evaluateResponse = (id, type) => {
    const answer = responses[id] || '';
    let fb = '';

    if (!answer.trim()) {
      fb = '❌ Please write a response before checking.';
    } else {
      // Placeholder: You can replace this with your detailed feedback logic
      fb = `✅ Feedback for ${id} (markband: ${type}m)\n\nModel answers:\n- Band 5: Good understanding with some application.\n- Band 6: Clear analysis and evaluation.\n- Band 7: Excellent insight and detailed justification.`;
    }
    setFeedback(prev => ({ ...prev, [id]: fb }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className={`text-4xl font-extrabold mb-6 ${brandColors.primaryText}`}>{title}</h1>

      <section className="bg-white p-6 rounded shadow mb-8 text-lg whitespace-pre-line">
        <h2 className="font-semibold mb-3">Case Study</h2>
        {caseText}
      </section>

      {dataTable && (
        <section className="bg-gray-50 p-4 rounded shadow mb-8 font-mono text-base whitespace-pre-wrap">
          <h2 className="font-semibold mb-3">Data Table</h2>
          {dataTable}
        </section>
      )}

      <button
        onClick={toggleHelp}
        className={`${brandColors.buttonBg} ${brandColors.buttonHover} text-white font-semibold px-5 py-3 rounded mb-8`}
      >
        {helpMode ? 'Hide Help' : 'Show Help'}
      </button>

      {questions.map(({ id, text, marks, type, hint, toolkitLink }) => (
        <section key={id} className="bg-blue-50 p-6 rounded shadow mb-8">
          <label className="block font-bold text-blue-700 text-xl mb-3">
            {text} <span className="text-sm text-gray-600">({marks} marks)</span>
          </label>

          {helpMode && (
            <div className={`${brandColors.hintBg} p-4 mb-4 rounded`}>
              <p className={`${brandColors.hintText} mb-1`}>
                <strong>Hint:</strong> <span className="font-semibold">{hint || 'Refer to relevant IB Business concepts.'}</span>
              </p>
              {toolkitLink && (
                <p className={`${brandColors.hintText}`}>
                  <strong>Toolkit:</strong>{' '}
                  <a
                    href={toolkitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    View Concept
                  </a>
                </p>
              )}
            </div>
          )}

          <textarea
            rows={12}
            className="w-full p-4 border border-blue-400 rounded text-lg resize-y"
            value={responses[id] || ''}
            onChange={(e) => handleChange(id, e.target.value)}
          />

          <button
            onClick={() => evaluateResponse(id, type)}
            className={`${brandColors.buttonBg} ${brandColors.buttonHover} text-white font-semibold mt-4 px-6 py-3 rounded`}
          >
            Check Feedback
          </button>

          {feedback[id] && (
            <pre className={`mt-4 p-4 ${brandColors.feedbackBg} border-l-4 border-blue-600 rounded whitespace-pre-wrap`}>
              {feedback[id]}
            </pre>
          )}
        </section>
      ))}

      <button
        className={`${brandColors.buttonBg} ${brandColors.buttonHover} text-white font-semibold px-8 py-4 rounded w-full max-w-md mx-auto block`}
        onClick={() => alert('Submit functionality coming soon!')}
      >
        Submit Answers
      </button>
    </div>
  );
}
