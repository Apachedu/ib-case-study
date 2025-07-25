// src/CaseStudyTemplate.jsx
import React, { useState } from "react";
import logo from './assets/logo.png'; // adjust if needed

const brandColors = {
  primary: "text-blue-600",
  buttonBg: "bg-blue-600",
  buttonHover: "hover:bg-blue-700",
};

export default function CaseStudyTemplate({ title, caseText, dataTable, questions }) {
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showHelp, setShowHelp] = useState(true);

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
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <header className="flex items-center space-x-4 mb-6">
        <img src={logo} alt="Brand Logo" className="h-16" />
        <h1 className={`text-3xl font-bold ${brandColors.primary}`}>{title}</h1>
      </header>

      <section className="prose max-w-none">
        <h2>Case Study</h2>
        <p>{caseText}</p>
      </section>

      {dataTable && dataTable.length > 0 && (
        <section className="mt-6">
          <h2>Data</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Label</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((item, idx) => (
                <tr key={idx} className="odd:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{item.label}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <section className="mt-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h2>Questions</h2>
          <button
            onClick={() => setShowHelp(!showHelp)}
            className={`${brandColors.buttonBg} ${brandColors.buttonHover} text-white px-3 py-1 rounded`}
          >
            {showHelp ? "Hide Help" : "Show Help"}
          </button>
        </div>

        {questions.map(({ id, text, marks, commandTerm, banding, sampleAnswer }) => (
          <div key={id} className="border rounded p-4 bg-blue-50">
            <label className="font-semibold block mb-1">
              {text} <span className="text-sm text-gray-700">({marks} marks)</span>
            </label>
            <textarea
              rows={marks === 10 ? 8 : 4}
              className="w-full p-2 border rounded"
              value={responses[id] || ""}
              onChange={e => handleChange(id, e.target.value)}
              placeholder="Write your answer here..."
            />
            <button
              onClick={() => evaluateResponse(id, marks === 10 ? "10m" : "6m")}
              className={`${brandColors.buttonBg} ${brandColors.buttonHover} text-white mt-2 px-3 py-1 rounded`}
            >
              Check Feedback
            </button>

            {showHelp && (
              <div className="mt-2 bg-yellow-100 border-l-4 border-yellow-400 p-3 text-sm whitespace-pre-line">
                <strong>Command Term:</strong> {commandTerm || "See question"}<br />
                <strong>Markband:</strong>
                <ul className="list-disc list-inside">
                  {banding && banding.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <strong>Sample Answer:</strong>
                <p className="italic">{sampleAnswer || "N/A"}</p>
              </div>
            )}
          </div>
        ))}

        <div className="mt-6">
          <button
            className={`${brandColors.buttonBg} ${brandColors.buttonHover} text-white font-bold px-6 py-2 rounded`}
            onClick={() => alert("Answers submitted! Feedback feature coming soon.")}
          >
            Submit Answers
          </button>
        </div>
      </section>

      <footer className="mt-10 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} IB Case Studies. All rights reserved.</p>
      </footer>
    </div>
  );
}
