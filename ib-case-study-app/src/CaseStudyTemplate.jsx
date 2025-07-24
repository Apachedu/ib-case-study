import React, { useState } from "react";

export default function CaseStudyTemplate({ title, caseText, dataTable, questions }) {
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});

  const feedbackTemplates = {
    "6m": `
✅ Aim for mid-to-high level responses (markband 4–6):
- Define command terms.
- Use one key business tool (e.g., break-even, ratio, PED).
- Apply context-specific data.
- Basic balance of pros/cons.
- End with a short justification.
    `,
    "10m": `
✅ Aim for top-band answers (markband 7–10):
- Define all key terms.
- Use at least one business tool (SWOT, Ansoff, STEEPLE).
- Analyze short- and long-term impacts.
- Justify with case data or examples.
- Conclusion must be balanced and supported.
    `
  };

  const handleChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  const evaluateResponse = (id, type) => {
    const answer = responses[id] || "";
    let fb = "";
    if (!answer.trim()) {
      fb = "❌ Please write a response before checking.";
    } else {
      fb = feedbackTemplates[type] || "✅ General structure is okay. Include IB markband elements.";
    }
    setFeedback({ ...feedback, [id]: fb });
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

      <div className="bg-white p-4 border rounded shadow">
        <h3 className="text-lg font-semibold">📖 Case Study:</h3>
        <p className="text-gray-700 whitespace-pre-line">{caseText}</p>
      </div>

      {dataTable && (
        <div className="bg-gray-50 p-4 border rounded shadow">
          <h3 className="text-lg font-semibold mb-2">📊 Data:</h3>
          <pre className="text-sm text-gray-800 whitespace-pre-wrap">{dataTable}</pre>
        </div>
      )}

      {questions.map(({ id, text, marks, type }) => (
        <div key={id} className="bg-blue-50 p-4 border rounded-xl shadow space-y-2">
          <label className="font-medium text-gray-700 block">
            {text} <span className="text-sm text-gray-500">({marks} marks)</span>
          </label>
          <textarea
            rows={type === "10m" ? 8 : 4}
            className="w-full border p-2 rounded"
            value={responses[id] || ""}
            onChange={(e) => handleChange(id, e.target.value)}
          />
          <button
            onClick={() => evaluateResponse(id, type)}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Check Feedback
          </button>
          {feedback[id] && (
            <div className="mt-2 text-sm bg-yellow-100 border-l-4 border-yellow-400 p-2 whitespace-pre-line">
              {feedback[id]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
