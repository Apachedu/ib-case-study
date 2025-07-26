// src/components/FeedbackAndModelAnswers.jsx
import React from 'react';

const FeedbackAndModelAnswers = ({ feedback, responses, questions }) => {
  return (
    <section className="mt-10 p-4 border border-yellow-400 rounded bg-yellow-50">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">Feedback & Model Answers</h2>

      {questions.map(q => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg text-yellow-900">{q.text}</p>
          <p className="italic mb-1">Your answer:</p>
          <div className="whitespace-pre-wrap bg-yellow-100 p-3 rounded mb-2 border border-yellow-300">
            {responses[q.id] || <span className="text-yellow-600 italic">No answer provided</span>}
          </div>
          <p className="font-semibold">Feedback:</p>
          <div className="whitespace-pre-wrap bg-yellow-200 p-3 rounded mb-2 border border-yellow-400">
            {feedback[q.id]}
          </div>
          <p className="font-semibold">Model Answer:</p>
          <div className="whitespace-pre-wrap bg-yellow-100 p-3 rounded border border-yellow-300">
            {q.sampleAnswer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeedbackAndModelAnswers;
