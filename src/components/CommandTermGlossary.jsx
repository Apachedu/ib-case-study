// src/components/CommandTermGlossary.jsx
import React from 'react';

const glossary = [
  {
    term: "Discuss",
    definition: "Offer a considered and balanced review that includes a range of arguments, factors, or hypotheses.",
    example: "Discuss the impact of fiscal policy on unemployment.",
  },
  {
    term: "Evaluate",
    definition: "Make an appraisal by weighing up the strengths and limitations.",
    example: "Evaluate the effectiveness of expansionary fiscal policy in Saudi Arabia.",
  },
  {
    term: "Explain",
    definition: "Give a detailed account including reasons or causes.",
    example: "Explain how price elasticity affects demand.",
  },
  // Add more command terms as needed
];

const CommandTermGlossary = () => {
  return (
    <section className="mt-10 p-4 border border-blue-300 rounded bg-blue-50">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Command Term Glossary</h2>
      <ul className="space-y-4">
        {glossary.map(({ term, definition, example }) => (
          <li key={term} className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800">{term}</h3>
            <p>{definition}</p>
            <p className="italic text-gray-700 mt-1">Example: {example}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommandTermGlossary;
